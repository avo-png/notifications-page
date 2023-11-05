// hide and unhide private message
// var nextStep = document.querySelector('#nextStep');

// nextStep.addEventListener('click', function (e) {
//   e.preventDefault();
//   // Hide first view
//   document.getElementById('form').style.display = 'none';

//   // Show thank you message element
//   document.getElementById('completed').style.display = 'block';
// });

// color change for buttons
// $(".unread").on('click', function () {
//     var x = $(this).attr('class');
//     if (x == 'unread') {
//         $(this).removeClass("unread");
//         $(this).addClass("read");
//     } else {
//         $(this).removeClass("read");
//         $(this).addClass("unread");
//     }
// });

// color change for button another try
// function colorChange() {
//     document.getElementsById("unreade").style.backgroundColor = "red";
// }

// updates
var changeColors = document.querySelector('#mButton');

changeColors.addEventListener('click', function (e) {
  e.preventDefault();
  // change to white
  document.getElementById('unread').backgroundColor = 'rgb(26,255,0)';

  // change to red
  document.getElementById('read').style.backgroundColor = 'rgb(255,145,0)';
});

// function colorchange(id)
// {
//   var background = document.getElementById(id).style.backgroundColor;

//   if(background == "rgb(255, 145, 0)")
//   {
//   document.getElementById(id).style.backgroundColor = "rgb(26,255,0)";
//   }
//   if(background == "rgb(26, 255, 0)")
//   {
//     document.getElementById(id).style.backgroundColor = "rgb(255,145,0)";
//   }

// }