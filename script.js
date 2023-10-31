// hide and unhide private message
var nextStep = document.querySelector('#nextStep');

nextStep.addEventListener('click', function (e) {
  e.preventDefault();
  // Hide first view
  document.getElementById('form').style.display = 'none';

  // Show thank you message element
  document.getElementById('completed').style.display = 'block';
});

// color change for buttons
$(".unread").on('click', function () {
    var x = $(this).attr('class');
    if (x == 'unread') {
        $(this).removeClass("unread");
        $(this).addClass("read");
    } else {
        $(this).removeClass("read");
        $(this).addClass("unread");
    }
});