//页面元素初始化
var height = window.innerHeight;
var width = window.innerWidth;
//垂直定位
function verposition(id, num) {
    let elementHeight = document.getElementById(id).offsetHeight;
    // let smallfont = 17;
    // let smalllineheight = 30;
    // if (elementHeight > height) {
    //     document.getElementById(id).style.fontSize = smallfont + "px";
    //     document.getElementById(id).style.lineHeight = smalllineheight + "px";
    //     elementHeight = document.getElementById(id).offsetHeight;
    // }
    document.getElementById(id).style.marginTop = (height - elementHeight) * num + "px";


}
//水平定位
function horposition(id, num) {
    let elementWidth = document.getElementById(id).offsetWidth;
    document.getElementById(id).style.marginLeft = (width - elementWidth) * num + "px";
}
function resize() {
    verposition("loadingtotal", 0.35);
    document.getElementById("water").style.top = parseFloat(document.getElementById("loadingtotal").style.marginTop) + 0.032 * document.getElementById("circle").offsetHeight + "px";
    let topSize = document.getElementById("loadingtotal").style.marginTop;
    document.getElementById("loadingplane").style.top = topSize;
}