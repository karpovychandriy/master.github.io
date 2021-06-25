(function ($) {
    "use strict"

    var navMenu = document.querySelector('.navbar-toggler-icon');
    navMenu.addEventListener("click", function(e) {
      document.body.classList.toggle('marbody');
    });

    
    
    

    // Set the date we're counting down to
    var countDownDate = new Date("Sep 5, 2021 23:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = /* days + " днів " + */hours + ":" + minutes + ":" + seconds;

    document.getElementById("demo1").innerHTML = /* days + " днів " + */hours + ":" + minutes + ":" + seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);

      new Swiper(".home-slider", {
        slidesPerView: "auto",
        spaceBetween: 1,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      new Swiper(".action-slider", {
        slidesPerView: "auto",
        spaceBetween: 13,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      new Swiper(".comments-slider", {
        slidesPerView: "auto",
        spaceBetween: 42,
        grabCursor: true,
        mousewheel: {
          invert: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
      });

      new Swiper(".top-slider", {
        slidesPerView: "auto",
        spaceBetween: 17,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      new Swiper(".tovar-slider", {
        slidesPerView: "auto",
        spaceBetween: 10,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      

      var swiper2 = new Swiper(".tovar2-slider", {
        slidesPerView: 3,
        freeMode: true,
        direction:"vertical",
        allowTouchMove: false,
      });

      var swiper1 = new Swiper(".tovar1-slider", {
        slidesPerView: 1,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        freeMode: true,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper2,
        },
      });

    

      document.getElementById("buttonUp1").onclick = function scrollUpFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

      window.onscroll = function() {scrollFunction()}

      function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          document.getElementById("buttonUp1").style.display = "block";
        }
        else {
          document.getElementById("buttonUp1").style.display = "none";
        }
      }


    $(document).ready(function () {
        //svg4everybody({})
        
        if (navMenu.classList.contains('show')) {
          document.body.classList.add('marbody');
        }

    })

})(jQuery)

;(function($) {
    var request;
    $('.send-ajax').on('submit', function(e) {
        e.preventDefault()
        e.stopPropagation()

        if (request) {
            request.abort();
        }

        var $form = $(this);
        var $inputs = $form.find("input, select, button, textarea");
        var serializedData = $form.serialize();

        $inputs.prop("disabled", true);

        request = $.ajax({
            url: "/smtp/send.php",
            type: "post",
            data: serializedData
        });

        request.done(function (response, textStatus, jqXHR){
            // alert(response.data);
            $(this).trigger('formSendSuccess', response);
        });

        request.fail(function (jqXHR, textStatus, errorThrown){
            $(this).trigger('formSendFailed', errorThrown);
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
        });

        request.always(function () {
            // Reenable the inputs
            $inputs.prop("disabled", false);
        });
    });
})(jQuery);