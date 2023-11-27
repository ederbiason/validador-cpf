function calcularVerificadores() {
    const cpf = document.getElementById('cpfInput').value

    if (cpf.length != 9) {
        alert('Por favor, insira os 9 primeiros dígitos do CPF.')
        cpfInput.value = ''
        return
    }

    const cpfArray = cpf.split('').map(digito => parseInt(digito))

    // Matrizes coeficientes para auxiliar no cálculo dos dígitos
    const matrizMultiplicadores = [
        [10, 9, 8, 7, 6, 5, 4, 3, 2],
        [11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
    ]

    // Calcula o primeiro dígito verificador
    const primeiroDigito = calcularDigito(cpfArray, matrizMultiplicadores[0]);

    // Adiciona o primeiro dígito verificador ao final do array
    cpfArray.push(primeiroDigito);

    // Calcula o segundo dígito verificador
    const segundoDigito = calcularDigito(cpfArray, matrizMultiplicadores[1]);

    // Adiciona o segundo dígito verificador ao final do array
    cpfArray.push(segundoDigito);

    // Insere os dois dígitos na tag com Id "resultado"
    console.log(`${primeiroDigito}${segundoDigito}`)
    document.getElementById('resultado').innerText = `${primeiroDigito}${segundoDigito}`;

    // Insere o CPF completo na tag com Id "completo"
    document.getElementById('completo').innerText = cpfArray.join('');
}

function calcularDigito(cpfArray, multiplicadores) {
    const soma = cpfArray.reduce((acumulador, valor, indice) => {
      return acumulador + valor * multiplicadores[indice];
    }, 0);
  
    const resto = soma % 11;
    const digito = resto < 2 ? 0 : 11 - resto;
  
    return digito;
}
