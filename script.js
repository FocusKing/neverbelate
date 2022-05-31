var containerEl = $('#container');
var saveButton = $('#saveButton');
var textInput = $('#text-input');
var localStorage = localStorage.getItem('text');
var currentTime = moment().format

setInterval(function(){
  $("#currentDay").text(moment().format("dddd,MMMM Do YYYY, h:mm:ss a"));

}, 1000);

console.log ('Hello') 

// this function tracks the hours we are in and declare it the past, present, or future group help!!
function timeTracker() {
  var currentTime = moment().hours();
  $('.time-block').each(function () {

    var nextTime = parseInt($(this).attr('id'));

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

$('.btn').on('click', function () {
  var value = containerEl.find(".inserttext").val();
  var time = $(this).parent().attr("id");

  // Using the This keyword, target the id of the parrent and the value of the textbox using siblings
})

var container = JSON.parse(localStorage.getItem("container")) || [];



localStorage.setItem("container", JSON.stringify(container));





var container = JSON.parse(localStorage.getItem("container")) || [];

container.forEach(function (item) {
  printGuestData(item.name, item.comment);
});

