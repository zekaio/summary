<?php
$url = '';
$token = $_GET['token'];
$sign = $_GET['sign'];

$origin_token=$token;

$token=json_decode(base64_decode($token),true);

if(md5(sha1($origin_token.'afnweof!@#@#$sdf1334dcsS'))!==$sign||empty($token['openid'])){
    header("Location: $url");
    exit();
}

session_start();
$_SESSION['openid'] = $token['openid'];
header("Location: $url");
exit();