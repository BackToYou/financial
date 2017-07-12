$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
            items: 1,    // 一屏所看到的图片数量
            loop: true,    //循环滚动
            autoplay: true,    //自动播放
            autoplayTimeout: 3000,    //播放间隔
            autoplayHoverPause: true //鼠标在上，停止滚动
        }
    );
});
