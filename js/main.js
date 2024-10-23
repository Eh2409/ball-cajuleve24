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
