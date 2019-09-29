//eyes and nose
led.plot(1, 0)
led.plot(3, 0)
led.plot(2, 1)
//Mouth
led.plot(2, 3)
led.plot(1, 3)
led.plot(3, 3)
led.plot(0, 2)
led.plot(4, 2)
//face change
input.onButtonPressed(Button.A, function () {
    led.toggle(0, 4)
    led.toggle(4, 4)
    led.unplot(0, 2)
    led.unplot(4, 2)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, 4)
    led.unplot(4, 4)
    led.plot(0, 2)
    led.plot(4, 2)
})
// A = :(
//B = :)
//A,A = :|
