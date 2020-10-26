var npossiveis = document.getElementById('npossiveis').textContent;
var nsorte = document.getElementById('nsorte').textContent;

for (var index = 1; index <= nsorte; index++) {
    var f = document.querySelector("#caixas");
    var x = document.createElement("input");
    x.setAttribute("type", "text");
    x.setAttribute("id", "n"+index);
    x.setAttribute("name", "n"+index);
    x.setAttribute("placeholder", "n"+index);
    x.setAttribute("disabled", "disabled");
    f.appendChild(x);
}

function gerar() {
    var numerosPossiveis = [];
    var numerosSorteados = [];

    //gerar o array com os números possíveis
    for (var i = 1; i <= npossiveis; i++) {
        numerosPossiveis.push(i);
    }

    //seleciona os números do array de números possíveis
    for (var j = 1; j <= nsorte; j++) {
        var x = numerosPossiveis.splice(Math.ceil(Math.random()*npossiveis - j),1);
        numerosSorteados.push(x);
    }

    //insere os números sorteados nas respectivas caixas
    numerosSorteados.sort(function(a, b){return a - b});
    
    for (var k = 1; k <= nsorte; k++) {
        document.getElementById("n" + k).value = numerosSorteados[k-1];
    }
}

function apagar(){
    for (var k = 1; k <= nsorte; k++) {
        document.getElementById("n" + k).value = "";
    } 
}

if (nsorte >= 10) {
    var x = document.getElementById('numeros');
    x.style.width = '350px';
}