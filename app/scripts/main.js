(function($) {
    $('a').smoothScroll();

    var windowHeight = $(window).height();

    $(document).scroll(function() {
        if(window.pageYOffset > (windowHeight / 3) * 2) {
            $('.top-link-block').show();
        } else {
            $('.top-link-block').hide();
        }
    });

})(jQuery);
