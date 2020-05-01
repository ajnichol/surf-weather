<?php
  // require db connection
  require_once '../db_connection.php';
  // and env vars
  require '../../../vendor/autoload.php';
  $dotenv = Dotenv\Dotenv::createImmutable('../../../');
  $dotenv->load();

  const URL = 'http://api.openweathermap.org/data/2.5/forecast?';
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  if (strlen($form_data['city']) < 1) {
    http_response_code(403);
    echo('All fields are required.');
    return;
  }

  $params = http_build_query([
    'q' => $form_data['city'],
    'units' => 'imperial',
    'appid' => $_ENV['OWM_KEY']
  ]);

  $weather_data = json_decode(file_get_contents(URL . $params), true);

  // create data structure to return to frontend that can map to your
  // weather model

  var_dump($weather_data);
