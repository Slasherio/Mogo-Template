jQuery(document).ready(function() {
    function close_accordion_section() {
        jQuery('.service-content__accordion .service-content__accordion-section_title').removeClass('active');
        jQuery('.service-content__accordion .service-content__accordion-section_text').slideUp(300).removeClass('open');
    }

    jQuery('.service-content__accordion-section_title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');

        if (jQuery(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.service-content__accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});