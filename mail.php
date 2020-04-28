<?php
function error($type)
{
  header("Location: /?mail=error&type=" . $type);
  unset($_POST);
  exit();
}

function checkSymbol($str)
{
  if (!preg_match("#^[aA-zZаА-яЯ0-9\-_\s]+$#", $str)) {
    error('forbidden_symbols');
  }
}

$to = 'alkoz.sale@gmail.com'; // Почта получателя

/**
 * Скрипт для отправления заявки "Перезвонить"
 *
 */
if (isset($_POST['celling'])) {

  if (!isset($_POST['name'])) {
    error('missing_name');
  }
  if (!isset($_POST['phone'])) {
    error('missing_phone');
  }
  if (!isset($_POST['comment'])) {
    error('missing_comment');
  }

  checkSymbol($_POST['name']);
  checkSymbol($_POST['comment']);

  $message = "User name: " . $_POST['name'] . "\r\n" . 'Phone: ' . $_POST['phone'] . "\r\n" . 'Message: ' . $_POST['comment'];
  $message = wordwrap($message, 70, "\r\n");

  $title = 'Please call back';
  $mail = mail($to, $title, $message);

  if ($mail) {
    header("Location: /?mail=success");
    exit();
  } else {
    header("Location: /?mail=error");
    exit();
  }
}

/**
 * Скрипт для отправления заявки "soundproofing of premises"
 */
if (isset($_POST['soundproofing'])) {

  if (!isset($_POST['name'])) {
    error('missing_name');
  }
  if (!isset($_POST['phone'])) {
    error('missing_phone');
  }
  if (!isset($_POST['rooms'])) {
    error('missing_rooms');
  }

  checkSymbol($_POST['name']);

  $message = "User name: " . $_POST['name'] . "\r\n" . 'Phone: ' . $_POST['phone'] . "\r\n" . 'Rooms: ' . $_POST['rooms'];
  $message = wordwrap($message, 70, "\r\n");

  $title = 'Calling - Soundproofing';
  $mail = mail($to, $title, $message);

  if ($mail) {
    header("Location: /?mail=success");
    exit();
  } else {
    header("Location: /?mail=error");
    exit();
  }
}

/**
 * Скрипт для отправления заявки "Просто перезвонить"
 */
if (isset($_POST['calling_type_2'])) {

  if (!isset($_POST['name'])) {
    error('missing_name');
  }

  checkSymbol($_POST['name']);

  $message = "User name: " . $_POST['name'] . "\r\n" . 'Phone: ' . $_POST['phone'] . "\r\n";
  $message = wordwrap($message, 70, "\r\n");

  $title = 'Please call back';
  $mail = mail($to, $title, $message);

  if ($mail) {
    header("Location: /?mail=success");
    exit();
  } else {
    header("Location: /?mail=error");
    exit();
  }
}








