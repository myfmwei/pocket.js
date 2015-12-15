# pocket.js 网页特效合集

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

### 3、提示弹框
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

### 4、返回顶部
```javascript
    // 示例1
     $('#p-top').top();
```
