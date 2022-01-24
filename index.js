var btn = document.querySelector('.cal');
var plus = document.querySelector('.bt')
var submitBtn = document.querySelector('#고수달')
var main = document.querySelector('#main')

var brTag = document.getElementsByName("br");
var minCl = document.querySelector('.min')
var secCl = document.querySelector('.sec')

var minCl_prime = [];
var secCl_prime = [];
var br = [];


var i = 0
var j = -1

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

var toggleOn = false
var toggleCount = 0

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
