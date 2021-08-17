import re
from flask import Flask, render_template,request,redirect

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html")


@app.route("/summ" ,methods=['GET','POST'])
def topla(): 
    if request.method=='POST':
        birinci=request.form['reqem1']
        ikinci=request.form['reqem2']
    
        cavab=int(birinci)+int(ikinci)
        return render_template('index.html',cavab=cavab)
    else:
        return redirect('/')


@app.route("/salam/<id>")
def salam(id):
    return "id "+id



if __name__=="__main__":
    app.run(debug=True)