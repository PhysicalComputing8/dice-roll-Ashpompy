input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    Random = randint(0, 10)
    basic.showNumber(Random)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    Random = randint(0, 100)
    basic.showNumber(Random)
})
let Random = 0
basic.showString("Hi there buddy")
