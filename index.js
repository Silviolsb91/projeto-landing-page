var setaesquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var setadireita = window.document.getElementById("seta-direita")

function rolarparadireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex; margin-top:65px"
}

function rolarparaesquerda() {
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    setadireita.style ="display:flex"
    setaesquerda.style ="display:none"
}