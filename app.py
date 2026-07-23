from flask import Flask, request, jsonify, render_template
import math

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/resultado")
def resultado():
    return render_template("resultado.html")



@app.route("/calcular", methods=["POST"])
def calcular():
    dados = request.json
    
    altura = float(dados["altura"])
    pescoco = float(dados["pescoco"])
    cintura = float(dados["cintura"])
    
    gordura = 86.010 * math.log10(cintura - pescoco) - 70.041 * math.log10(altura) + 36.76
    gordura = round(gordura, 1)
    
    score = round(100 - gordura)
    
    return jsonify({
        "gordura": gordura,
        "score": score
    })

if __name__ == "__main__":
    app.run(debug=True)