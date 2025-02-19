/*
Faça um algorítmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

    media = (nota1 + nota2 + nota3) / 3

Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média igual ou acima de 7, passou de semestre;

Imprima o resultado no console!
*/

console.log("-------------------------------------Calculadora de Notas da Faculdade-----------------------------------");
console.log("---------------------------------------------------------------------------------------------------------");

const prompt = require('prompt-sync')();

let primeiraNota = parseFloat(prompt("Digite a primeira nota: ").replace(',' , '.'));
let segundaNota = parseFloat(prompt("Digite a segunda nota: ").replace(',' , '.'));
let terceiraNota = parseFloat(prompt("Digite a terceira nota: ").replace(',' , '.'));

mediaNota = (primeiraNota + segundaNota + terceiraNota) / 3

if (mediaNota < 5) {
    console.log(`Sua média foi ${mediaNota.toFixed(1).replace('.' , ',')},você reprovou.`);
}
if (mediaNota >= 5 || mediaNota < 7){
    console.log(`Sua média foi ${mediaNota.toFixed(1).replace('.' , ',')}, você está em recuperação.`);
}else {
    console.log(`Sua média foi ${mediaNota.toFixed(1).replace('.' , ',')}, você passou!`);
}
