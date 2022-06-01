var containerEl = $(".container")
var saveButton = $('#saveButton');
var currentTime = moment().format

setInterval(function () {
  $("#currentDay").text(moment().format("dddd,MMMM Do YYYY, h:mm:ss a"));

}, 1000);

var containerEl = $(".container");

$("#8 .inserttext").val(localStorage.getItem("8"));
$("#9 .inserttext").val(localStorage.getItem("9"));
$("#10 .inserttext").val(localStorage.getItem("10"));
$("#11 .inserttext").val(localStorage.getItem("11"));
$("#12 .inserttext").val(localStorage.getItem("12"));
$("#1 .inserttext").val(localStorage.getItem("1"));
$("#2 .inserttext").val(localStorage.getItem("2"));
$("#3 .inserttext").val(localStorage.getItem("3"));
$("#4 .inserttext").val(localStorage.getItem("4"));
 


$('.saveBtn').on('click', function () {
  var text = containerEl.find(".inserttext").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, text);

  // Using the This keyword, target the id of the parrent and the value of the textbox using siblings
})

function timeTracker() {
  var currentTime = moment().hours();
  $('.time-block').each(function () {

    var nextTime = parseInt($(this).attr('id'));
    //console.log("nextTime");
    //console.log("currentTime");
    if (currentTime > nextTime) {
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
    } else if (currentTime < nextTime) {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    } else {
      $(this).removeClass('past');
      $(this).addClass('present');
      $(this).removeClass('future');
    }
  })
};
timeTracker();



//var containerEl = JSON.parse(localStorage.getItem("time")) || [];
// have to get better at utilizing local storage


// localStorage.setItem("containerEl", JSON.stringify(container));





// //var storage = JSON.parse(localStorage.getItem("container")) || [];

// storage.forEach(function (item) {
//   console.log("HELLO")

// });