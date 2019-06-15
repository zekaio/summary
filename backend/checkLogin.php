<?php
header('Content-type: applicant/json');
session_start();
if (isset($_SESSION['openid'])) {
    echo json_encode([
        'errcode' => 0,
        'msg' => '已登录'
    ]);
} else {
    echo json_encode([
        'errcode' => 401,
        'msg' => '未授权登录'
    ]);
}