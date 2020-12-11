/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
//Caso haja uma variavel com o mesmo nome, colocar é possível mudar com o modelo
//abaixo usando o as do  import
//import {nome as nome2, sobrenome,idade,soma} from './modulo1';
//import {nome, sobrenome,idade,soma, Pessoa} from './modulo1';
//Como chamar o default

console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__.default)(5, 5)); //Importar mais coisas além do defaul basta colocar as chaves
//import qualquerNome,{nome,sobrenome,idade} from './modulo1';
//Para exportar tudo 
//import * as MeuModulo from './modulo1
//const nome = 'carla'
//const p1 = new Pessoa('Eduardo','Chagas')
//console.log(nome,sobrenome,idade);
//console.log(soma(2,2));
//console.log(p1);

/***/ }),

/***/ "./src/modulo1.js":
/*!************************!*
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nome": () => /* binding */ nome,
/* harmony export */   "sobrenome": () => /* binding */ sobrenome,
/* harmony export */   "idade": () => /* binding */ idade,
/* harmony export */   "default": () => /* binding */ soma
/* harmony export */ });
var nome = 'Eduardo';
var sobrenome = 'Chagas';
var idade = 35; //const cpf = '12121212121'//Esse dado não será exportado por não ter a palavra export
//Essa será o padrão a ser importado podendo ser somente um como default

function soma(x, y) {
  return x + y;
} // export class Pessoa {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map