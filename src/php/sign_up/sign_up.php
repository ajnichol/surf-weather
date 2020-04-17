<?php
  // require db connection
  require_once '../db_connection.php';
  // get form data
  $sign_up_data = json_decode(file_get_contents('php://input'), true);

  $salt = 'XyZzy12*_';
  // validate data
  if(strlen($sign_up_data['name']) < 1 || strlen($sign_up_data['email']) < 1 || strlen($sign_up_data['password']) < 1 || strlen($sign_up_data['confirm_password']) < 1) {
    http_response_code(403);
    echo('All fields are required.');
    return;
  } else if (!strpos($sign_up_data['email'], '@')) {
    http_response_code(403);
    echo('Email must have an at-sign (@).');
    return;
  } else if ($sign_up_data['password'] != $sign_up_data['confirm_password']) {
    http_response_code(403);
    echo('Passwords do not match. Please try again.');
    return;
  }

  $user_pass = hash('md5', $salt.$sign_up_data['password']);
  $statement = $pdo->prepare(
      "INSERT INTO `users` (`name`, `email`, `password`)
      VALUES (:name, :email, :password)"
  );

  $statement->execute(array(
    ':name' => $sign_up_data['name'],
    ':email' => $sign_up_data['email'],
    ':password' => $user_pass
  ));

  http_response_code(200);
  echo(json_encode('Signed up succesfully.'));
  return;
