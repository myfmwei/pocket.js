/*! pocket v0.0.1 网页特效合集 License LGPL  http://fmwei.com By FM7 */
/*!
 @Name：pocket v0.0.1 网页特效合集
 @Author：FM7
 @Site：http://fmwei.com
 @License：LGPL
 */
;(function($){
    $.fn.nav = function(options) { //定义插件的名称，这里为userCp
        var defaults = {
            //以下为该插件的属性及其默认值
            dom: '.son-nav', //自定义子菜单
            showtime: 300, //显示动画过渡速度
            hidetime: 200, //隐藏动画过渡速度
            type: 'down',
        };
        var ops = $.extend(defaults,options);
        $(this).find(ops.dom).parent().hover(function() {
            switch(ops.type){
                case 'down':
                    $(this).children(ops.dom).slideDown(ops.showtime);
                break;
                case 'left':
                    $(this).children(ops.dom).show(ops.showtime);
                break;
                case 'fade':
                    $(this).children(ops.dom).fadeIn(ops.showtime);
                break;
                default:
                    $(this).children(ops.dom).slideDown(ops.showtime);
                break;
            }
        }, function() {
            switch(ops.type){
                case 'down':
                    $(this).children(ops.dom).stop().slideUp(ops.hidetime);
                break;
                case 'left':
                    $(this).children(ops.dom).hide(ops.showtime);
                break;
                case 'fade':
                    $(this).children(ops.dom).fadeOut(ops.showtime);
                break;
                default:
                    $(this).children(ops.dom).stop().slideUp(ops.hidetime);
                break;
            }
        });
    };



})(jQuery);