// A modified version of activity 1 to include input
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
# . . . #
. # . # .
. . # . .
. # . # .
# . . . #
`)
    basic.pause(500)
    basic.showLeds(`
. . # . .
. . # . .
# # # # # 
. . # . .
. . # . . 
`)
    basic.pause(500)
    basic.showLeds(`
# . . . #
. # . # .
. . # . .
. # . # .
# . . . #
`)
    basic.pause(500)
    basic.showLeds(`
. . # . .
. . # . .
# # # # # 
. . # . .
. . # . . 
`)
    basic.pause(500)
})
 
