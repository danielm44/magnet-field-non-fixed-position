datalogger.onLogFull(function () {
    logging = false
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    let posx = 0
    basic.pause(2000)
    logging = !(false)
    if (logging) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else {
        basic.clearScreen()
    }
    if (posx == 6) {
        basic.showString("B")
    }
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let logging = false
logging = false
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.logData([
        datalogger.createCV("x", input.magneticForce(Dimension.X)),
        datalogger.createCV("y", input.magneticForce(Dimension.Y)),
        datalogger.createCV("z", input.magneticForce(Dimension.Z)),
        datalogger.createCV("strength", input.magneticForce(Dimension.Strength))
        ])
    }
})
