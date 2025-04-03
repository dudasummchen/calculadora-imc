const btnCalcular = document.getElementById("calcule") //Pegar o elemento button 
const altura = document.getElementById("altura") //Pegar o elemento input da altura
const peso = document.getElementById("peso") //Pegar elemento input de peso
const resultado = document.getElementById('resultado') //Pegar a div com o id Resultado
const classificacao = document.getElementById('classificacao') //Pegar elemento div que vai ser inserido a classificação como Obeso III

btnCalcular.addEventListener('click', () => {
    const imc = peso.value / Math.pow(altura.value, 2); // Constante que armazena o calculo peso / altura²  Math.pow() - Eleva um valor a outro, no caso o valor da altura elevado a 2
    const imcFinal = imc.toFixed(2) // toFixed() pegar os dois digitos depois da virgula, por isso o 2, mas poderia ser 3, 4 etc
    if(isNaN(imcFinal)){
        resultado.innerHTML = '';
    }else {
    resultado.innerHTML = 'O seu IMC é ' + imcFinal;
    }

    if (imc < 18.5){
        classificacao.innerHTML = ' Abaixo do peso';
    }
    else if (imc >= 18.5 && imc < 24.9 ){
        classificacao.innerHTML = ' Peso normal';
    }
    else if (imc >= 25 && imc < 29.9 ){
        classificacao.innerHTML = 'Excesso de peso';
    }
    else if (imc >= 30){
        classificacao.innerHTML = 'Obesidade';
    }
    else if (imc >= 30 && imc <34.9 ){
        classificacao.innerHTML = 'Obesidade classe I'
    }
    else if (imc >= 35 && imc <39.9){
        classificacao.innerHTML = 'Obesidade classe II'
    }
    else if (imc > 40){
        classificacao.innerHTML = 'Obesidade mórbida'
    };

});