input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        for (let i = 0; i <= 255; i++) {
            strip.showColor(neopixel.hsl(i, 255, 60))
            basic.pause(20)
        }
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.forever(function () {
    strip.showColor(neopixel.hsl(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1000,
    0,
    255
    ), 255, 255))
})
