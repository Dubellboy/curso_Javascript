/*Operadores aritméticos
Adição(+) Somar valores
Subtração(-) Diferença entre valores
Multiplicação(*) Produto dos valores
Divisão(/) Quociente dos valores
Módulo(%) Resto existemte em uma operação de divisão
Incremento(++) Pré/Pós incremento
Decremento(--) Pré/Pós decremento
*/

var num1 = 9;
var num2 = 2;

//Adição
document.write(num1 + num2);
document.write('<hr />')

//Subtração
document.write(num1 - num2);
document.write('<hr />')

//Multiplicação
document.write(num1 * num2);
document.write('<hr />')

//Divisão
document.write(num1 / num2);
document.write('<hr />')

//Módulo
document.write(num1 % num2);
document.write('<hr />')

//incremento
document.write((++num1));
document.write('<hr />')

//Decremento após a execulção 
//document.write(num++);

//decremento
document.write(--num1);
document.write('<hr />')



//Atribuição com qualquer operaor aritmético +=, -=, /=, *=,  %=

var teste = 10;

teste = teste + 5;
    document.write('teste é igual a:  ' + teste);

var teste2 = 10;
    document.write('<hr />')

teste2 += 5;
    document.write(teste2);

    document.write('<hr />')

//concatenar com string 
var teste3 = 'Olá';
teste3 += ' Eduardo';
    document.write(teste3);