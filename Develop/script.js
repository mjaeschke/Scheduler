
var dates = $("#currentDay");
var formatedDate = moment().format('MMMM Do YYYY, h:mm a');
console.log("today is: "+ formatedDate);
var cdElm = $("<p>").text("today is: " + formatedDate);
dates.append(cdElm);
var currentHour =  moment().format("h:mm a");
console.log("the current hour is: "+ currentHour);

  
var workHours = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm"
];


var hoursDiv = $("#buisnessHours");
var descriptionDiv = $("#currentHour");
var saveDiv = $("#saveBtn");


for (var i = 0; i < workHours.length; i++) {
  
  var workHoursNew = $("<p>" + workHours[i] + "</p>").addClass("hour");
  var descriptionNew = $("<input size=90>"+"</input>").addClass("description");
  var savBtnNew = $("<button>"+"save"+"</button>").addClass("saveBtn");
  hoursDiv.append(workHoursNew);
  saveDiv.append(savBtnNew);
  if(workHours[i] === currentHour){
    descriptionDiv.append(descriptionNew).addClass("present");
  console.log("this is in the past")
  }else if(workHours[i]<currentHour){
    descriptionDiv.append(descriptionNew).addClass("past");
  console.log("this is in the past")
  }else if (workHours[i]>currentHour){
    descriptionDiv.append(descriptionNew).addClass("future");
  }
}
