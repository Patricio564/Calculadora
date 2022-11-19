class Display {

    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.DisplayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
}


agregarNumero(numero){
    this.valorActual = numero;
    this.imprimirValores ();
}
imprimirValores(){
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent =this.ValorAnterior;
}
}