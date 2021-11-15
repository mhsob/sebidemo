function rechts_drehen () {
    servos.P0.run(60)
    servos.P3.run(50)
}
function vorwaerts () {
    servos.P0.run(60)
    servos.P3.run(50)
}
basic.forever(function () {
    if (grove.measureInCentimeters(DigitalPin.C16) < 50) {
        rechts_drehen()
    } else {
        vorwaerts()
    }
})
