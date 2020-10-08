//Desafio

var a = 10;
var b = 20;
var c = null;

document.write('A: ' + a + '<br />');
document.write('B: ' + b + '<br />');
document.write('C: ' + c + '<br />');

document.write('<hr />');

//Lógica de inversão das variáveis A e B

c = a; //Utiliza avariável C para armazenar temporariamente o valor da variável A
a = b; //Sobrepóe o valor da variuável B com o valor de C
b = c; //Sobrepõe o valor da variável B com da variável C
c = null; // remove o valor contido na variável C.

document.write('A: ' + a + '<br />');
document.write('B: ' + b + '<br />');
document.write('C: ' + c + '<br />');
