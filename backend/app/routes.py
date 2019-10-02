import json
from app import app, db
from flask import request, jsonify
from app.models import Image, image_schema,  images_schema


@app.route('/')
def api():
    #list of end points
    paths = {'images':'/images' }
    return paths

@app.route('/images/<id>')
def get_image(id):
    image = Image.query.get(id)
    result = image_schema.dump(image)
    return jsonify(result)

@app.route('/images', methods=['GET', 'POST'])
def images():
    if request.method == 'POST':
        image_url = request.json['image_url']
        new_image = Image(image_url)
        db.session.add(new_image)
        db.session.commit()
        result = image_schema.dump(new_image)
        return jsonify(result)
    else:
        all_images = Image.query.all()
        result = images_schema.dump(all_images)
        return jsonify(result)


