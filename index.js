const unitCalculatorInput = document.getElementById('unit-calculator--input')

const metersSpan = document.getElementById('meters')
const metersToFeetSpan = document.getElementById('meters-to-feet')
const feetSpan = document.getElementById('feet')
const feetToMetersSpan = document.getElementById('feet-to-meters')

const litersSpan = document.getElementById('liters')
const litersToGallonsSpan = document.getElementById('liters-to-gallons')
const gallonsSpan = document.getElementById('gallons')
const gallonsToLitersSpan = document.getElementById('gallons-to-liters')

const kilosSpan = document.getElementById('kilos')
const kilosToPoundsSpan = document.getElementById('kilos-to-pounds')
const poundsSpan = document.getElementById('pounds')
const poundsToKilosSpan = document.getElementById('pounds-to-kilos')

const metersFeetConversion = 3.2808
const litersGallonsConversion = 0.26417
const kilosPoundsConversion = 2.2046

let unitCalculatorInputValue = unitCalculatorInput.value

// Units
let meters = unitCalculatorInputValue
let metersToFeetValue
let feet = unitCalculatorInputValue
let feetToMetersValue
let liters = unitCalculatorInputValue
let litersToGallonsValue
let gallons = unitCalculatorInputValue
let gallonsToLitersValue
let kilos = unitCalculatorInputValue
let killosToPoundsValue
let pounds = unitCalculatorInputValue
let poundsToKilosValue

function conversions() {
    metersToFeetValue = meters * metersFeetConversion
    metersSpan.textContent = unitCalculatorInputValue
    metersToFeetSpan.textContent = metersToFeetValue.toFixed(3)

    feetToMetersValue = feet / metersFeetConversion
    feetSpan.textContent = unitCalculatorInputValue
    feetToMetersSpan.textContent = feetToMetersValue.toFixed(3)

    litersToGallonsValue = liters * litersGallonsConversion
    litersSpan.textContent = unitCalculatorInputValue
    litersToGallonsSpan.textContent = litersToGallonsValue.toFixed(3)

    gallonsToLitersValue = gallons / litersGallonsConversion
    gallonsSpan.textContent = unitCalculatorInputValue
    gallonsToLitersSpan.textContent = gallonsToLitersValue.toFixed(3)

    killosToPoundsValue = kilos * kilosPoundsConversion
    kilosSpan.textContent = unitCalculatorInputValue
    kilosToPoundsSpan.textContent = killosToPoundsValue.toFixed(3)

    poundsToKilosValue = pounds / kilosPoundsConversion
    poundsSpan.textContent = unitCalculatorInputValue
    poundsToKilosSpan.textContent = poundsToKilosValue.toFixed(3)
} conversions()

document.getElementById('unit-calculator--input').addEventListener('keyup', function(e) {
    unitCalculatorInputValue = e.target.value

    meters = unitCalculatorInputValue
    feet = unitCalculatorInputValue
    liters = unitCalculatorInputValue
    gallons = unitCalculatorInputValue
    kilos = unitCalculatorInputValue
    pounds = unitCalculatorInputValue

    conversions()
})
