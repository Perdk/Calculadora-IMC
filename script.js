const calcular = document.getElementById('calcular');


/* Função com nome imc com parametro vazio */
function imc(){
    
    /* Variaves dentro da função são variaves locais, fora da função são variaveis globais */
    const nome = document.getElementById('nome').value; //.value obtem o valor que está dentro ca caixa
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        
        /* Calculo do IMC */
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC <= 18){
            classificacao = 'abaixo do peso';
        }else if(valorIMC >= 18.5 && valorIMC <= 24.9){
            classificacao = 'com peso normal';
        }else if(valorIMC >= 25 && valorIMC <= 29.9){
            classificacao = 'levemente acima do peso';
        }else if(valorIMC >= 30 && valorIMC <= 39.9){
            classificacao = 'obeso';
        }else{
            classificacao = 'com obesidade grave';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

        }else {
        resultado.textContent = 'Preencha todos os campos !!!';
        }
}
/* Adicionando um evento ao ID calcular, que, ao clicar no botão, irá executar a função chamada imc */
calcular.addEventListener('click', imc);
