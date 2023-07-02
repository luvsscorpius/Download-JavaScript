const numero = document.querySelector('#numero')
const btn_promise = document.querySelector('#btn_promise')

btn_promise.addEventListener('click', (e) => {
    numero.innerHTML = "Processando..."
    console.log('Baixei')
    promise()
        .then((retorno) => {
            numero.innerHTML = retorno
            numero.classList.remove('erro')
            numero.classList.add('ok')
        })
        .catch((retorno) => {
            numero.innerHTML = retorno
            numero.classList.remove("ok")
            numero.classList.add("erro")
        })

    download()('Esse foi o arquivo que você baixou!', 'arquivo.txt')
})


const promise = () => {
    let promise = new Promise((resolve, reject) => {
        let resultado = true
        let tempo = 3000

        // setTimeout vai mudar a variável resultado para true
        setTimeout(() => {
            if (resultado) {
                resolve("Arquivo baixado")
            } else {
                reject("Não baixou? tente novamente")
            }
        }, tempo)
    })
    return promise
}

const download = function () {
    const a = document.createElement('a')
    a.style = 'display: none'
    document.body.appendChild(a)
    return function (conteudo, nomeArquivo) {
        const blob = new Blob([conteudo], { type: 'octat/stream' })
        const url = window.URL.createObjectURL(blob)
        a.href = url
        a.download = nomeArquivo
        a.click()
        window.URL.revokeObjectURL(url)
    }
}


numero.innerHTML = "Clique no botão para fazer o seu download"