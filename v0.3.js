// counts how many missed and made shots in basketball

let Score = 0
let Miss = 0
//Adds one to scores made
input.onButtonPressed(Button.A, function () {
    Score += 1
    basic.showNumber(Score)
    basic.clearScreen()
})
//Adds one to misses made
input.onButtonPressed(Button.B, function () {
    Miss += 1
    basic.showNumber(Miss)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Scores")
    basic.showNumber(Score)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Misses")
    basic.showNumber(Miss)
})
// Resets the counter
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Score = 0
    Miss = 0
})
 
