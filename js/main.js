"use strict"

var gBallSize = 100

function onBallClick(elBall) {
    changeBallSize(elBall)
}

function changeBallSize(elBall) {
    if (gBallSize >= 400) {
        gBallSize = 100
    } else {
        var randomDiameterNum = getRandomInt(20, 61)
        gBallSize += randomDiameterNum
    }
    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    
    elBall.innerText = gBallSize
}

