//Accordion
$(document).ready(function() {
    function close_accordion_section() {
        $('.service-content__accordion .service-content__accordion-section_title').removeClass('active');
        $('.service-content__accordion .service-content__accordion-section_text').slideUp(300).removeClass('open');
    }

    $('.service-content__accordion-section_title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if (jQuery(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.service-content__accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });

    //Slider
    $('.slider__wrapper').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //Testimonial slider
    $('.testimonials__wrapper').slick({
        arrow: true,
        dots: false,
        autoplay: true
    });

    $('.navigation__link').click(function(e) {
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 1500);
        e.preventDefault();
    });

    $(".burger-menu").click(function(e) {
        $(this).toggleClass("menu-on");
        $('.burger-list').fadeToggle('burger-list-active');
        $('.burger_elem').click(function(e) {
            $(".burger-menu").toggleClass("menu-on");
            $('.burger-list').fadeToggle('burger-list-active');
        });
    });
});