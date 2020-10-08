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