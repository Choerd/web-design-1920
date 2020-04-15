import * as module from './modules/module'

const synth = window.speechSynthesis

const table = document.querySelector('table')
const thead = table.querySelector('thead tr')
const tbody = table.querySelector('tbody')

const intro = document.querySelector('section > p')
intro.addEventListener('focus', () => {
    speak('Deze website is gemaakt met een custom screen reader. Op dit moment kun je voor de optimale ervaring je screen reader uitzetten en door tabben naar de volgende sectie.')
})

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
    speak('In China zijn er totaal 82295 besmet')
})

tbody.children[0].children[2].addEventListener('focus', () => {
    speak('In China zijn er totaal 3342 mensen overleden')
})

tbody.children[0].children[3].addEventListener('focus', () => {
    speak('In China zijn er vandaag 46 nieuwe besmettingen')
})

tbody.children[0].children[4].addEventListener('focus', () => {
    speak('In China liggen er vandaag 113 mense in kritieke toestand')
})

tbody.children[0].children[5].addEventListener('focus', () => {
    speak('In China zijn er in totaal 77816 mensen hersteld')
})


function speak(message) {
    synth.cancel()

    const utter = new SpeechSynthesisUtterance()
    utter.text = message

    synth.speak(utter)
}