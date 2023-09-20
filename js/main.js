// Open Sub Menu
$('.drp_btn').click(function(){
  $(this).siblings('.sub_menu').slideToggle();
})

// Preloader JS

function preloader_fade() {
  $("#preloader").fadeOut('slow');
}

$(document).ready(function() {
  window.setTimeout("preloader_fade();", 500); //call fade in .5 seconds
}
)


// All Slider Js

$('#frmae_slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    rtl:true,
    smartSpeed: 500,
    nav:false,
    dots: true, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#company_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    rtl:true,
    autoplay: true,
    smartSpeed: 500,
    dots: true, 
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$('#testimonial_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    rtl:true,
    smartSpeed: 500,
    dots: true, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('#screen_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true, 
    rtl:true,
    autoplay: true,
    smartSpeed: 500,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// Pricing Section Year Month Jquery
$(document).ready(function () {

    $(".tog_block").click(function () {
      $(".tog_btn").toggleClass('month_active');
      $('.month').toggleClass('active');
      $('.years').toggleClass('active');

      $('.monthly_plan').toggleClass('active');
      $('.yearly_plan').toggleClass('active');

    })

  });

  $(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
      $(this)
        .prev(".card-header")
        .find(".icon_faq")
        .addClass("icofont-minus")
        .removeClass("icofont-plus");
    });


    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on("show.bs.collapse", function () {
        $(this).prev(".card-header").find(".icon_faq").removeClass("icofont-plus").addClass("icofont-minus");
      })
      .on("hide.bs.collapse", function () {
        $(this).prev(".card-header").find(".icon_faq").removeClass("icofont-minus").addClass("icofont-plus");
      });

      $(".collapse").on("show.bs.collapse", function () {
        $(this).prev(".card-header").children('h2').children('.btn').addClass("active");
      })
      .on("hide.bs.collapse", function () {
        $(this).prev(".card-header").children('h2').children('.btn').removeClass("active");
      });
  });


// Scrool-top
$(document).ready(function() {
  var toTop = $('.go_top');
  toTop.on('click', function() {
    $('html, body').animate({scrollTop: $('html, body').offset().top,}, 400);
  });

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 750) {
      $(toTop).css("opacity", "1");

    } else {
      $(toTop).css("opacity", "0");
    }

  });

});

// Fix Header Js
$(window).scroll(function(){
  if ($(window).scrollTop() >= 250) {
      $('header').addClass('fix_style');
  }
  else {
      $('header').removeClass('fix_style');
  }
  if ($(window).scrollTop() >= 260) {
      $('header').addClass('fixed');
  }
  else {
      $('header').removeClass('fixed');
  }
});




//YOUTUBE VIDEO
$('.play-button').click(function(e){
  var iframeEl = $('<iframe>', { src: $(this).data('url') });
  $('#youtubevideo').attr('src', $(this).data('url'));
})

$('#close-video').click(function(e){
  $('#youtubevideo').attr('src', '');
}); 

$(document).on('hidden.bs.modal','#myModal', function () {
  $('#youtubevideo').attr('src', '');
}); 



// Close btn on click 

$(document).ready(function(){
  $('.navbar-toggler').click(function(){
    if($(this).children('span').children('.ico_menu').hasClass('icofont-navigation-menu')) {
      $(this).children('span').children('.ico_menu').removeClass('icofont-navigation-menu').addClass('icofont-close');
    } else {
      $(this).children('span').children('.ico_menu').removeClass('icofont-close').addClass('icofont-navigation-menu');
    }
  });
});

(function() {
  $('.toggle-wrap').on('click', function() {
    $(this).toggleClass('active');
    $('aside').animate({width: 'toggle'}, 200);
  });
})();


// INITIALIZE AOS

AOS.init();


document.addEventListener("DOMContentLoaded", function () {
  // Add a submit event listener to the form
  const form = document.getElementById("myForm");
  var puprple_btn = document.querySelector(".puprple_btn");
  var text_m = document.querySelector('.text_m');
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    puprple_btn.style.opacity = '0'
    // Get the form data
    const formData = new FormData(form);

    // Define the URL to send the POST request
    const apiUrl = "http://api.amadoctors.com/api/sendEmail";

    // Send a POST request
    fetch(apiUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          // text_m.innerHTML = `HTTP error! Status: ${response.status}`
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        form.reset();
        text_m.innerHTML = `Sent Succesfully`
        puprple_btn.style.opacity = '1'
        return response.json();
      })
      .then((data) => {
        puprple_btn.style.opacity = '1'
        // Handle the response data here (if needed)
        console.log(data);
      })
      .catch((error) => {
        puprple_btn.style.opacity = '1'
        // Handle errors here
        // text_m.innerHTML = `${error}`

        console.error(error);
      });
  });
});


