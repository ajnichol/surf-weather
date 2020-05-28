<?php
  // require db connection
  require_once '../db_connection.php';
  // require utils class
  require_once '../classes/utils.php';
  // and env vars
  require '../../../vendor/autoload.php';
  $dotenv = Dotenv\Dotenv::createImmutable('../../../');
  $dotenv->load();
  $owm_key = $_ENV['OWM_KEY'];
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  $invalid_search = Utils::validate_search($form_data);
  if ($invalid_search) {
    http_response_code(403);
    echo($invalid_search);
    return;
  }

  http_response_code(200);
  echo Utils::weather_search($owm_key, $form_data);
  return;
