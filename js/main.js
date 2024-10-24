"use strict"

var ghoverOn
var gCyclesNum = 0

var gHistory = []
var gRedo = []


function onBallClick(elBall, maxDiameter) {
    if (!ghoverOn) {
        StoreSiteStatus()
    }


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
    if (!ghoverOn) {
        StoreSiteStatus()
    }

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
    if (!ghoverOn) {
        StoreSiteStatus()
    }

    const elBall1 = document.querySelector('.ball1')
    var ball1Size = +elBall1.innerText

    const elBall2 = document.querySelector('.ball2')
    var ball2Size = +elBall2.innerText

    sizeReduce(elBall1, ball1Size)
    sizeReduce(elBall2, ball2Size)
}

function sizeReduce(ball, ballSize) {
    if (!ghoverOn) {
        StoreSiteStatus()
    }

    var randomDiameterNum = getRandomInt(20, 61)
    ballSize -= randomDiameterNum

    if (ballSize < 100) ballSize = 100

    ball.style.width = ballSize + 'px'
    ball.style.height = ballSize + 'px'
    ball.innerText = ballSize
}

function onChangeBackgroundColor() {
    StoreSiteStatus()
    
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = getRandomColor()
}


function onReset() {
    StoreSiteStatus()

    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    updateBALL(elBall1, 100, 'purple')
    updateBALL(elBall2, 100, 'red')

    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = 'black'
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
    StoreSiteStatus()

    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    onBallClick(elBall1, 200)
    onBallClick(elBall2, 400)
    onSwapBallsSizeAndColor()
    onReduceBallsSize()
}


function StoreSiteStatus(storeRedo) {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')
    const elBody = document.querySelector('body')

    var currStatus = {}

    currStatus.ball1Size = +elBall1.innerText
    currStatus.ball1Color = getComputedStyle(elBall1).backgroundColor
    currStatus.ball2Size = +elBall2.innerText
    currStatus.ball2Color = getComputedStyle(elBall2).backgroundColor
    currStatus.bodyBackgroundColor = getComputedStyle(elBody).backgroundColor

    if (storeRedo === 'store curr status before undo' ) gRedo.push(currStatus)
    else gHistory.push(currStatus)
    console.log(gHistory);


    const elUndo = document.querySelector('.undo')
    if (!elUndo.classList.contains('active')) {
        activateUndo(true)
    }

}


function onUndo() {
    if (!gHistory.length) return

    var curr = gHistory[gHistory.length - 1]
    StoreSiteStatus('store curr status before undo')
    updateSiteDOM(curr)
    gHistory.pop()

    if (!gHistory.length) activateUndo()
    
    const elRedo = document.querySelector('.redo')
    if (!elRedo.classList.contains('active')) {
        activateRedo(true)
    }
}

function onRedo() {
    if (!gRedo.length) return

    var curr = gRedo[gRedo.length - 1]
    StoreSiteStatus()
    updateSiteDOM(curr)
    gRedo.pop()

    if (!gRedo.length) activateRedo()
}

function updateSiteDOM(curr) {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')
    const elBody = document.querySelector('body')

    console.log(curr);

    updateBALL(elBall1, curr.ball1Size, curr.ball1Color)
    updateBALL(elBall2, curr.ball2Size, curr.ball2Color)
    elBody.style.backgroundColor = curr.bodyBackgroundColor
}

function activateUndo(isOn) {
    const elUndo = document.querySelector('.undo')
    if (isOn) {
        elUndo.classList.add('active')
    } else {
        elUndo.classList.remove('active')
    }
}

function activateRedo(isOn) {
    const elRedo = document.querySelector('.redo')
    if (isOn) {
        elRedo.classList.add('active')
    } else {
        elRedo.classList.remove('active')
    }
}