<?php
  // require db connection
  require_once '../db_connection.php';
  // require utils class
  require_once '../classes/utils.php';
  // start user session
  session_start();
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  // if confirm password is not set to empty string we know to sign up a user
  if ($form_data['confirm_password'] != '') {
    $sign_up_failed = Utils::validate_sign_up($form_data);

    if ($sign_up_failed) {
      http_response_code(403);
      echo($sign_up_failed);
      return;
    }

    http_response_code(200);
    echo(Utils::sign_up_user($pdo, $form_data));
    return;
  } else {
    // else check login credentials and validate login data
    $login_failed = Utils::validate_login($form_data);

    if ($login_failed) {
      http_response_code(403);
      echo($login_failed);
      return;
    }

    $user_data = Utils::login_user($pdo, $form_data);

    if (!$user_data) {
      http_response_code(403);
      return;
    }

    http_response_code(200);
    echo($user_data);
    return;
  }
