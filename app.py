from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime

app = Flask(__name__) #this program is a flask application, tells flask that this is the main application program

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chart')
def chart_page():
    return render_template('chart.html')

@app.route('/tables')
def tables_page():
    return render_template('tables.html')

@app.route('/information')
def information_page():
    return render_template('information.html')

if __name__ == '__main__':
    app.run(debug=True)