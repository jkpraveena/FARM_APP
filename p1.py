from flask import Flask, request, jsonify, send_file
import tensorflow as tf
import numpy as np
from gtts import gTTS
import os
from io import BytesIO

app = Flask(__name__)

# Load the trained model
model = tf.keras.models.load_model('./backend/model/plant1_disease_model.h5')

# Define a function to predict disease and generate voice feedback
def predict_and_generate_voice(image_path):
    # Load and preprocess the image
    img = tf.keras.utils.load_img(image_path, target_size=(256, 256))
    img_array = tf.keras.utils.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0

    # Predict the class
    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions, axis=1)[0]

    # Generate voice feedback
    feedback_text = f'The predicted disease is {predicted_class}. Please refer to the recommended treatment.'
    tts = gTTS(text=feedback_text, lang='en')
    audio_file = BytesIO()
    tts.write_to_fp(audio_file)
    audio_file.seek(0)

    return predicted_class, audio_file

@app.route('/predict', methods=['POST'])
def predict():
    # Check if an image file is part of the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    # Save the file temporarily
    file_path = './temp_image.jpg'
    file.save(file_path)

    # Get prediction and voice feedback
    predicted_class, audio_file = predict_and_generate_voice(file_path)
    
    # Clean up temporary file
    os.remove(file_path)

    return send_file(audio_file, mimetype='audio/mp3', as_attachment=True, download_name='feedback.mp3')

if __name__ == '__main__':
    app.run(debug=True)