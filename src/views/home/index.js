
$(() => {
    var $navItems = $('.nav-item');
    var $navInnerItems = $('.nav-item-inner');
    var $mask = $('.mask');
    $navInnerItems.on('click', function () {
        var $father = $(this).parent('.nav-item');
        var is = $father.hasClass('on');
        $navItems.removeClass('active on');
        $father.addClass('active');
        if (is) {
            $father.removeClass('on');
            $mask.hide();
        } else {
            $father.addClass('on');
            $mask.show();
        }
    })
});
