import manipularCPF from './src/manipula-cpf.js';
manipularCPF();
import validaCPF from './src/valida-cpf.js';





const inputCPF = document.getElementById('inputCPF');
const validarCPF = new validaCPF(inputCPF);


console.log(validarCPF.formatar('155.555-995.40'));