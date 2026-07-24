
let altura = localStorage.getItem("altura")
let pescoco = localStorage.getItem("pescoco")
let cintura = localStorage.getItem("cintura")

fetch("/calcular",{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
        altura: altura,
        pescoco: pescoco,
        cintura: cintura
    })
})

.then(
    function(resposta){
        resposta.json()
    }
)

.then(dados =>{
    document.getElementById("bf").innerText = data.gordura + "%";
    document.getElementById("score").innerText = data.score;
})


let tipo=""
let target=""
let tempo=""

if(gordura < 12){
tipo="Elite / Atlético"
target="Manutenção (10-12%)"
tempo="Você já está próximo do ideal"
}
else if(gordura < 18){
tipo="Atlético"
target="10-12%"
tempo="2 a 4 meses"
}
else if(gordura < 25){
tipo="Intermediário"
target="12-15%"
tempo="3 a 6 meses"
}
else{
tipo="Acima do ideal"
target="12-15%"
tempo="6+ meses"
}

document.getElementById("type").innerText = tipo
document.getElementById("target").innerText = target
document.getElementById("time").innerText = tempo
