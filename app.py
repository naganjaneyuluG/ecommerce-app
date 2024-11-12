import os
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

# Configure Gemini API
genai.configure(api_key=api_key)
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

# Initialize Flask app
app = Flask(__name__)

# Route for rendering the index page
@app.route("/")
def index():
    return render_template("index.html")

# Route for generating recipes
@app.route("/generate-recipe", methods=["POST"])
def generate_recipe():
    user_input = request.json.get("user_input")
    model = genai.GenerativeModel(model_name="gemini-1.5-flash", generation_config=generation_config)
    chat_session = model.start_chat(history=[])
    response = chat_session.send_message(user_input)
    
    return jsonify({"recipe": response.text})

if __name__ == "__main__":
    app.run(debug=True)
