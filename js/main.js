var d = new Date();
alert(d);
console.log(d.getMonth()+1);
console.log(d.getHours());
console.log(d.getMinutes());

var nome = "Miriane de Matos";
var GitHubCoding = "1 de maio de 2020";

var daysToGo = 395;
var daysGone = 8;
var frase = "Amo viver em Chapecó";
var frase2 = "Incorporando a filosofia chinesa"

var lista = ["maça", "pêra", "laranja", "abacaxi"];
var lista2 = ["pão", "leite", "ovos"];
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta);
var frutas = [{nome: "uva", cor: "verde"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);

alert("Bem-vinda "+ nome);
alert("Vamos codar com Javascript");
alert("Você está codando no Git Hub desde "+ GitHubCoding);

console.log(nome);
console.log(daysToGo - daysGone);
console.log(frase.replace("Chapecó", "Ilhéus"));
console.log(frase2.toLocaleUpperCase());
console.log(lista);
console.log(lista.toString());
console.log(lista2[1]);

alert("Precisa comprar " + lista [2]);

lista.push("uva");
console.log(lista2.reverse());
lista2.pop();
console.log(lista2.length);
console.log(lista2.join("--"));

var maturidade = prompt("Pontue sua maturidade de 1 a 10");
if (maturidade >= 5) {
    alert("Sugestão de artigo: 1");
} else {
    alert("Sugestão de artigo: 2");
};

var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
};

var cont2;
for(count2 = 18; count2 <=23; count2++){
    alert(count2);
}

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
console.log(soma(5, 10));
console.log(setReplace("Chapecó é tudo de bom!", "Chapecó", "Ilhéus"));

var validar;
function validaIdade(idade){  
    if (idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}
    var idade = prompt("Qual sua idade?");
    console.log(validaIdade(idade));

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar";
}

function redirecionar(){
    window.location.href = "https://digitalinnovation.one/";
}

function site(){
    window.open("https://digitalinnovation.one/");
}

function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigada por passar o mouse";
}

function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}

function load(){
    console.log("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}