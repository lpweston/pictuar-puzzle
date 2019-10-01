from app import db

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(64))
    pieces = db.relationship('Piece', backref='ref_image', lazy='dynamic')

    def __repr__(self):
        return '<Img {}>'.format(self.image_url)    

class Piece(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    piece_url = db.Column(db.String(64))
    image_id = db.Column(db.Integer, db.ForeignKey('image.id'))

    def __repr__(self):
        return '<Piece {}>'.format(self.piece_url) 
