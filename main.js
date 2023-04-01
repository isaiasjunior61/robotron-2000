//const robotron = document.querySelector("#robotron")
const subtrair = document.querySelector("#rsubtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

/*robotron.addEventListener("click", (evento) => {

})

function dizOi(nome) {
    console.log("oi" + nome)
    console.log("EU TENHO A FORÇA")
}

dizOi("Isaías")*/

somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1;
})

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1;
})