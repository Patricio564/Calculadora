const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('numero');
const botonesOperadores = document.querySelectorAll('operador');

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () =>  displayValorActual.agregarNumero(boton.innerHTML));

  
});