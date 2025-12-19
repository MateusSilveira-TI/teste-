// script.js

// Seleciona o elemento HTML com o id 'mensagem'
const mensagemElemento = document.getElementById('mensagem');
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

console.log("Número: " + numero); // 50