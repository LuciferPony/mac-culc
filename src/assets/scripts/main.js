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

form.onchange = function(event) {
  checkNum()
}

let checkNum = function() {
  let str = num.value.replace(/\:/g, "")
  console.log(str)
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
  final.innerHTML = 'Пул адресов к выдаче: ' + num.value + ' ' + '-' + ' ' + finalResult
  return finalResult
}