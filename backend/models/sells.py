from . import db
from datetime import datetime

class sells(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    total_sells = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    quantity = db.Column(db.Integer, nullable=False, default = 1)


