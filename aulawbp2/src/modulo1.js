export const nome = 'Eduardo';
export const sobrenome = 'Chagas';
export const idade = 35;
//const cpf = '12121212121'//Esse dado não será exportado por não ter a palavra export

//Essa será o padrão a ser importado podendo ser somente um como default
export default function soma(x,y){
    return x + y;
}

// export class Pessoa {
//     constructor(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome
//     }
// }



// function soma(x,y){
//     return x + y;
// }

//Para exportar com nome diferente é necessário  usar o as ex:. nome as nome2
//export {nome, sobrenome,idade,soma}

//Para usar uma variável como default usa-se
//export {nome as default, sobrenome,idade};