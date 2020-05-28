function currentTimestamp() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var currentSecond = currentTime.getSeconds();
    var currentMillisecond = currentTime.getMilliseconds();
    console.log(currentHour + ':' + currentMinute + ':' + currentSecond + ':' + currentMillisecond);
  };
  