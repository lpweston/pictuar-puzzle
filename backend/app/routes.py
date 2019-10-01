from app import app

@app.route('/')
def api():
    paths = {'images':'/images'}
    return paths

@app.route('/images', methods=['GET', 'POST'])
def images():
    image = {'imageURL':'https://i.imgur.com/jrMxxFY.jpg', 'imageID':'1'}
    return image
