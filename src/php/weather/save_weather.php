<?php
  // require db connection
  require_once '../db_connection.php';
  // require utils class
  require_once '../classes/utils.php';
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  $invalid_save = Utils::validate_save($form_data);
  if ($invalid_save) {
    http_response_code(403);
    echo($invalid_save);
    return;
  }

  echo Utils::save_weather($pdo, $form_data);
