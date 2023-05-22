import io
from flask import Flask, Request
from PIL import Image
import nest_asyncio

#initiating Flask
app = Flask(__name__)

#Request Predict Return OK For now
@app.route("/detectIngredient/", methods =["POST"])
def predict():
    if not Request.method == "POST":
        return 404
    if Request.files.get("image"):
        image_file = Request.files["image"]
        # Machine Learning Predict Code



        #Result JSON
        results_json = {}
        return {"result" : results_json}
    
if __name__== "__main__":
    app.run(host="0.0.0.0", port=8000)