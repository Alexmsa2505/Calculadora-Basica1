// Variável global para armazenar o valor da expressão
let resultField = document.getElementById('resultado');

// Função para adicionar números e operadores ao campo de entrada
function appendToResult(value){
    resultField.value += value;
}

// Função para limpar o campo de entrada
function clearResult(){
    resultField.value = '';
}
// Função para calcular o resultado
function calculateResult(){
    try{
         // Avalia a expressão matemática e exibe o resultado
        resultField.value = eval(resultField.value);
    } catch(error) {
        // Caso ocorra um erro, exibe "Error"
        resultField.value = 'Error';
    }
}