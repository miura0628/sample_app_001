function price(){
  const jobPrice = document.getElementById('job-price')
  const workTime = document.getElementById('work-time')
  const workDays = document.getElementById('work-days')

  const oneDayPrice = document.getElementById('one-day-price')
  const oneMonthPrice = document.getElementById('one-month-price')
  const oneYearPrice = document.getElementById('one-year-price')

  //時給コードの始め//
  jobPrice.addEventListener('input', function(){
    let price = jobPrice.value
    let time = workTime.value
    let days = workDays.value

    if (price >= 0 && time >= 0 && days >= 0){
      oneDayPrice.innerHTML = price * time
      oneMonthPrice.innerHTML = price * time * days
      oneYearPrice.innerHTML = price * time * days * 12
    }
  })
  //時給コードの終わり//

  //勤務時間コードの始め//
  workTime.addEventListener('input', function(){
    let price = jobPrice.value
    let time = workTime.value
    let days = workDays.value

    if (price >= 0 && time >= 0 && days >= 0){
      oneDayPrice.innerHTML = price * time
      oneMonthPrice.innerHTML = price * time * days
      oneYearPrice.innerHTML = price * time * days * 12
    }
  })
  //勤務時間コードの終わり//

  //出勤日数コードの始め//
  workDays.addEventListener('input', function(){
    let price = jobPrice.value
    let time = workTime.value
    let days = workDays.value

    if (price >= 0 && time >= 0 && days >= 0){
      oneDayPrice.innerHTML = price * time
      oneMonthPrice.innerHTML = price * time * days
      oneYearPrice.innerHTML = price * time * days * 12
    }
  })
  //出勤日数コードの終わり//

}
window.addEventListener('load', price)