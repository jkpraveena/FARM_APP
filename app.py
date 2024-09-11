import os
import numpy as np
import tensorflow as tf
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model
MODEL_PATH = './backend/model/plant_disease_model.h5'

if not os.path.isfile(MODEL_PATH):
    raise FileNotFoundError(f"Model file not found at path: {MODEL_PATH}")

model = load_model(MODEL_PATH)

# Create the uploads directory if it does not exist
UPLOAD_FOLDER = './uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Function to preprocess image before prediction
def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(256, 256))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img /= 255.0
    return img

# API route to predict disease
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)
    
    try:
        # Preprocess the image
        img = preprocess_image(file_path)
        
        # Make the prediction
        predictions = model.predict(img)
        predicted_class = np.argmax(predictions[0])
        
        # Return the predicted class (you should map this to disease names)
        return jsonify({'prediction': int(predicted_class)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# API route to register a new user
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    # Logic to store user info in the database
    # (In real projects, you would store the password securely using hashing)

    return jsonify({'status': 'success', 'message': 'User registered successfully!'})

# API route to login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    # Logic to check the username and password from the database
    if username == 'admin' and password == 'password':  # Example logic
        return jsonify({'status': 'success', 'message': 'Login successful!'})
    else:
        return jsonify({'status': 'failure', 'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)