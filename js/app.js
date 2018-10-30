$(document).foundation();


// MP4 CLIP CHANGES TO BOTTOM WHEN SCREEN TOO SMALL

if ($('.step1').length) {
  var video = document.querySelector('.step1__video');
}

function myFunction(x) {
    if (x.matches && $('.step1').length) { // If media query matches
          video.classList.add('step1__video-900');
          video.classList.remove('step1__video');
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
    } else {
    }
}

var y = window.matchMedia("(max-height: 900px)")
myFunction2(y) // Call listener function at run time
y.addListener(myFunction2) // Attach listener function on state changes


var popup = document.querySelector('.pop-up');
var popup_background = document.querySelector('.pop-up__background');
var popup_is_open = false;

if (popup_is_open ) {
  popup.classList.remove('hide');
  popup.classList.add('show');
  popup_background.classList.add('show');
  popup_background.classList.remove('hide');
  popup_is_open = false;
}

// close pop-up when clicking next to pop-up

document.addEventListener(`click`, e => {
  if (!$(".pop-up").is(e.target) // if the target of the click isn't the container...
  && $(".pop-up").has(e.target).length === 0) // ... nor a descendant of the container
    {
      if($('.pop-up').length && !popup_is_open) {
        popup.classList.remove('show');
        popup.classList.add('hide');
        popup_background.classList.remove('show');
        popup_background.classList.add('hide');
        popup_is_open = true;
      }
   }

});

// SMOOTHSCROLL BREED SELECTION

if ($('.ras').length) {
  var breed_selected = document.querySelectorAll('.ras');

  for (var i = 0; i < breed_selected.length; i++) {
      breed_selected[i].addEventListener('click', function(event) {
        $('html, body').animate({
            scrollTop: $(".animals").offset().top
        }, 300);
      });
  }
}

if ($('.cookie__button').length) {

    var cookie_is_open = false;

    document.addEventListener('click', function(){
      if(!cookie_is_open) {
        cookie_container.classList.add('show-cookie');
        cookie_is_open = true;
      }
    });

    var cookie_button = document.querySelector('.cookie__button');
    var cookie_container = document.querySelector('.cookie__container');
    cookie_button.addEventListener('click', function (e) {
        e.preventDefault();

        // Ajax request to set cookie.
        var url = $('.cookie__button__link').attr('href');
        $.get(url);

        cookie_container.classList.remove('show-cookie');
        cookie_container.classList.add('hide-cookie');
        cookie_is_open = false;
    })
}
