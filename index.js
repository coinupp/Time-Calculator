// @ts-check
const btn = document.querySelector('.cal');
const plus = document.querySelector('.bt')
const submitBtn = document.querySelector('#고수달')
const main = document.querySelector('#main')
const reset = document.querySelector("#reset")

const brTag = document.getElementsByName("br");
const minCl = document.querySelector('.min')
const secCl = document.querySelector('.sec')

let minCl_prime = [];
let secCl_prime = [];
let br = [];


let i = 0
let j = -1

function createMinSecClone() {
  minCl_prime[i] = minCl.cloneNode(true)
  minCl_prime[i].style.visibility = 'visible'
  main.appendChild(minCl_prime[i])

  secCl_prime[i] = secCl.cloneNode(true)
  secCl_prime[i].style.visibility = 'visible'
  main.appendChild(secCl_prime[i])

  br[i] = brTag[0].cloneNode(true)
  main.appendChild(br[i])

  i += 1
  j += 1

}

plus.addEventListener('click', createMinSecClone);

submitBtn.addEventListener('click', submitClick)

function submitClick() {
    appendMinSecValue()
    JavaScript(sumOfMin_60 + sumOfSec)
    sumOfMin_60 = 0
    sumOfSec = 0
}

let sumOfMin_60 = 0,
  sumOfSec = 0;

function appendMinSecValue() {
  for (let a = 0; a < j+1; a++) {
    sumOfMin_60 += minCl_prime[a].value.toNumber() * 60;
    sumOfSec += secCl_prime[a].value.toNumber()
  }
}

const toggle = document.querySelector('#switch')

let toggleOn = false
let toggleCount = 0

toggle.addEventListener('click', function() {
  if (toggleCount % 2 === 0) {
    toggleOn = true
    submitBtn.disabled = true
  } else {
    toggleOn = false
    submitBtn.disabled = false
  }
  toggleCount++
})

reset.addEventListener('click', () => {
  minCl.value = null
  secCl.value = null
  minCl_prime.forEach(e => {
    e.value = null
  })
  secCl_prime.forEach(e => {
    e.value = null
  })
})