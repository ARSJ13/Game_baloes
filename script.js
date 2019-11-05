//1 Criar o balao
// Estourar balao
// Carregar jogo
var total =0;

function criarBalao(){
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random()*600);
    var y = Math.floor(Math.random()*400);

    balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}
function criarBalao2(){
    var balao2 = document.createElement("div");
    balao2.setAttribute("class", "balao2");

    var w = Math.floor(Math.random()*400);
    var z = Math.floor(Math.random()*600);

    balao2.setAttribute("style", "left:"+w+"px;top:"+z+"px;");
    balao2.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao2);
}

function estourar(objeto){
    document.body.removeChild(objeto);
    total ++;
    var score = document.getElementById("placar");
    score.innerHTML="Balões estourados: "+total;
}

function carregarJogo(){
    setInterval(criarBalao, 1500);
    setInterval(criarBalao2, 2200);
}