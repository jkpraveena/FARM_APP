from flask import Flask, render_template, request, redirect
from models import db, Review

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///reviews.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


# Home route to display all reviews
@app.route('/')
def index():
    reviews = Review.query.all()
    return render_template('reviews.html', reviews=reviews)

# Route for submitting feedback
@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
    if request.method == 'POST':
        name = request.form['name']
        feedback = request.form['feedback']
        rating = request.form.get('rating')

        new_review = Review(name=name, feedback=feedback, rating=rating)
        db.session.add(new_review)
        db.session.commit()

        return redirect('/')
    
    return render_template('feedback_form.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)