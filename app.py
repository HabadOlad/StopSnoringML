from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime

app = Flask(__name__) #this program is a flask application, tells flask that this is the main application program

@app.route("/") #THis will send them to the first thing, backslash is a default which normally sends people to the index
def indexpage():
    return render_template("index.html")  #this will send them to the index page


@app.route("/chart") #THis will send them to the first thing, backslash is a default which normally sends people to the portfolio
def chartpage():
    return render_template("chart.html")  #this will send them to the portfolio page

@app.route("/tables") #THis will send them to the first thing, backslash is a default which normally sends people to the portfolio
def tablepage():
    return render_template("tables.html")  #this will send them to the portfolio page