<?php
$recepient = "mrvershynin@gmail.com";
$sitename = "UTEC";

$email = trim($_GET["email"]);
$name = trim($_GET["name"]);
$tel = trim($_GET['tel']);
$msg = trim($_GET["msg"]);

if ($name!='' and $email!='' and $tel!='' and $msg!='') {
    $message = "$email $name $tel $msg";
    $res = mail($recepient, 'You letter from UTEC', $message);
    if ($res) {
        echo 1;
    } else {
        echo 0;
    }
}
else {
    echo 0;
}

?>