var container = $('#container');
var saveButton = $('#saveButton');
var textInput = $('#text-input');
var rowTime = $('#row-time');
var rowArray = $('#row-array');
var localStorage = localStorage.getItem('text');
var currentTime = moment().format

console.log ('Hello') 

// this function tracks the hours we are in and declare it the past, present, or future group help!!
function colorCoordinator() {
  var hour = moment().hours();
  $('.time-block').each(function () {

    var rHour = parseInt($(this).attr('id'));

    if (rHour > hour) {
      $(this).addClass('future');
    } else if (rHour === hour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('past');
    }
  })
};

$('.btn').on('click', function (){
  var value = ""
  var time = ""

  // Using the This keyword, target the id of the parrent and the value of the textbox using siblings
})

var container = JSON.parse(localStorage.getItem("container")) || [];



localStorage.setItem("container", JSON.stringify(container));

printGuestData(nameInput, commentInput);



var container = JSON.parse(localStorage.getItem("container")) || [];

container.forEach(function (item) {
  printGuestData(item.name, item.comment);
});

formEl.on('submit', handleFormSubmit);