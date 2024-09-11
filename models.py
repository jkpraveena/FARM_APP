from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    feedback = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    
    def __init__(self, name, feedback, rating):
        self.name = name
        self.feedback = feedback
        self.rating = rating