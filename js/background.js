const body = document.querySelector("body")

const IMAGES = ['img/0.png', 'img/1.jpg', 'img/2.jpg']
const IMG_NUMBER = 2
const IMG_CLASS_NAME = 'bgImg'

function printImg(imgNum){
    const image = new Image()
    image.src = `img/${imgNum}.jpg`
    image.classList.add(IMG_CLASS_NAME)
    body.appendChild(image)
}
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1
    return number
}
function init(){
    const randomNumber = genRandom()
    printImg(randomNumber)
}

init()