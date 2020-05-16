
var dates = $("#currentDay");
var formatedDate = moment().format('MMMM Do YYYY, h:mm a');
var cdElm = $("<p>").text("today is: " + formatedDate);
dates.append(cdElm);

console.log("today is: "+ formatedDate);

    
