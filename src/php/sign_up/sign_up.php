<?php
  // require db connection
  require_once '../db_connection.php';
  // get form data
  $sign_up_data = json_decode(file_get_contents('php://input'), true);
  // validate data
  if(strlen($sign_up_data['name']) < 1 || strlen($sign_up_data['email']) < 1 || strlen($sign_up_data['password']) < 1 || strlen($sign_up_data['confirm_password']) < 1) {
    http_response_code(403);
    echo('All fields are required.');
  } else if (!strpos($sign_up_data['email'], '@')) {
    http_response_code(403);
    echo('Email must have an at-sign (@).');
  } else if ($sign_up_data['password'] != $sign_up_data['confirm_password']) {
    http_response_code(403);
    echo('Passwords do not match. Please try again.');
  }
  // if good insert into users table and send status ok 200
