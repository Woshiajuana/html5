
$(() => {
    var $navItems = $('.nav-item');
    var $mask = $('.mask');
    $navItems.on('click', function () {
        var is = $(this).hasClass('on');
        $navItems.removeClass('active on');
        $(this).addClass('active');
        if (is) {
            $(this).removeClass('on');
            $mask.hide();
        } else {
            $(this).addClass('on');
            $mask.show();
        }
    })
});
