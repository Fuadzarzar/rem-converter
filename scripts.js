let baseNumber = document.querySelector('#font-default')

const changeValue = function(valor = 0) {

    let novoValor = baseNumber.value

    valor += novoValor

    return novoValor
}

console.log(changeValue(baseNumber))


function calcula(fontBase = 0) {
    const inputnovo = document.querySelector("#inputNovo")
    const remetente = document.querySelector("#remetente")

    let novoconteudo = remetente.value

    const base = baseNumber.value

    let numberFrom = novoconteudo

    let novoCalculo = numberFrom * base

    inputnovo.value = `${novoCalculo}`
}

calcula()

function copyValue() {
    let textCopy = document.querySelector('#inputNovo')
    let newVlue = textCopy.value
    navigator.clipboard.writeText(newVlue);
    alert(newVlue)
}


function showTable() {
    const tables = document.querySelector('#tables')
        tables.style.display = 'block'
        tables.style.bottom = '50%'
}

function closeTable() {
    const tables = document.querySelector('#tables')
    tables.style.display = 'none'
    tables.style.bottom = '-40vh'

}