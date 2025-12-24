// script.js

// Seleciona o elemento HTML com o id 'mensagem'
/*const mensagemElemento = document.getElementById('mensagem');
const testeElemento = document.getElementById('teste')

// Modifica o texto do elemento
mensagemElemento.textContent = 'Olá, Mundo! Este é meu primeiro Hello World com JavaScript!';

testeElemento.textContent='modificado nova mensagem '


let strNumero1 = "42";
let strNumero2 = "3.14";

let intNumero = parseInt(strNumero1);
let floatNumero = parseFloat(strNumero2);

console.log("Número inteiro: " + intNumero); // 42
console.log("Número de ponto flutuante: " + floatNumero); // 3.14


let strNumero = "50";
let numero = +strNumero;

console.log("Número: " + numero);*/ // 50


/*function somar(n1, n2){
    return n1 + n2;
}

let Resutado = somar(10, 20)

console.log(` o resetado é ${Resutado}`)*/

/*let numero = parseInt(prompt("digite um numero"));

if (numero  > 5){
    console.log("é maior que 5")
}else if(numero < 5){
    console.log("é menor que 5")
}else{
    console.log("é igual a 5")
}*/

let modo = prompt("Escolha um modo: dark, red ou blue");
 
switch (modo) {
  case "dark":
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    break;
  case "red":
    document.body.style.backgroundColor = "red";
    break;
  default:
    document.body.style.backgroundColor = "pink";
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}