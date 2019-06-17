fetch(host + "backend/test.json", {
    method: "post"
})
    .then(res => res.json())
    .then(res => {
        if (res.errcode == 401) {
            // 跳转页面
            // window.location.href = ;
        } else {
            document.getElementById("offlinetotal").innerText = res.timecapsule["offline_total"];
            document.getElementById("onlinetotal").innerText = res.timecapsule["online_total"];
            document.getElementById("QRtotal").innerText = res.timecapsule["qrcode_total"];
            document.getElementById("createtotal").innerText = res.timecapsule["qrusers"];
            document.getElementById("answertotal").innerText = res.timecapsule["question_users"];
            document.getElementById("sendTotal").innerText = res.timecapsule["send_total"];
            document.getElementById("offlineSend").innerText = res.timecapsule["offline"];
            document.getElementById("onlineSend").innerText = res.timecapsule["online"];
            document.getElementById("onlineReceive").innerText = res.timecapsule["rec_online"];
            document.getElementById("QRreceive").innerText = res.timecapsule["rec_qr"];
            document.getElementById("capsuleAnswer").innerText = res.timecapsule["questions"];
            document.getElementById("adoptpokemon").innerText = res.pokemon["fairy_total"];
            document.getElementById("ComeTrueDreams").innerText = res.pokemon["complete_total"];
            document.getElementById("onlineDreamTotal").innerText = res.pokemon["users"];
            document.getElementById("helpfulPeople").innerText = res.pokemon["helper_num"];
            document.getElementById("helpNum").innerText = res.pokemon["help_num"];
            document.getElementById("knowFriend").innerText = res.pokemon["friends"];
            document.getElementById("getPok").innerText = res.pokemon["fairys"];
            document.getElementById("ownDreams").innerText = res.pokemon["wishes"];
            document.getElementById("ownDreamsComeTrue").innerText = res.pokemon["finish"];
            document.getElementById("getBoard").innerText = res.station["board"];
            document.getElementById("getTicket").innerText = res.station["passengers"];
            document.getElementById("busload").innerText = res.station["tickets"];
            document.getElementById("participant").innerText = res.photo;
            document.getElementById("selltotal").innerText = res.market["goods"];
            document.getElementById("buyer").innerText = res.market["people"];
            // document.getElementById("totalParticipant").innerText = res.summary[""];
            document.getElementById("propagation").innerText = res.summary["propagation"];
            document.getElementById("tweet").innerText = res.summary["tweet"];
            // document.getElementById("offline").innerText = res.summary["participants"];
        }
    })

window.onload = function () {
    imgonload = true;
    console.log("imgonload");
    if (musiconload) {
        modifyPosition();
    }
}

function modifyPosition() {
    document.getElementById("water").style.backgroundColor = "rgb(191,222,255)";
    document.getElementById("water").style.backgroundPositionY = "0";
    document.getElementById("num").innerText = 100;
    clearTimeout(timeout);
    clearInterval(horMoveInter);
    clearInterval(getInter);
    showed = true;
    let icon = document.getElementById("icon");
    document.getElementById("main").style.display = "inline";
    /* 首页 */
    verposition("startpagecenter", 0.33);
    /* 首页end */

    /* 时光 */
    //文字定位
    verposition("clocktext1", 5 / 11);
    verposition("clocktext2", 5 / 11);
    let clocktextimg = document.getElementById("clocktextimg");
    clocktextimg.style.height = height * 0.8 - clocktextimg.offsetTop - document.getElementById("capsule").offsetHeight + "px";
    //表盘时针定位
    let clockHeight = document.getElementById("clockImg").offsetHeight;
    let second = document.getElementById("second");
    let minute = document.getElementById("minute");
    let hour = document.getElementById("hour");
    verposition("clockImg", 0.5);
    second.style.height = clockHeight / 2 * 0.8 + "px";
    second.style.marginTop = (height / 2 - second.offsetHeight) + "px";
    minute.style.height = clockHeight / 2 * 0.65 + "px";
    minute.style.marginTop = (height / 2 - minute.offsetHeight) + "px";
    hour.style.height = clockHeight / 2 * 0.5 + "px";
    hour.style.marginTop = (height / 2 - hour.offsetHeight) + "px";
    /* 时光end */

    /* 宝可梦 */
    //文字定位
    verposition("dreamtext1", 4 / 11);
    // 宝可梦第二页定位
    var pokemons = document.getElementById("pokemons").offsetHeight;
    var pokemonheight = height - pokemons;
    let smallfont = 17;
    let smalllineheight = 38;
    while (document.getElementById("dreamtext2").offsetHeight > pokemonheight) {
        if (smalllineheight > 0) {
            smalllineheight--;
        }
        else {
            smallfont--;
        }
        document.getElementById("dreamtext2").style.fontSize = smallfont + "px";
        document.getElementById("dreamtext2").style.lineHeight = smalllineheight + "px";
    }
    verposition("dreamtext2", 2.5 / 11);
    /* 宝可梦end */

    /* 流年车站 */
    //文字定位
    verposition("stationtext", 5 / 11);
    /* 流年车站end */

    /* 照片墙 */
    //文字定位
    document.getElementById("photowalltext").style.marginTop = document.getElementById("photo1").offsetHeight + "px";
    // 绳子距顶部距离
    var linetop = document.getElementById("line").offsetTop;
    var num1 = linetop + 0.02 * width + 0.3 * document.getElementById("line").offsetHeight;
    document.getElementById("photo1").style.top = num1 + "px";
    var num2 = linetop + 0.09 * width;
    document.getElementById("photo2").style.top = num2 + "px";
    /* 照片墙end */

    /* 创意市集 */
    //文字定位
    verposition("markettext", 5 / 11);
    smallfont = 17;
    smalllineheight = 38;
    while (document.getElementById("markettext").offsetHeight > (height * 0.9 - (icon.offsetHeight + icon.offsetTop))) {
        if (smalllineheight > 0) {
            smalllineheight--;
        }
        else {
            smallfont--;
        }
        document.getElementById("markettext").style.fontSize = smallfont + "px";
        document.getElementById("markettext").style.lineHeight = smalllineheight + "px";
        document.getElementById("markettext").style.marginTop = (icon.offsetHeight + icon.offsetTop) + "px"
    }
    //星星居中
    verposition("starbg", 0.5);
    /* 创意市集end */

    /* 总结 */
    smallfont = 17;
    smalllineheight = 38;
    while (document.getElementById("summarizetext").offsetHeight > height * 0.8) {
        if (smalllineheight > 0) {
            smalllineheight--;
        }
        else {
            smallfont--;
        }
        document.getElementById("summarizetext").style.fontSize = smallfont + "px";
        document.getElementById("summarizetext").style.lineHeight = smalllineheight + "px";
    }
    verposition("summarizetext", 5 / 11);
    /* 总结end */
    document.getElementById("loading").style.display = "none";
}

var currentPage = 0;
//滑动到下一页
function nextpage() {
    switch (currentPage) {
        case 1:
            swiperClock.slideNext();
            break;
        case 2:
            swiperDream.slideNext();
            break;
        default:
            swiperTotal.slideNext();
            break;
    }
}

var clockint1, clockint2, clockint3;
var clockstarted = false;
var starshow = false;
var ballmoved = false;
var ballInter;
var balloonInter;
/* swiper翻页 */
swiperTotal.on('slideChangeTransitionEnd', function () {
    //初始化子swiper
    switch (this.realIndex) {
        case 0:
            swiperClock.destroy();
            currentPage = this.realIndex;
            break;
        case 1:
            swiperDream.destroy();
            initSwiperClock();
            if (!clockstarted) {
                clockStart();
                clockstarted = true;
            }
            if (currentPage == 2) {
                swiperClock.slideTo(1, 0);
                currentPage = 0;
                break;
            }
            currentPage = this.realIndex;
            break;
        case 2:
            swiperClock.destroy();
            initSwiperDream();
            if (currentPage == 3) {
                swiperDream.slideTo(1, 0);
                currentPage = 0;
                break;
            }
            currentPage = this.realIndex;
            break;
        case 3:
            swiperDream.destroy();
            currentPage = this.realIndex;
            break;
        case 4:

            currentPage = this.realIndex;
            break;
        case 6:
            clearInterval(balloonInter);
            $("#endballoon").hide();
            break;
        case 7:
            setTimeout(() => {
                moveStart();
            }, 2000);
            break;
        default:
            currentPage = this.realIndex;
            break;
    }

    //别的页面时钟停止
    if (this.realIndex != 1 && clockstarted) {
        clearInterval(clockint1);
        clearInterval(clockint2);
        clearInterval(clockint3);
        clockstarted = false;
    }
})

function initSwiperClock() {
    swiperClock = new Swiper('.swiperClock', {
        direction: 'vertical',
        touchAngle: 90,
        height: window.innerHeight,
        touchReleaseOnEdges: true,
    })
    swiperClock.on('slideChangeTransitionEnd', function () {
        if (this.realIndex) {
            currentPage = 0;
        } else {
            currentPage = 1;
        }
    })
}

function initSwiperDream() {
    swiperDream = new Swiper('.swiperDream', {
        direction: 'vertical',
        touchAngle: 90,
        height: window.innerHeight,
        touchReleaseOnEdges: true,
    })
    swiperDream.on('slideChangeTransitionEnd', function () {
        if (this.realIndex) {
            currentPage = 0;
        } else {
            currentPage = 2;
        }
    })
}

/* 时钟 */
//时分秒针起始位置
var secondrotate = 0;
var minuterotate = 30;
var hourrotate = 120;
//开始旋转
function clockStart() {
    clockint1 = setInterval(secondchange, 1000);
    clockint2 = setInterval(minutechange, 1000);
    clockint3 = setInterval(hourchange, 6000);
}

function secondchange() {
    secondrotate += 6;
    document.getElementById("second").style.transform = "rotate(" + secondrotate % 360 + "deg)";
}

function minutechange() {
    minuterotate += 0.1;
    document.getElementById("minute").style.transform = "rotate(" + minuterotate % 360 + "deg)";
}

function hourchange() {
    hourrotate += 0.1;
    document.getElementById("hour").style.transform = "rotate(" + hourrotate % 360 + "deg)";
}

/* 再看一次 */
function turnBack() {
    swiperTotal.slideTo(0, 0);
}

/* 气球移动 */
var t = 0;
var beginX;
var x, y;
var count = 0;
function moveStart() {
    $("#endballoon").hide();
    count++;
    beginX = 0.5 * width - 0.5 * (1 + (Math.pow(-1, count))) * 0.4 * width;
    t = 0;
    clearInterval(balloonInter);
    setTimeout(() => {
        document.getElementById("endballoon").style.opacity = 1;
        $("#endballoon").fadeIn("slow");
        balloonInter = setInterval(balloonMove, 10);
    }, 2000);
}

function balloonMove() {
    t += 0.001;
    x = t;
    y = 6 * x * x;
    document.getElementById("endballoon").style.bottom = y * height + height * 0.1 + "px";
    document.getElementById("endballoon").style.opacity = 1 - 2 * t;
    if (count % 2) {
        document.getElementById("endballoon").style.left = x * width + beginX + "px";
    } else {
        document.getElementById("endballoon").style.left = -x * width + beginX + "px";
    }
    if (parseFloat(document.getElementById("endballoon").style.bottom) >= height) {
        moveStart();
    }
}

/* 音乐停止 */
var list = document.getElementsByClassName("icon");
function stop() {
    if (played) {
        for (let i = 0; i < list.length; i++) {
            list[i].src = "img/icon-stop.png";
            list[i].className = "icon";
        }
        bgmInstance.stop();
        played = false;
    }
    else {
        for (let i = 0; i < list.length; i++) {
            list[i].src = "img/icon.png";
            list[i].className = "icon icon-play";
        }
        bgmInstance.play();
        played = true;
    }
}