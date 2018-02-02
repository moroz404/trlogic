$(function () {
    var body = $(document.body),
        rat = $('#right-aside-toggle, .right-aside'),
        lat = $('#left-aside-toggle, .left-aside'),
        lra = $('.right-aside, .left-aside'),
        ra = $('.right-aside'),
        wrapper = $('.wrapper'),
        content = $(".content"),
        sidebar = $(".sidebar"),
        md = $('.main-description'),
        ua = window.navigator.userAgent;
    body.on('click', '#left-aside-toggle', function () {
        rat.removeClass('active');
        lat.toggleClass('active');
    });
    body.on('click', '#right-aside-toggle', function () {
        rat.toggleClass('active');
        lat.removeClass('active');
    });

    //transition fix
    ra.css({'right': wrapper.offset().left});
    $(window).resize(function () {
        if ($(window).width() > 640) {
            lra.addClass('transition');
            ra.css({'right': wrapper.offset().left});
        } else {
            lra.removeClass('transition');
            lat.removeClass('active');
            rat.removeClass('active');
            ra.removeAttr('style');
        }
    });

    //sticky fix
    $(window).scroll(function () {
        var fix = false;
        var top =  $(window).scrollTop();
        if (top > md.outerHeight() && $(window).height() < (sidebar.height() + 40)) {
            fix = true;
        }
        if (ua.indexOf("MSIE ") > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/') > 0 || fix) {
            if (top > md.outerHeight() && $(window).width() > 640) {
                sidebar.css({'position': 'fixed', 'margin-left': content.width() + 15});
            } else {
                sidebar.removeAttr('style');
            }
        } else {
            sidebar.removeAttr('style');
        }
    })
});