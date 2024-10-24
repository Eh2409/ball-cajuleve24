"use strict"

var ghoverOn
var gCyclesNum = 0
var gHistory = []


function onBallClick(elBall, maxDiameter) {

    changeBallSize(elBall, maxDiameter)
    changeBallColor(elBall)
 
    if (!ghoverOn) {
        StoreSiteStatus()
    }

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

    if (!ghoverOn) {
        StoreSiteStatus()
    }

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

    if (!ghoverOn) {
        StoreSiteStatus()
    }

}

function sizeReduce(ball, ballSize) {

    var randomDiameterNum = getRandomInt(20, 61)
    ballSize -= randomDiameterNum

    if (ballSize < 100) ballSize = 100

    ball.style.width = ballSize + 'px'
    ball.style.height = ballSize + 'px'
    ball.innerText = ballSize
}

function onChangeBackgroundColor() {
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()

    if (!ghoverOn) {
        StoreSiteStatus()
    }
}


function onReset() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    updateBALL(elBall1, 100, 'purple')
    updateBALL(elBall2, 100, 'red')

    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = 'black'

    StoreSiteStatus()

}


function onBall6Hover() {
    var hoverStartTime = Date.now()
    ghoverOn = setInterval(() => {
        var totalTimePass = Date.now() - hoverStartTime
        if (gCyclesNum < 10 && totalTimePass >= 2000) {
            console.log('start');
            ballsBtnOn()
            gCyclesNum++
        }
    }, 1000)
}

function onBall6StopHover() {
    clearInterval(ghoverOn)
    ghoverOn = null
    gCyclesNum = 0
}

function ballsBtnOn() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    onBallClick(elBall1, 200)
    onBallClick(elBall2, 400)
    onSwapBallsSizeAndColor()
    onReduceBallsSize()

    StoreSiteStatus()
}


function StoreSiteStatus() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')
    const elBody = document.querySelector('body')

    var status = {}

    status.ball1Size = +elBall1.innerText
    status.ball1Color = getComputedStyle(elBall1).backgroundColor
    status.ball2Size = +elBall2.innerText
    status.ball2Color = getComputedStyle(elBall2).backgroundColor
    status.bodyBackgroundColor = getComputedStyle(elBody).backgroundColor

    gHistory.push(status)
    console.log(gHistory);
}


