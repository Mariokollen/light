input.onButtonPressed(Button.A, function () {
    for (let i = 0; i <= 255; i++) {
        for (let j = 0; j <= 255; j++) {
            for (let k = 0; k <= 255; k++) {
                strip.showColor(neopixel.rgb(i, j, k))
            }
        }
    }
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
strip.setBrightness(10)
basic.forever(function () {
	
})
