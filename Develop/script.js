
var dates = $("#currentDay");
var formatedDate = moment().format('MMMM Do YYYY, h:mm a');
console.log("today is: "+ formatedDate);
var cdElm = $("<p>").text("today is: " + formatedDate);
dates.append(cdElm);
var currentHour =  moment().format("h:mm a");
console.log("the current hour is: "+ currentHour);

  
    