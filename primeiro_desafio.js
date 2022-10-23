/*
Faça um programa para calcular o valor gasto de combustivel em uma viagem.

Você terá 3 variaveis. Sendo elas:
- Preço do combustivel;
- Gasto medio de combustivel do carro por km;
- Distancia em Km da viagem;

Imprima no console o valor que será gasto de para realizar esta viagem.

Combustivel: R$: 4,90
Gasto médio: 25 Litros
Distancia em Km da viagem: 100 Km

*/
const precoCombustivel = 5.79;
const gastoMedioPorKm = 25;
const distancia = 250;


const litrosConsumidos = distancia / gastoMedioPorKm;

const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

