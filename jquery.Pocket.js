;(function($){
    $.fn.nav = function(options) { //定义插件的名称，这里为userCp
        var defaults = {
            //以下为该插件的属性及其默认值
            dom: '.son-nav', //子菜单
            showtime: 300, //子菜单
            hidetime: 200, //子菜单
        };
        var ops = $.extend(defaults,options);
        $(this).find(ops.dom).parent().hover(function() {
            $(this).children(ops.dom).slideDown(ops.showtime);
        }, function() {
            $(this).children(ops.dom).stop().slideUp(ops.hidetime);
        });
    };



})(jQuery);