$(function () {
    var body = $(document.body),
        ra = $('#right-aside-toggle, .right-aside'),
        la = $('#left-aside-toggle, .left-aside'),
        sidebar = $(".sidebar"),
        content = $(".content"),
        ua = window.navigator.userAgent;
    body.on('click', '#left-aside-toggle', function () {
        ra.removeClass('active');
        la.toggleClass('active');
    });
    body.on('click', '#right-aside-toggle', function () {
        ra.toggleClass('active');
        la.removeClass('active');
    });

    //IE sticky fix
    if (ua.indexOf("MSIE ") > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/') > 0) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 50 && $(window).width() > 640) {
                sidebar.css({'position': 'fixed', 'margin-left': content.width() + 15});
            } else {
                sidebar.removeAttr('style');
            }
        })
    }
});