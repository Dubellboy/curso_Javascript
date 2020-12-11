//Caso haja uma variavel com o mesmo nome, colocar é possível mudar com o modelo
//abaixo usando o as do  import
//import {nome as nome2, sobrenome,idade,soma} from './modulo1';
//import {nome, sobrenome,idade,soma, Pessoa} from './modulo1';

//Como chamar o default

import qualquerNome from './modulo1';
console.log(qualquerNome(5,5));

//Importar mais coisas além do defaul basta colocar as chaves
//import qualquerNome,{nome,sobrenome,idade} from './modulo1';

//Para exportar tudo 
//import * as MeuModulo from './modulo1


//const nome = 'carla'

//const p1 = new Pessoa('Eduardo','Chagas')

//console.log(nome,sobrenome,idade);
//console.log(soma(2,2));
//console.log(p1);