const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.getElementById('numero');
const botonesOperadores = document.getElementById('operador');

const Calculadora = new Calculadora();

console.log(Calculadora.sumar(2,3))
console.log(Calculadora.restar(2,3))
console.log(Calculadora.multipiclar(2,3))
console.log(Calculadora.dividir(2,3))
