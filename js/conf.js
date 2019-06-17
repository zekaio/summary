const host = "./";

// checklogin
$.ajax({
    type: "post",
    url: host + "backend/checkLogin.php",
    success: function (res) {
        if (res.errcode == 401) {
            // 跳转页面
            // window.location.href = ;
        }
    }
});