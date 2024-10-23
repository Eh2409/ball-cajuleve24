"use strict"

var gBallSize = 100

function onBallClick(elBall) {
    gBallSize += 50
    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText =  gBallSize
}