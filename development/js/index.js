import * as module from './modules/module'

const synth = window.speechSynthesis

console.log('Javascript is working - index.js')
console.log(module.test)


// const body = document.querySelector('body')
// body.addEventListener('click', () => {
//     speak('Hi, Sjors hier!')
// })

const table = document.querySelector('table')
const thead = table.querySelector('thead tr')
const tbody = table.querySelector('tbody')

console.log(tbody.children[0].children[0])

thead.children[0].addEventListener('focus', () => {
    speak('In deze kolom vind je alle landen')
})

thead.children[1].addEventListener('focus', () => {
    speak('In deze kolom vind je het totaal aantal mensen dat is besmet met het corona virus')
})

thead.children[2].addEventListener('focus', () => {
    speak('In deze kolom vind je het totaal aantal mensen dat is overleden aan het corona virus')
})

thead.children[3].addEventListener('focus', () => {
    speak('In deze kolom vind je de hoeveelheid nieuwe besmettingen')
})

thead.children[4].addEventListener('focus', () => {
    speak('In deze kolom vind je de hoeveelheid mensen in kritieke toestand')
})

thead.children[5].addEventListener('focus', () => {
    speak('In deze kolom vind je de herstelde mensen van het corona virus')
})

tbody.children[0].children[0].addEventListener('focus', () => {
    speak('Alle volgende gegevens gaan over het land: China')
})

tbody.children[0].children[1].addEventListener('focus', () => {
    speak('In China zijn er totaal 82249 besmet')
})

tbody.children[0].children[2].addEventListener('focus', () => {
    speak('In China zijn er totaal 3341 mensen overleden')
})

tbody.children[0].children[3].addEventListener('focus', () => {
    speak('In China zijn er vandaag 89 nieuwe besmettingen')
})

tbody.children[0].children[4].addEventListener('focus', () => {
    speak('In China liggen er vandaag 116 mense in kritieke toestand')
})

tbody.children[0].children[5].addEventListener('focus', () => {
    speak('In China zijn er in totaal 77738 mensen hersteld')
})


function speak(message) {
    synth.cancel()

    const utter = new SpeechSynthesisUtterance()
    utter.text = message

    synth.speak(utter)
}