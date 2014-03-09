// function processDate(adate) {
//     var splitArray = new Array();
//     splitArray = adate.split("-");
//     var year = splitArray[0];
//     var month = splitArray[1] - 1;
//     var day = splitArray[2];
//     var hour = splitArray[3];
//     var minutes = splitArray[4];
//     return new Date(month, day, year, hour, minutes);
// }

// var newDate = new processDate(adate);
date = new Date();
// Define a class like this
function dateObject(day){
    // Add object properties like this
    this.day = new Date();
}

dateObject.prototype.displayNiceTime = function(day){    
  // getHours returns the hours in local time zone from 0 to 23
      var hours = day.getHours();
      // getMinutes returns the minutes in local time zone from 0 to 59
      var minutes =  day.getMinutes();
      var meridiem = " AM";

      // convert to 12-hour time format
      if (hours > 12) {
        hours = hours - 12;
        meridiem = ' PM';
      }
      else if (hours === 0){
        hours = 12;
      }

      // minutes should always be two digits long
      if (minutes < 10) {
        minutes = "0" + minutes.toString();
      }
      return hours + ':' + minutes + meridiem;
}

dateObject.prototype.getDateNow = function(){
  return this.day.toDateString() + " " + this.displayNiceTime(this.day).toString();
}

var dateobject = new dateObject(date);
