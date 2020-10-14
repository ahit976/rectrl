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
        radio.sendNumber(2)
    } else {
        radio.sendNumber(6)
    }
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(5)
    }
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(8)
    }
})
gamePad.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(7)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
