function JavaScript(time) {
  // time 변수에 원하는 시간을 입력하시오
  $('#result').text(secToMinHour(time))
}

function timeToSec(m, s) {
  var min = m
  var sec = s

  sec = min * 60 + sec
  return sec
}

function secToMinHour(s) {
  var Min
  var Hour
  var Sec = s
  if (Sec >= 60 && Sec < 3600) {
    Min = parseInt(Sec / 60)
    Sec = Sec % 60
    return `${Min}m ${Sec}s`
  } else if (Sec >= 3600) {
    Hour = parseInt(Sec / 3600)
    Sec = Sec % 3600
    Min = parseInt(Sec / 60)
    Sec = Sec % 60
    return `${Hour}h ${Min}m ${Sec}s`
  } else if (Sec == undefined) {
    // pass
  }
  else {
    return `${Sec}s`
  }
}

JavaScript()
