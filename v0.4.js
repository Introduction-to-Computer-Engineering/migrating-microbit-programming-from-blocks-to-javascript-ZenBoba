//Conditional game alternative to rock-paper-scissors. shield-sword-bow
let weapon = 0
input.onGesture(Gesture.Shake, function () {
    weapon = Math.randomRange(0, 3)
    if (weapon == 0) {
        basic.showLeds(`
    # . . . #
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
    } if (weapon == 1) {
        basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    } else if (weapon == 2)
        basic.showLeds(`
        # # . . .
        # . # . .
        # # # # #
        # . # . .
        # # . . .
        `)

})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    game.gameOver()
})
