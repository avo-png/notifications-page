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

// change colors on all when click button
// $(".all-button").on('click', function () {
//     var y = 
//     if (x == 'unread') {
//         $(this).removeClass("unread");
//         $(this).addClass("read");
//     } else {
//         $(this).removeClass("read");
//         $(this).addClass("unread");
//     }
// });

// function changeColors() {
//   var background = document.querySelectorAll('#umread').style.backgroundColor;

//   if(background == "hsl(211, 68%, 94%)")
//   {
//     document.querySelectorAll('#umread').style.backgroundColor = "rgb(26,255,0)";
//   }
//   if(background == "rgb(26, 255, 0)")
//   {
//     document.querySelectorAll('#umread').style.backgroundColor = "hsl(211, 68%, 94%)";
//   }
// }

// document.getElementById("allButton").addEventListener("click", function(){ 
//     document.querySelectorAll("unread").style.backgroundColor = "black";
// }); 