function analisar(){

let altura = document.getElementById("altura").value
let pescoco = document.getElementById("pescoco").value
let cintura = document.getElementById("cintura").value

let barraterminou = false
let variavelscore = null

function TentarMostraResultado(){
    if (barraterminou == true && variavelscore !== null){
        mostrarResultado(variavelscore)
    }
}



fetch("/calcular", {
    method: "POST",                                   
    headers: { "Content-Type": "application/json" },   
    body: JSON.stringify({                              
        altura: altura,
        pescoco: pescoco,
        cintura: cintura
    })
})


.then(
    function(resposta){
        return resposta.json() 
    }   
)

.then(dados => {
    console.log(dados.gordura, dados.score)
    variavelscore = dados.score
    TentarMostraResultado()   
})




document.querySelector(".progressBox").style.display="block"

let bar=document.querySelector(".bar")

let progresso=0

let loading=[
"Escaneando medidas...",
"Calculando composição corporal...",
"Comparando com banco de dados...",
"Gerando Shape Score..."    
]

let texto=document.querySelector(".loadingText")

let etapa=0

let interval=setInterval(function(){

progresso+=2 

bar.style.width=progresso+"%"

if(progresso%25==0 && etapa<loading.length){
texto.innerText=loading[etapa]
etapa++
}

if(progresso>=100){
    clearInterval(interval)
    barraterminou = true
    TentarMostraResultado()
}

},40)

}









function mostrarResultado(score){

document.querySelector(".resultBox").style.display="block"

document.getElementById("score").innerText=Math.round(score)

let rank=""

if(score>85) rank="Elite physique (Top 5%)"
else if(score>75) rank="Acima da média (Top 20%)"
else if(score>65) rank="Bom potencial físico"
else if(score>55) rank="Potencial moderado"
else rank="Abaixo da média"

document.getElementById("rank").innerText=rank

document.querySelector(".paywall").style.display="block"
}





function comprar(){

let altura = document.getElementById("altura").value
let pescoco = document.getElementById("pescoco").value
let cintura = document.getElementById("cintura").value

localStorage.setItem("altura", altura)
localStorage.setItem("pescoco", pescoco)
localStorage.setItem("cintura", cintura)

window.location.href="https://pay.kiwify.com.br/ofelnxq"

}

