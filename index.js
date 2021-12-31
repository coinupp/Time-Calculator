var btn = document.querySelector('.cal');
var plus = document.querySelector('.bt')
var submitBtn = document.querySelector('#고수달')
var main = document.querySelector('#main')

var brTag = document.getElementsByName("br");
var minCl = document.querySelector('.min')
var secCl = document.querySelector('.sec')

// clone array
var minCl_prime = [];
var secCl_prime = [];
var br = [];


// minCl_prime 배열 정의에 사용될 수입니다
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

var submitCount = 0
function submitClick() {
  if (submitCount == 0) {
    appendMinSecValue()
    JavaScript(sumOfMin_60 + sumOfSec)
    submitCount++
  } else {
    // pass
  }
}


function toNumber(string) {
  string *= 1
  return string
}

let sumOfMin_60 = 0,
  sumOfSec = 0;

function appendMinSecValue() {
  for (let a = 0; a < j+1; a++) {
    sumOfMin_60 += toNumber(minCl_prime[a].value) * 60;
    sumOfSec += toNumber(secCl_prime[a].value)
  }
}

// 추후 지원 예정: 다시하기 버튼

/*
var resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', () => {
  submitCount = 0
});
*/