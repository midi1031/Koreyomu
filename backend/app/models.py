from flask_sqlalchemy import SQLAlchemy

#データベースモデル
db = SQLAlchemy()

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    reason = db.Column(db.String(200), nullable=False)
