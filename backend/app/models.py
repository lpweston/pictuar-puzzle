from app import db, ma

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(64))
    # pieces = db.relationship('Piece', backref='ref_image', lazy='dynamic')

    def __init__(self, image_url):
        self.image_url = image_url

class ImageSchema(ma.Schema):
    class Meta:
        fields = ('id', 'image_url')

image_schema = ImageSchema()
images_schema = ImageSchema(many=True)


# class Piece(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     piece_url = db.Column(db.String(64))
#     image_id = db.Column(db.Integer, db.ForeignKey('image.id'))

#     def __init__(self, id, piece_url, image_id):
#         self.id = id
#         self.piece_url = piece_url
#         self.image_id = image_id