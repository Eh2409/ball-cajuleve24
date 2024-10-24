"use strict"

var gIsRuning = false
var gstartTime = 0
var gtimer = null
var gElapsedTime = 0


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getRandomColor() {
    const colors = [
        'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'magenta', 'lime'
    ];
    var randomIdxNum = getRandomInt(0, colors.length)
    var theColor = colors[randomIdxNum]
    return theColor
}

// ------- TIME ------------


function onTimer() {
    if (!gIsRuning) {
      gstartTime = Date.now()
      gtimer = setInterval(update, 31)
      gIsRuning = true
    }
  }
  
  function update() {

    var currentTime = Date.now()
    gElapsedTime = currentTime - gstartTime

    var timePass = formatTime(gElapsedTime)
  
    const elTimer = document.querySelector('.timer')
    elTimer.textContent = timePass
  }
  
  function stopTimer() {
    if (gIsRuning) {
      clearInterval(gtimer)

      var currentTime = Date.now()
      gElapsedTime = currentTime - gstartTime

      var timePass = gElapsedTime

      gGame.secsPassed = timePass

      gIsRuning = false
    }
  }
  
  function resetTimer() {
    clearInterval(gtimer)
    gIsRuning = false
    gstartTime = 0
    gElapsedTime = 0

    const elTimer = document.querySelector('.timer')
    elTimer.textContent = '00:00:000'
  }

  function formatTime(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = Math.floor((ms % 60000) / 1000);
    var milliSeconds = Math.floor(ms % 1000)

    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')
    milliSeconds = String(milliSeconds).padStart(3, '0')

    return `${minutes}:${seconds}:${milliSeconds}`
  }