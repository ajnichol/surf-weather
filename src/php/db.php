<?php
  session_start();

  require_once 'db_connection.php';

  if (!isset($_SESSION['user_id'])) {
    $_SESSION['error'] = "You're not logged in.";
    header("Location: index.php");
    return;
  }
