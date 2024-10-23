"use strict"

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