# pocket.js 网页特效合集

> 经常做项目的时候里面需要用到各种特效，每次不是自己写就是去找现成的插件，这样工作效率和项目质量总是难以保证，一直计划着做一款jQ插件并开源，里面集成了我们常用的特效，banner，导航，公告，焦点图，弹窗等等。欢迎有兴趣的朋友贡献代码！


### 1、无限极导航菜单
```javascript
    // 示例1
    $('#p-nav').nav();

    // 示例2
    $('#p-nav').nav({
        dom:'.son-nav', //自定义子菜单
        showtime: 300, //显示动画过渡速度，默认300
        hidetime: 200, //隐藏动画过渡速度，默认200
        type: 'down', //动画效果，默认为down,有down、left、fade 3种
    });
```
### 2、文本滚动
```javascript
    // 示例1
    $('.p-news-ul').textSlider(700);
```

### 3、多行文本无缝滚动
```javascript
    $("div.p-text-list").listScroll({
        speed:40,
        height:32
    });
```

### 4、提示弹框
```javascript
    // 示例1
    msg('我是提示');

    // 示例2
    msg('我是提示',{
        background: '#000', //设置背景颜色
        opacity: '0.6', //设置透明度
        width: '120px', // 设置宽度
        height: '50px', //设置高度
        color: '#fff', //设置文字颜色
        radius: '3px', //圆角
        icon :1, //图标,1-11可选
        time: 3000, //显示时长
        top: '50%', //默认为居中，通过该属性可以调整弹窗位置
    });

    // 示例3
    var config = {
        icon:10,
        width:'200px',
        top:'10px',
    };
    msg('我是文字',config);
```

### 5、返回顶部
```javascript
    // 示例1
     $('#p-top').top();
```
