const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('numero');
const botonesOperadores = document.querySelectorAll('operador');

const display = new Display(displayValorActual, displayValorAnterior);

botonesNumeros.forEach(boton => {
    boton.eddEventListener('click', () => {
        display
        )