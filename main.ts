gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P16, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(6)
    } else {
        radio.sendNumber(2)
    }
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(5)
    } else {
        radio.sendNumber(1)
    }
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(8)
    } else {
        radio.sendNumber(4)
    }
})
gamePad.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(7)
    } else {
        radio.sendNumber(3)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
