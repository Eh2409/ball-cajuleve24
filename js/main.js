"use strict"


function onBallClick(elBall) {
    
    changeBallSize(elBall)
    changeBallColor(elBall)
}

function changeBallSize(elBall) {
    var currBallSize = +elBall.innerText

    if (currBallSize >= 400) {
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
