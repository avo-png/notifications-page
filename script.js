// color change for each thing
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

// let's see if this works for the colors
const main = document.querySelector('#allButton');
const ones = document.querySelectorAll('#notread');
const updatedColor = '#fff';
const originalColor = main.style.backgroundColor;

main.addEventListener('click', function (e) {
    updateColor(e.target);
    ones.forEach( el => {
      updateColor(el);
    });
});

ones.forEach( el => {
  el.addEventListener('click', function (e) {
    updateColor(el);
  });
});

// Update the element color based on the current color
function updateColor(el) {
  if (el.style.backgroundColor === originalColor) {
    el.style.backgroundColor = updatedColor;
  } else {
    el.style.backgroundColor = originalColor;
  }
}