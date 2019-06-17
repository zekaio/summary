<?php
header('Content-type: applicant/json');
$data = [];
session_start();
if(!isset($_SESSION['openid'])) {
    echo json_encode([
        'errcode' => 401,
        'msg' => '未授权登录'
    ]);
    exit();
}
$openid = $_SESSION['openid'];

// 时光胶囊
$link = new mysqli('localhost', 'username', 'password', 'database');

$res = $link->query("select count(*) as offline_total from offline_capsules");
$row = $res->fetch_assoc();
$data['timecapsule']['offline_total'] = $row['offline_total'];
$res->close();

$res = $link->query("select count(*) as online_total from time_capsules where from_qrcode = 0");
$row = $res->fetch_assoc();
$data['timecapsule']['online_total'] = $row['online_total'];
$res->close();

$res = $link->query("select count(*) as qrcode_total from time_capsules where from_qrcode = 1");
$row = $res->fetch_assoc();
$data['timecapsule']['qrcode_total'] = $row['qrcode_total'];
$res->close();

$res = $link->query("select count(*) as qrusers from users");
$row = $res->fetch_assoc();
$data['timecapsule']['qrusers'] = $row['qrusers'];
$res->close();

$res = $link->query("select count(distinct sender_id) as question_users, count(*) as questions_total from question_capsules");
$row = $res->fetch_assoc();
$data['timecapsule']['question_users'] = $row['question_users'];
$data['timecapsule']['questions_total'] = $row['questions_total'];
$res->close();

$res = $link->query("select uid, tel from users where open_id = '$openid'");
$row = $res->fetch_assoc();
$id = isset($row['uid']) ? $row['uid'] : 0;
$tel = isset($row['tel']) ? $row['tel'] : 0;
$res->close();

$res = $link->query("select count(*) as offline from offline_capsules where sender_tel = '$tel'");
$row = $res->fetch_assoc();
$data['timecapsule']['offline'] = $row['offline'];
$res->close();

$res = $link->query("select count(*) as online from time_capsules where sender_id = $id");
$row = $res->fetch_assoc();
$data['timecapsule']['online'] = $row['online'];
$res->close();

$data['timecapsule']['send_total'] = $data['timecapsule']['offline'] + $data['timecapsule']['online'];

$res = $link->query("select count(*) as rec_online from time_capsules where receiver_tel = '$tel' and from_qrcode = 0");
$row = $res->fetch_assoc();
$data['timecapsule']['rec_online'] = $row['rec_online'];
$res->close();

$res = $link->query("select count(*) as rec_qr from time_capsules where receiver_tel = '$tel' and from_qrcode = 1");
$row = $res->fetch_assoc();
$data['timecapsule']['rec_qr'] = $row['rec_qr'];
$res->close();

$res = $link->query("select count(*) as questions from question_capsules where sender_id = $id");
$row = $res->fetch_assoc();
$data['timecapsule']['questions'] = $row['questions'];
$res->close();
$link->close();

// 许愿宝可梦
$link = new mysqli('localhost', 'user', 'password', 'database');

$res = $link->query("select (count(wisher_open = '已打开') + count(helper_open = '已打开')) as fairy_total from custom_wish;");
$row = $res->fetch_assoc();
$data['pokemon']['fairy_total'] = $row['fairy_total'];
$res->close();

$res = $link->query("select count(*) as complete_total from custom_wish where situation = '已领取'");
$row = $res->fetch_assoc();
$data['pokemon']['complete_total'] = $row['complete_total'];
$res->close();

$res = $link->query("select count(*) as users from user");
$row = $res->fetch_assoc();
$data['pokemon']['users'] = $row['users'];
$res->close();

$res = $link->query("select count(distinct helper_id) as helper_num from custom_wish");
$row = $res->fetch_assoc();
$data['pokemon']['helper_num'] = $row['helper_num'];
$res->close();

$res = $link->query("select count(*) as help_num from custom_wish where helper_id = '$openid'");
$row = $res->fetch_assoc();
$data['pokemon']['help_num'] = $row['help_num'];
$res->close();

$res = $link->query("select count(distinct wisher_id) as friends from custom_wish where helper_id = '$openid'");
$row = $res->fetch_assoc();
$data['pokemon']['friends'] = $row['friends'];
$res->close();

$res = $link->query("select count(*) as fairys from custom_wish where (wisher_id = '$openid' and wisher_open='已打开') or (helper_id='$openid' and helper_open='已打开')");
$row = $res->fetch_assoc();
$data['pokemon']['fairys'] = $row['fairys'];
$res->close();

$res = $link->query("select count(*) as wishes from custom_wish where wisher_id = '$openid'");
$row = $res->fetch_assoc();
$data['pokemon']['wishes'] = $row['wishes'];
$res->close();

$res = $link->query("select count(*) as finish from custom_wish where wisher_id = '$openid' and situation = '已领取'");
$row = $res->fetch_assoc();
$data['pokemon']['finish'] = $row['finish'];
$res->close();

$link->close();

// 流年车站
$link = new mysqli('localhost', 'user', 'password', 'database');

$res = $link->query("select (count(passenger1) + count(passenger2) + count(passenger3)) as passengers from station");
$row = $res->fetch_assoc();
$data['station']['passengers'] = $row['passengers'];
$res->close();

$res = $link->query("select count(*) as tickets from station");
$row = $res->fetch_assoc();
$data['station']['tickets'] = $row['tickets'] + 237;
$res->close();

$data['station']['board'] = 577;

$link->close();

// 照片墙
$data['photo'] = 136; // 拍照人数

// 创意市集
$data['market']['goods'] = 1098; // 商品数
$data['market']['people'] = 652; // 购买人数

// 总宣及其他
$link = new mysqli('localhost', 'user', 'password', 'database');

$res = $link->query("select zongxuan as propagation from click");
$row = $res->fetch_assoc();
$data['summary']['propagation'] = $row['propagation'];
$res->close();
$link->close();

$data['summary']['tweet'] = 24013;
// $data['summary']['participants'] = 10000;

echo json_encode($data);
exit();