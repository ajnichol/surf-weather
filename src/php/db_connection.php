<?php
  $pdo = new PDO('mysql:host=localhost;port=8889;dbname=surf_weather', 'alex', 'coolstuff');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
