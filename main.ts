input.onButtonPressed(Button.A, function () {
    basic.showString("shake for fortune")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("BEHOLD")
    basic.showString("....")
    basic.pause(500)
    basic.showString("yes")
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showString("BALL KNOWS ALL")
})
