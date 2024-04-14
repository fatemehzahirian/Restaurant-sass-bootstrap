(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    
    $(document).ready(function () {
        var videoSrc; // تعریف متغیر برای آدرس ویدیو

        $('.btn-play').click(function () {
            // گرفتن آدرس ویدیو از ویژگی data-src دکمه
            videoSrc = $(this).data("src");

            // تنظیم منبع ویدیو در iframe با استفاده از متغیر
            $("#video").attr('src', videoSrc);

            // نمایش پاپ آپ
            $("#videoModal").modal("show");
        });
    });
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);



//*/*/*/*/*/*/*/*/*/*/*/*/*/* search /*/*/*/*/*/*/*/*/*/*/*/*/*/*

// document.addEventListener("DOMContentLoaded", function() {
//     const searchButton = document.getElementById("searchButton");
//     const searchOverlay = document.getElementById("searchOverlay");
//     const searchOverlayInput = document.getElementById("searchOverlayInput");
  
//     searchButton.addEventListener("click", function() {
//       searchOverlay.style.display = "block";
//       searchOverlayInput.focus();
//     });
  
//     searchOverlayInput.addEventListener("blur", function() {
//       searchOverlay.style.display = "none";
//     });
//   });
  
  
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchOverlayInput = document.getElementById("searchOverlayInput");
  
    // Identify the close button using its appropriate selector:
    const closeButton = document.querySelector('#btn-close'); // Assuming a class is used
  
    searchButton.addEventListener("click", function() {
      searchOverlay.style.display = "block";
      searchOverlayInput.focus();
    });
  
    // searchOverlayInput.addEventListener("blur", function() {
    //   // Close only when clicking outside the input field and overlay itself:
    //   if (!searchOverlay.contains(event.target)) {
    //     searchOverlay.style.display = "none";
    //   }
    // });
  
    // Close on clicking the close button:
    closeButton.addEventListener("click", function() {
      searchOverlay.style.display = "none";
    });
  });
  


//   login

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // از ارسال فرم به صفحه دیگر جلوگیری کنید
    var username = document.getElementById("txt").value;
    updateIcon(username);
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // از ارسال فرم به صفحه دیگر جلوگیری کنید
    var email = document.getElementById("email").value;
    updateIcon(email);
});

function updateIcon(text) {
    document.getElementById("icon").textContent = text;
}


