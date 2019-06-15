var horMoveInter = setInterval(horMove, 100);
var horNum = 0;
function horMove() {
    horNum++;
    document.getElementById("water").style.backgroundPositionX = horNum + "vw";
}
var musiconload = false;
var imgonload = false;
//音乐预加载
var bgmInstance;
var played = false;
var loadmusic = new createjs.LoadQueue(false);
loadmusic.installPlugin(createjs.Sound);
loadmusic.addEventListener("progress", showProgress);
loadmusic.addEventListener("complete", showComplete);
loadmusic.loadFile({ "id": "bgm", "src": "media/music.mp3" });
loadmusic.load();
function showProgress() {
    if (!(loadmusic.progress == 1 && !imgonload)) {
        document.getElementById("water").style.backgroundPositionY = 38.16 * (1 - loadmusic.progress) + "vw";
        document.getElementById("num").innerText = parseInt(loadmusic.progress * 100);
    }
}
function showComplete() {
    console.log("musiconload");
    bgmInstance = createjs.Sound.createInstance("bgm");
    bgmInstance.stop();
    musiconload = true;
    if (imgonload) {
        modifyPosition();
    }
}