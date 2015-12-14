/*!
 @Name：pocket v0.0.1 网页特效合集
 @Author：FM7
 @Site：http://fmwei.com
 @License：LGPL
 */

;(function($){
    $.fn.nav = function(options) {
        var defaults = {
            dom: '.son-nav',
            showtime: 300,
            hidetime: 200,
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

//返回顶部
    $.fn.top = function(options) {
            var fIn = $(this);
            var fOut = $(this);
            $(window).scroll( function() {
                var scrollValue = $(window).scrollTop();
                scrollValue > 100 ? fIn.fadeIn():fOut.fadeOut();
            });
            $(this).click(function(){
                $('html,body').animate({scrollTop:0},500);
            });

    };

})(jQuery);