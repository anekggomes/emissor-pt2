radio.onReceivedNumber(function (receivedNumber) {
    datalogger.log(datalogger.createCV("ID", receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    let NÚMERO_DE_SÉRIE_DO_DISPOSITIVO = 0
    radio.sendNumber(NÚMERO_DE_SÉRIE_DO_DISPOSITIVO)
    radio.sendString("TESTE DE COMUNICAÇÃO")
    radio.sendString("TESTANDO, 1, 2, 3")
})
radio.onReceivedString(function (receivedString) {
    datalogger.log(datalogger.createCV("MENSAGEM", receivedString))
})
radio.setGroup(7)
basic.forever(function () {
	
})
