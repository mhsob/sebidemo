let _4Digit: grove.TM1637 = null
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
function rechts_drehen () {
    servos.P0.run(60)
    servos.P3.run(50)
}
function vorwaerts () {
    servos.P0.run(60)
    servos.P3.run(50)
}
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
    _4Digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
    if (grove.measureInCentimeters(DigitalPin.C16) < 50) {
        rechts_drehen()
    } else {
        vorwaerts()
    }
})
