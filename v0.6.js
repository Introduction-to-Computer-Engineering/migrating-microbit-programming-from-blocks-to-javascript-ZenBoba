let light = 0
input.onButtonPressed(Button.AB, function () {
    light = Math.randomRange(0, 2)
    if (light == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
    }
    if (light == 1) {
        for (let i = 0; i < 3; i++) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.clearScreen()
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
        }
    } else if (light == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
