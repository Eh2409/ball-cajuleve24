"use strict"


function onBallClick(elBall, maxDiameter) {

    changeBallSize(elBall, maxDiameter)
    changeBallColor(elBall)
}

function changeBallSize(elBall,maxDiameter) {
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

    updateBALL(elBall1, ball2Size ,ball2Color)
    updateBALL(elBall2, ball1Size ,ball1Color)
    
}

function updateBALL(elBall, size ,color) {
    elBall.style.width = size + 'px'
    elBall.style.height = size + 'px'
    elBall.innerText = size

    elBall.style.backgroundColor = color
}

