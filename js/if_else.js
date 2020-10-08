//Será exexultado o código que for true para a condição

/* if (condição) {
    trecho de código que será execultado
}else {
    trecho de código que será execultado não atenda o IF
}
*/

//------ if else encadeado

/* if (condição) {
    trecho de código que será execultado
}else if{
    trecho de código que será execultado não atenda o IF
}else{
    trecho de código que será execultado não atenda o else if
}
*/

//Exe:.
if (false) {
    document.write('Entrou dentro do bloco if');
}else {
    document.write('Entrou dentro do bloco else');
}

document.write('<hr />');

//Ex2:.
if(2==7){
    document.write(true);
}else{
    document.write(false);
}

document.write('<hr />');

//Ex:.3
if('abc' != 'abc'){//O valor é um diferente do outro?
    document.write(true);
}else{
    document.write(false);
}

document.write('<hr />');

//Ex:.4

if(8 < 14){
    document.write(true);
}else{
    document.write(false);
}

document.write('<hr />');

//var nota = prompt('Digite sua nota');
// var media = 7;

// if (nota >= media) {//No caso a nota ter sido inputada pelo prompt o javascript converte em número devido ao operador lógico 
//     document.write('Aprovado')
// }else {
//     document.write('Reprovado')
// }

document.write('<hr />');



// var variavel1 = prompt('Digite algum numero:');
// var variavel2 = prompt('Digite otro número:');

// //Nesse caso ira concatenar os números não somalos, 
// //pois estão como strings
// //document.write(variavel1 + variavel2);

document.write('<hr />');

//Casting é transformar um tipo de dado em outro tipo de dado
//Ao colocar parseInt ou parseFloar ele converte o dado.
// var variavel3 = parseInt(prompt('Digite algum numero:'));
// var variavel4 = parseInt(prompt('Digite otro número:'));

//document.write(variavel3 + variavel4);

document.write('<hr />');

//Converter números em strings

var n1 = 10;
var n2 = 20;

//colocar toString()
document.write(n1.toString() + n2.toString());
