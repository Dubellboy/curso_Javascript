//Operadores lógicos 
// && => Significa  e as duas expressões devem ser true, 
// || => Significa ou e uma das expressões deve ser true,
//  ! => Significa negação de comparação


//Condição &&
if (2 == 2 && 3 >= 1){
    document.write('Verdadeiro');
}else {
    document.write('Falso');
}

document.write("<hr />");

//Condição ||
if (2 == 2 || 3 > 1 || 'a' == 'b') {
    document.write('Verdadeiro');
}else {
    document.write('Falso');
}

document.write("<hr />");

//operado de negação !
if (!(2 == 2)){
    document.write('Verdadeiro');
}else {
    document.write('Falso');
}


document.write("<hr />");

//Ex:. 
var nota = prompt('Digite a note do aluno:');
var faltas = prompt('Digite a quantoidade de faltas:');

 var media = 7;
 var faltas_maxima = 15;

// if(nota >= media && faltas <= faltas_maxima) {
//     document.write('Aprovado');
// }else {
//     document.write('Reprovado');
// }

document.write("<hr />");

//Operador ternário
// var nome_variavel = <condição> ? <verdadeiro> : <falso>;

//Ex:.
var resultado = (nota >= media && faltas <= faltas_maxima) ? 'Aprovado' :'Reprovado';
document.write(resultado);