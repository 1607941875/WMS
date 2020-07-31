// // 首页js效果

// // 中部统计数字的监听动态显示
// // 绑定scroll事件
// window.onscroll = function() {
//     // 获取滚动条的位置：滚动条到浏览器顶部的距离
//     // var scrollPos;
//     // if (window.pageYOffset) {
//     //     scrollPos = window.pageYOffset;
//     // } else if (document.compatMode && document.compatMode != 'BackCompat') {
//     //     scrollPos = document.documentElement.scrollTop;
//     // } else if (document.body) {
//     //     scrollPos = document.body.scrollTop;
//     // }

//     // if (scrollPos == 600) {
//     //     // 要让数字从0递增，一直到指定的数字
//     //     // alert(1);
//     // }
//     // var t = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离bai
    
    
//     var ps = document.querySelectorAll(".number");
//     ps.forEach(function(p){
//         console.log(p)
//     })
//     // ps.forEach(function(p) {
//     //     var max = p.getAttribute("maxNum");
//     //      console.log(max);
//     //     // 设置定时器
//     //     var t = window.setInterval(function() {
//     //         // 让p标签的数字递增
//     //         var n = Number(p.innerText);
//     //         if (n < max) {
//     //             p.innerText = ++n;
//     //         } else {
//     //             window.clearInterval(t);
//     //         }
//     //     }, 10);

//     // });

// }
// 首页js效果

// 中部统计数字的监听动态显示
window.onscroll = function() {
    // 获取滚动条的位置：滚动条到浏览器顶部的距离
    // var scrollPos;
    // if (window.pageYOffset) {
    //     scrollPos = window.pageYOffset;
    // } else if (document.compatMode && document.compatMode != 'BackCompat') {
    //     scrollPos = document.documentElement.scrollTop;
    // } else if (document.body) {
    //     scrollPos = document.body.scrollTop;
    // }
    // console.log(scrollPos);
    // if (scrollPos == 600) {
    //     // 要让数字从0递增，一直到指定的数字
    //     // alert(1);
    // }
    var ps = document.querySelectorAll(".number");
    ps.forEach(function(p) {
        var max = p.getAttribute("maxNum");
        // 设置定时器
        var t = window.setInterval(function() {
            // 让p标签的数字递增
            var n = parseInt(p.innerText);
            if (n < max) {
                p.innerText = ++n;
            } else {
                window.clearInterval(t);
            }
        }, 10);
    });
}
