from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/time', methods=['POST'])

def time():
    return render_template("time.html")


