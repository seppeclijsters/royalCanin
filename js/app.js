$(document).foundation();
//
var video = document.querySelector('.step1__video');
//
if (window.innerHeight > 900) {
    video.classList.add('step1__video-900')
}


function myFunction(x) {
    if (x.matches) { // If media query matches
          video.classList.add('step1__video-900');
          video.classList.remove('step1__video');
          console.log(`groter dan 900`);
    } else {
    }
}

var x = window.matchMedia("(min-height: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



function myFunction2(y) {
    if (y.matches) { // If media query matches
          video.classList.remove('step1__video-900');
          video.classList.add('step1__video');
          console.log(`kleiner dan 900`);
    } else {
    }
}

var y = window.matchMedia("(max-height: 900px)")
myFunction2(y) // Call listener function at run time
y.addListener(myFunction2) // Attach listener function on state changes


// function myFunction3(z) {
//     if (z.matches) { // If media query matches
//           video.classList.add('step1__video-700');
//           video.classList.remove('step1__video');
//           console.log(`kleiner dan 500`);
//     } else {
//     }
// }
//
// var z = window.matchMedia("(max-height: 600px)")
// myFunction3(z) // Call listener function at run time
// z.addListener(myFunction3) // Attach listener function on state changes
