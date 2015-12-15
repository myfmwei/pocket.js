/*!
 @Name：pocket v0.0.1 网页特效合集
 @Author：FM7
 @Site：http://fmwei.com
 @License：LGPL
 */

;(function($){
    // 1、无限极菜单
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

// 文本滚动
    $.fn.textSlider = function(options) {
        var time = options ? time=options : time=2000;
        var ul = $(this);
        var scrollUp=function(){
            ul.animate({
                marginTop : -ul.find('li').height()
            },300,function(){
                ul.css({marginTop : "0px"}).find("li:first").appendTo(ul);
            });
        };
        setInterval(scrollUp,time);
    };


// 提示弹框
    msg = function(msg,options) {
        var defaults = {
            background: '#000',
            opacity: '0.6',
            width: '150px',
            height: '50px',
            color: '#fff',
            radius: '3px',
            icon :0,
            time: 3000,
            top: '50%',
        };
        var ops = $.extend(defaults,options);
        var width = /^\d+/.exec(ops.width);
        var heights = /^\d+/.exec(ops.height);
        var height = ops.top=='50%' ? height=heights : height='0';

        var iconn = 'inline-block';
        switch(ops.icon){
            case 1:
                var icon = '../img/msg/1.png'
            break;
            case 2:
                var icon = '../img/msg/2.png'
            break;
            case 3:
                var icon = '../img/msg/3.png'
            break;
            case 4:
                var icon = '../img/msg/4.png'
            break;
            case 5:
                var icon = '../img/msg/5.png'
            break;
            case 6:
                var icon = '../img/msg/6.png'
            break;
            case 7:
                var icon = '../img/msg/7.png'
            break;
            case 8:
                var icon = '../img/msg/l1.gif'
            break;
            case 9:
                var icon = '../img/msg/l2.gif'
            break;
            case 10:
                var icon = '../img/msg/l3.gif'
            break;
            case 11:
                var icon = '../img/msg/l4.gif'
            break;
            default:
                var iconn = 'none';
            break;
        }

        if($('.p-msg').length<=0){
            var data = '<div class="p-msg" style="background:'+ops.background+';opacity:'+ops.opacity+';width:'+ops.width+';height:'+ops.height+';line-height:'+ops.height+';color:'+ops.color+';border-radius:'+ops.radius+';top:'+ops.top+';margin-left:-'+width/2+'px;margin-top:-'+height/2+'px;"><i style="background-image:url('+icon+');display:'+iconn+'"></i>'+msg+'</div>';
                    $('body').append(data);
                    $('.p-msg').fadeIn();
                    setTimeout("$('.p-msg').remove()", ops.time);
        }else{
            return;
        }

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