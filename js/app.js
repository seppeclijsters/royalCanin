$(document).foundation();
//
if ($('.step1').length) {
  var video = document.querySelector('.step1__video');
}



function myFunction(x) {
    if (x.matches && $('.step1').length) { // If media query matches
          video.classList.add('step1__video-900');
          video.classList.remove('step1__video');
          console.log('groter dan 900');
    } else {
    }
}

var x = window.matchMedia("(min-height: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



function myFunction2(y) {
    if (y.matches && $('.step1').length) { // If media query matches
          video.classList.remove('step1__video-900');
          video.classList.add('step1__video');
          console.log('kleiner dan 900');
    } else {
    }
}

var y = window.matchMedia("(max-height: 900px)")
myFunction2(y) // Call listener function at run time
y.addListener(myFunction2) // Attach listener function on state changes


var popup = document.querySelector('.pop-up');
var popup_is_open = false;

if ( console.log('code wanneer pop-up tevoorschijn moet komen') && popup_is_open ) {
  popup.classList.remove('hide');
  popup.classList.add('show');
  popup_is_open = false;
  console.log('show');
}


document.addEventListener(`click`, e => {
  if (!$(".pop-up").is(e.target) // if the target of the click isn't the container...
  && $(".pop-up").has(e.target).length === 0) // ... nor a descendant of the container
    {
      if($('.pop-up').length && !popup_is_open) {
        popup.classList.remove('show');
        popup.classList.add('hide');
        popup_is_open = true;
        console.log('hide');
      }
   }

});
//
// document.addEventListener(`click`, e => {
//   if (!$(".tooltip").is(e.target) // if the target of the click isn't the container...
//   && $(".tooltip").has(e.target).length === 0) // ... nor a descendant of the container
//     {
//       if($('.tooltip').length) {
//         var tooltip = document.querySelector('.tooltip');
//
//         if (tooltip.dataset.attr.contains('aria-hidden') == true) {
//
//           // tooltip.classList.add('hide')
//           console.log('true tooltip');
//         }
//         // popup.classList.remove('show');
//
//       }
//    }
//
// });

//
// document.addEventListener(`click`, e => {
//   if (!$(".pop-up").is(e.target) // if the target of the click isn't the container...
//   && $(".pop-up").has(e.target).length === 0) // ... nor a descendant of the container
//     {
//       if($('.pop-up').length && !popup_is_open) {
//         popup.classList.remove('show');
//         popup.classList.add('hide');
//         popup_is_open = true;
//         console.log('hide');
//       }
//    }
//
//    if ($(".animals").is(e.target)) // if the target of the click isn't the container...
//      {
//      if ( $(".animals").has(e.target).length === 0 && popup_is_open ) {
//        popup.classList.remove('hide');
//        popup.classList.add('show');
//        popup_is_open = false;
//        console.log('show');
//      }
//    }
// });
