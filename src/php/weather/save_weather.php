<?php
  // require db connection
  require_once '../db_connection.php';
  // require utils class
  require_once '../classes/utils.php';
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  echo('here');
  var_dump($form_data);

  // $invalid_search = Utils::validate_search($form_data);
  // if ($invalid_search) {
  //   http_response_code(403);
  //   echo($invalid_search);
  //   return;
  // }
  //
  // http_response_code(200);
  // echo Utils::weather_search($owm_key, $form_data);
