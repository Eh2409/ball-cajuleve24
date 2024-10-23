"use strict"


function onBallClick(elBall, maxDiameter) {

    changeBallSize(elBall, maxDiameter)
    changeBallColor(elBall)
}

function changeBallSize(elBall, maxDiameter) {
    var currBallSize = +elBall.innerText

    if (currBallSize >= maxDiameter) {
        currBallSize = 100
    } else {
        var randomDiameterNum = getRandomInt(20, 61)
        currBallSize += randomDiameterNum
    }

    elBall.style.width = currBallSize + 'px'
    elBall.style.height = currBallSize + 'px'

    elBall.innerText = currBallSize
}

function changeBallColor(elBall) {
    elBall.style.backgroundColor = getRandomColor()
}


function onSwapBallsSizeAndColor() {
    const elBall1 = document.querySelector('.ball1')
    var ball1Size = +elBall1.innerText
    var ball1Color = getComputedStyle(elBall1).backgroundColor

    const elBall2 = document.querySelector('.ball2')
    var ball2Size = +elBall2.innerText
    var ball2Color = getComputedStyle(elBall2).backgroundColor

    updateBALL(elBall1, ball2Size, ball2Color)
    updateBALL(elBall2, ball1Size, ball1Color)

}

function updateBALL(elBall, size, color) {
    elBall.style.width = size + 'px'
    elBall.style.height = size + 'px'
    elBall.innerText = size

    elBall.style.backgroundColor = color
}

function onReduceBallsSize() {
    const elBall1 = document.querySelector('.ball1')
    var ball1Size = +elBall1.innerText

    const elBall2 = document.querySelector('.ball2')
    var ball2Size = +elBall2.innerText

    sizeReduce(elBall1, ball1Size)
    sizeReduce(elBall2, ball2Size)
}

function sizeReduce(ball, ballSize) {

    var randomDiameterNum = getRandomInt(20, 61)
        ballSize-= randomDiameterNum

        if (ballSize < 100) ballSize = 100
    
        ball.style.width = ballSize + 'px'
        ball.style.height = ballSize + 'px'
        ball.innerText = ballSize
}

function onChangeBackgroundColor() {
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}


function onReset() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    updateBALL(elBall1, 100, 'purple')
    updateBALL(elBall2, 100, 'red')

    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = 'black'

}