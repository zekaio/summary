var horMoveInter = setInterval(horMove, 100);
var horNum = 0;
function horMove() {
    horNum++;
    document.getElementById("water").style.backgroundPositionX = horNum + "vw";
}
var musiconload = false;
var imgonload = false;
var showed = false;
//音乐预加载
var timeout = setTimeout(getIn, 5000);
var bgmInstance;
var played = false;
var loadmusic = new createjs.LoadQueue(false);
loadmusic.installPlugin(createjs.Sound);
loadmusic.addEventListener("progress", showProgress);
loadmusic.addEventListener("complete", showComplete);
loadmusic.loadFile({ "id": "bgm", "src": "media/music.mp3" });
loadmusic.load();
function showProgress() {
    if (loadmusic.progress != 1) {
        document.getElementById("water").style.backgroundPositionY = 38.16 * (1 - loadmusic.progress) + "vw";
        document.getElementById("num").innerText = parseInt(loadmusic.progress * 100);
    } else {
        console.log("musiconload");
        musiconload = true;
        if (imgonload) {
            document.getElementById("water").style.backgroundColor = "rgb(191,222,255)";
            document.getElementById("water").style.backgroundPositionY = "0";
            document.getElementById("num").innerText = 100;
            clearInterval(horMoveInter);
            modifyPosition();
            showed = true;
        }
    }
}

function showComplete() {
    bgmInstance = createjs.Sound.play("bgm", { interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1 })
        ;
    bgmInstance.stop();
}

function getIn() {
    if (imgonload && musiconload && !showed) {
        document.getElementById("water").style.backgroundColor = "rgb(191,222,255)";
        document.getElementById("water").style.backgroundPositionY = "0";
        document.getElementById("num").innerText = 100;
        clearInterval(horMoveInter);
        modifyPosition();
    }
}