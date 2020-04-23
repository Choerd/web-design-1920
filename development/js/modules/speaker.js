export function speak(message) {
    const synth = window.speechSynthesis
    synth.cancel()

    const utter = new SpeechSynthesisUtterance()
    utter.text = message

    synth.speak(utter)
}