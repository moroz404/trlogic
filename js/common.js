$(function () {
    var body = $(document.body),
        ra = $('#right-aside-toggle, .right-aside'),
        la = $('#left-aside-toggle, .left-aside'),
        sidebar = $(".sidebar"),
        content = $(".content"),
        md = $('.main-description'),
        ua = window.navigator.userAgent;
    body.on('click', '#left-aside-toggle', function () {
        ra.removeClass('active');
        la.toggleClass('active');
    });
    body.on('click', '#right-aside-toggle', function () {
        ra.toggleClass('active');
        la.removeClass('active');
    });

    //sticky fix
    $(window).scroll(function () {
        var fix = false;
        if ($(window).scrollTop() > (md.height() + 10) && $(window).height() < (sidebar.height() + 40)) {
            fix = true;
        }
        if (ua.indexOf("MSIE ") > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/') > 0 || fix) {
            if ($(window).scrollTop() > (md.height() + 10) && $(window).width() > 640) {
                sidebar.css({'position': 'fixed', 'margin-left': content.width() + 15});
            } else {
                sidebar.removeAttr('style');
            }
        } else {
            sidebar.removeAttr('style');
        }
    })
});