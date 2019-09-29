// Truth or Dare
input.onButtonPressed(Button.A, function () {
    Truth = Math.randomBoolean()
    Dare = Math.randomBoolean()
    if (Truth == true) {
        basic.showString("T")
        basic.pause(300)
        basic.clearScreen()
    } else {
        basic.showString("D")
        basic.pause(300)
        basic.clearScreen()
    }
})
let Dare = false
let Truth = false
basic.showString("Ask Truth or Dare ?")
basic.showIcon(IconNames.Happy)
