<?php

$recepient = "info@albi.kz";
$sitename = "Albi.kz";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$message = trim($_POST["message"]);

$message_info = "Имя: $name \nЭлектронная почта: $email \nТема: $subject \nТекст сообщения: $message";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message_info, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");