from app import db

class Image(db.Model):
    image_id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(64))

    def __repr__(img):
        return '<Img {}>'.format(img.image_url)    