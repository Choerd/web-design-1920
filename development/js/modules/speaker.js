const synth = window.speechSynthesis

export function speak(message) {
    synth.cancel()

    const utter = new SpeechSynthesisUtterance()
    utter.text = message
    utter.lang = 'en-US'

    synth.speak(utter)
}

export function stop() {
    synth.cancel()
}