function operador(num1, num2) {
    if (!num1 || !num2) {
        console.log('ERRO! Defina os inputs corretamente! Error 1');
        return;
    }

    let soma = num1 + num2;
    const saoIgualOuNao = (num1 === num2) ? 'são iguais' : 'não são iguais';
    let maiorQue10 = (soma > 10) ? 'maior' : 'menor';
    let maiorQue20 = (soma > 20) ? 'maior' : 'menor';


    console.log(`Os números ${num1} e ${num2} ${saoIgualOuNao}. Sua soma é ${soma}, que é ${maiorQue10} que 10 e ${maiorQue20} que 20`);


}

operador(5, 0);