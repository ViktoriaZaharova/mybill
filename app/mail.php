<?php

$recepient = "mybill@mybill.ru ";
$sitename = "Mybill - программа лояльности и маркетплейс для банков и вендоров";

$theme = trim($_POST["theme"]);
$text = trim($_POST["text"]);
//$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$message = trim($_POST["message"]);
$message = "Тема: $theme \nТекст: $text \nТелефон: $phone \nE-mail: $mail";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
