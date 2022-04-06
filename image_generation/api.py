from flask import Flask, send_file
from generateNFT import create_nft
import os

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    create_nft()

    filename = 'nft.png'

    return send_file(filename, mimetype='image/png')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)