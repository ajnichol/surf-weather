<?php
  // require db connection
  require_once '../db_connection.php';
  // require utils class
  require_once '../classes/utils.php';
  // and env vars
  require '../../../vendor/autoload.php';
  $dotenv = Dotenv\Dotenv::createImmutable('../../../');
  $dotenv->load();
  $msw_key = $_ENV['MSW_KEY'];
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['user_id'])) {
    echo Utils::collect_surf($pdo);
    return;
  }

  if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($form_data['spot_id']) && isset($_GET['user_id'])) {
    echo Utils::search_surf($pdo, $form_data['spot_id']);
    return;
  }
