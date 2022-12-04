let url = 'https://significado.herokuapp.com/v2/';

let inputTxt = document.querySelector('#input-txt');
let btnTxt = document.querySelector('#btn');
let resultado = document.querySelector('#container-result')

btnTxt.addEventListener('click', () => {
    let palavra = inputTxt.value;
    if (palavra === '') {
        resultado.innerHTML = `<p id="container-resultado">Escreva alguma palavra no campo de busca!!</p>`
    } else {
        fetch(`${url}${palavra}`)
        .then((resposta) => resposta.json())
        .then((data) => {
            console.log(data)
            resultado.innerHTML = `
            <h3 id="container-palavra">${palavra}</h3>
                <p id="container-resultado"><span>1º</span> ${data[0].meanings[0]}</p>
                <p id="container-resultado"><span>2º</span> ${data[0].meanings[1]}</p>
            `

        }).catch(() => {
            resultado.innerHTML = `<p id="container__resultado"><span>Não</span> foi possivel encontrar está palavra!! </p>`
        })
    }
})