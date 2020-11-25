import $ from 'jquery'

$(document).ready(() => {
  console.log(window.location)
})

let sum = document.getElementById('quant')
let num = document.getElementById('mac')
let form = document.getElementById('form')
let final = document.getElementById('result')
let result

//event listener
form.onsubmit = function(event) {
  toDec()
  count()
  event.preventDefault()
}

form.oninput = function(event) {
  checkNum()
}

let checkNum = function() {
  let str = num.value.replace(/\:/g, "")
  document.getElementById('mac').value = str
}

//translating hex to dec
let toDec = function () {
  result = parseInt(num.value, 16)
  return result
}

//counting and translating result back to hex
let count = function () {
  let quantity = Number(sum.value) + result
  let finalResult = quantity.toString(16).toUpperCase()
  let endMac = finalResult.match(/.{1,2}/g).join(':')
  let startMac = num.value.match(/.{1,2}/g).join(':')
  final.innerHTML = 'Пул адресов к выдаче: ' + startMac + ' ' + '-' + ' ' + endMac
  return finalResult
}