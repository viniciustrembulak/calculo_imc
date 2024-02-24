// variáveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height') 

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    imc = weight / height * 2
    document.getElementsById('result').innerText = "imc"
    
    
}