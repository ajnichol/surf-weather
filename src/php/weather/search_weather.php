<?php
  // require db connection
  require_once '../db_connection.php';
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  if (strlen($form_data['city']) < 1) {
    http_response_code(403);
    echo('All fields are required.');
    return;
  }
