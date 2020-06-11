<?php
  // require db connection
  require_once '../db_connection.php';
  // require utils class
  require_once '../classes/utils.php';
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['user_id'])) {
    $weather_id = intval(substr($_SERVER['REQUEST_URI'], strrpos($_SERVER['REQUEST_URI'], '/') + 1));

    if (empty($weather_id)) {
      http_response_code(403);
      echo 'Error deleting, weather_id is missing';
    }

    echo Utils::delete_weather($pdo, $weather_id);
    return;
  }

  if (isset($form_data['user_id']) && isset($form_data['city'])) {
    $invalid_save = Utils::validate_save($form_data);
    if ($invalid_save) {
      http_response_code(403);
      echo($invalid_save);
      return;
    }

    echo Utils::save_weather($pdo, $form_data);
    return;
  }

  $user_id = intval($_GET['user_id']);
  $is_int = Utils::validate_collect_weather($user_id);
  if ($is_int) {
    http_response_code(403);
    echo($is_int);
    return;
  }

  http_response_code(200);
  echo Utils::collect_weather($pdo, $user_id);
  return;
