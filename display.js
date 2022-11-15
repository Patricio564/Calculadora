class Display {

    constructor(DisplayValorAnterior, displayValoractual) {
        this.displayValorActual = displayValorActual;
        this.DisplayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.valorActual = '';
        this.ValorAnterior = '';
}
}

agregarNumero(numero){
    this.valorActual = numero;
}