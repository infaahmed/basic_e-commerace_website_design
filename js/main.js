// ################# NAVBAR #######################
$(document).ready(function(){
    $('.menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){
        $('.menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
});

// ####################### testimonial slider #######################

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




// ######################## PRELOADER #######################
    let preloader = document.getElementById("preloader");

    window.addEventListener("load", function(){
        preloader.style.display = "none";
    })