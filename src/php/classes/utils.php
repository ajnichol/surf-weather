<?php

  class Utils {
    const SALT = 'XyZzy12*_';
    const OWM_API = 'http://api.openweathermap.org/data/2.5/forecast?';

    public static function validate_sign_up($form_data) {
      if(strlen($form_data['name']) < 1 || strlen($form_data['email']) < 1 || strlen($form_data['password']) < 1 || strlen($form_data['confirm_password']) < 1) {
        return 'All fields are required.';
      } else if (!strpos($form_data['email'], '@')) {
        return 'Email must have an at-sign (@).';
      } else if ($form_data['password'] != $form_data['confirm_password']) {
        return 'Passwords do not match. Please try again.';
      }
      return false;
    }

    public static function validate_login($form_data) {
      if (strlen($form_data['email']) < 1 || strlen($form_data['password']) < 1) {
        return 'All fields are required.';
      } else if (!strpos($form_data['email'], '@')) {
        return 'Email must have an at-sign (@).';
      }
      return false;
    }

    public static function validate_search($form_data) {
      if (strlen($form_data['city']) < 1) {
        return 'All fields are required.';
      }
      return false;
    }

    public static function sign_up_user($pdo, $form_data) {
      $user_pass = hash('md5', self::SALT . $form_data['password']);
      $statement = $pdo->prepare(
          "INSERT INTO `users` (`name`, `email`, `password`)
          VALUES (:name, :email, :password)"
      );

      $statement->execute(array(
        ':name' => $form_data['name'],
        ':email' => $form_data['email'],
        ':password' => $user_pass
      ));
      $statement = null;
      return json_encode('Signed up succesfully.');
    }

    public static function login_user($pdo, $form_data) {
      $login_pass = hash('md5', self::SALT . $form_data['password']);

      $statement = $pdo->prepare("SELECT * FROM `users` WHERE `password` = :password");
      $statement->execute(array(
        ':password' => $login_pass
      ));
      $user = $statement->fetch(PDO::FETCH_ASSOC);
      $statement = null;

      if(empty($user) || $user['password'] != $login_pass || $user['email'] != $form_data['email']) {
        echo('Your credentials do not match.');
        return false;
      }

      $_SESSION['user_id'] = $user['id'];

      $user_data = json_encode(
        [
          'user_id' => $user['id'],
          'name' => $user['name'],
          'email' => '',
          'password' => '',
          'confirm_password' => '',
          'success' => '',
          'error' => '',
          'isLoggedIn' => true
        ]
      );
      return $user_data;
    }

    public static function weather_search($owm_key, $form_data) {
      $params = http_build_query([
        'q' => $form_data['city'],
        'units' => 'imperial',
        'appid' => $owm_key
      ]);

      $owm_data = json_decode(file_get_contents(self::OWM_API . $params), true);

      $sunrise = new DateTime('@'.$owm_data['city']['sunrise']);
      $sunset = new DateTime('@'.$owm_data['city']['sunset']);
      $sunrise->setTimeZone(new DateTimeZone($owm_data['city']['timezone']/60/60));
      $sunset->setTimeZone(new DateTimeZone($owm_data['city']['timezone']/60/60));
      $weather_data = [
        'city' => [
          'name' => $owm_data['city']['name'],
          'country' => $owm_data['city']['country'],
          'population' => $owm_data['city']['population'],
          'sunrise' => $sunrise->format('Y-m-d H:i:s'),
          'sunset' => $sunset->format('Y-m-d H:i:s'),
        ]
      ];

      foreach ($owm_data['list'] as $data) {
        $timestamp = new DateTime('@'.$data['dt']);
        $timestamp->setTimeZone(new DateTimeZone($owm_data['city']['timezone']/60/60));
        $weather_data['weather'][] = [
          'description' => $data['weather'][0]['description'],
          'timestamp' => $timestamp->format('Y-m-d H:i:s'),
          'temperature' => $data['main']['temp'],
          'humidity' => $data['main']['humidity'] . '%',
          'wind' => $data['wind']['speed'] . 'mph',
          'clouds' => $data['clouds']['all'] . '%',
          'icon' => $data['weather'][0]['icon']
        ];
      }
      return json_encode($weather_data);
    }
  }
