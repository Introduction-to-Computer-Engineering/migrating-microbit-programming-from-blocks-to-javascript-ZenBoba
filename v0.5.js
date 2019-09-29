//Spiraling sprite, press A to activate
input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 3; i++) {
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
        sprite.turn(Direction.Right, 90)
    }
    for (let i = 0; i < 2; i++) {
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
        sprite.turn(Direction.Right, 90)
    }
    for (let i = 0; i < 2; i++) {
        sprite.move(1)
        basic.pause(500)
        sprite.move(1)
        basic.pause(500)
        sprite.turn(Direction.Right, 90)
    }
    sprite.move(1)
    basic.pause(500)
    sprite.turn(Direction.Right, 90)
    sprite.move(1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
 
