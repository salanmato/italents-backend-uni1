
//pegando dados do forms
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value

    // chamando a função que calcula
    const imc = calcImc(peso, altura)

    // criando a div de resultado
    pagResultado(imc)

})


//Calculo de IMC
const calcImc = (peso, altura) => {
    const imc = peso / (altura * altura)

    if(imc < 18.5){
        return `Abaixo do peso. IMC: ${imc.toFixed(2)}`
    }else if (imc >= 18.5 && imc < 24.9) {
        return `Peso normal. IMC: ${imc.toFixed(2)}`
    }else if (imc >= 24.9 && imc < 29.9) {
        return `Sobrepeso. IMC: ${imc.toFixed(2)}`
    } else {
        return `Obesidade. IMC: ${imc.toFixed(2)}`
    }
}

// Construir resultado
const pagResultado = (imc) => {
    //deletando o último resultado caso já exista
    const resultadoExiste = document.querySelector('.resultado')
    if(resultadoExiste){
        resultadoExiste.remove()
    }

    //criando elementos
    const resultado = document.createElement('div')
    const textoResultado = document.createElement('p')

    //adicionando classes aos elementos
    resultado.classList.add('resultado')
    textoResultado.classList.add('texto-resultado')

    //pegando body
    const body = document.querySelector('body')

    textoResultado.textContent = imc

    body.appendChild(resultado)
    resultado.appendChild(textoResultado)

    changeResultBackgroundColor(imc)
}

// Mudando de cor de acordo com o resultado
const changeResultBackgroundColor = (imc) =>{

    const resultado = document.querySelector('.resultado')

    if(imc.includes('Obesidade')){
        resultado.style.backgroundColor = 'red'
        resultado.style.color = 'white'
    }else if(imc.includes('Sobrepeso')){
        resultado.style.backgroundColor = 'yellow'
        resultado.style.color = 'black'
    }else if(imc.includes('Peso normal')){
        resultado.style.backgroundColor = 'green'
        resultado.style.color = 'white'
    }else {
        resultado.style.backgroundColor = 'yellow'
        resultado.style.color = 'black'
    }
}




//TESTES
console.log(calcImc(85, 1.70))
console.log(calcImc(55, 1.80))
console.log(calcImc(50, 1.55))
console.log(calcImc(47, 1.70))
console.log(calcImc(102, 1.70))