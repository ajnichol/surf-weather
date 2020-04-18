<?php
  // require db connection
  require_once '../db_connection.php';
  // start user session
  session_start();
  // get request method
  $request_method = $_SERVER['REQUEST_METHOD'];
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  $salt = 'XyZzy12*_';

  if ($request_method == 'POST') {
    // validate POST data
    if(strlen($form_data['name']) < 1 || strlen($form_data['email']) < 1 || strlen($form_data['password']) < 1 || strlen($form_data['confirm_password']) < 1) {
      http_response_code(403);
      echo('All fields are required.');
      return;
    } else if (!strpos($form_data['email'], '@')) {
      http_response_code(403);
      echo('Email must have an at-sign (@).');
      return;
    } else if ($form_data['password'] != $form_data['confirm_password']) {
      http_response_code(403);
      echo('Passwords do not match. Please try again.');
      return;
    }

    $user_pass = hash('md5', $salt.$form_data['password']);
    $statement = $pdo->prepare(
        "INSERT INTO `users` (`name`, `email`, `password`)
        VALUES (:name, :email, :password)"
    );

    $statement->execute(array(
      ':name' => $form_data['name'],
      ':email' => $form_data['email'],
      ':password' => $user_pass
    ));
    $statement = null;

    http_response_code(200);
    echo(json_encode('Signed up succesfully.'));
    return;
  } else if ($request_method == 'GET') {
    echo('in get');
    echo($form_data['email']);
    echo($form_data['password']);
    // validate GET data
    if (strlen($form_data['email']) < 1 || $form_data['password'] < 1) {
      http_response_code(403);
      echo('All fields are required.');
      return;
    } else if (!strpos($form_data['email'], '@')) {
      http_response_code(403);
      echo('Email must have an at-sign (@).');
      return;
    }

    $login_pass = hash('md5', $salt.$form_data['password']);

    $statement = $pdo->prepare("SELECT * FROM `users` WHERE `password` = :password");
    $statement->execute(array(
      ':password' => $login_pass
    ));
    $user = $statement->fetch(PDO::FETCH_ASSOC);
    $statement = null;

    if(empty($user) || $user['password'] != $login_pass) {
      http_response_code(403);
      echo('Your credentials do not match.');
      return;
    }

    $_SESSION['user_id'] = $user['id'];

    echo(json_encode(['status' => 200, 'responseText' => 'Logged in successfully.']));
  }
