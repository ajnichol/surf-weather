<?php

  class Utils {
    const SALT = 'XyZzy12*_';
    const OWM_API = 'http://api.openweathermap.org/data/2.5/forecast?';
    const MSW_API = 'http://magicseaweed.com/api/';

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

    public static function validate_save($form_data) {
      if (strlen($form_data['user_id']) < 1) {
        return 'Invalid user_id passed in';
      }

      if (empty($form_data['city'])) {
        return 'Invalid city data passed in';
      }
      return false;
    }

    public static function validate_collect_weather($user_id) {
      if (!is_numeric($user_id)) {
        return 'Invalid user_id passed in';
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

      $owm_data = json_decode(@file_get_contents(self::OWM_API . $params), true);
      if (empty($owm_data)) {
        return 'City not found';
      }

      $population = 'Population not provided';
      if (!empty($owm_data['city']['population'])) {
        $population = $owm_data['city']['population'];
      }

      $timezone = strpos(strval($owm_data['city']['timezone']), '-') !== false ? $owm_data['city']['timezone']/60/60 : '+' . $owm_data['city']['timezone']/60/60;
      $sunrise = new DateTime('@'.$owm_data['city']['sunrise']);
      $sunset = new DateTime('@'.$owm_data['city']['sunset']);
      $sunrise->setTimeZone(new DateTimeZone($timezone));
      $sunset->setTimeZone(new DateTimeZone($timezone));
      $weather_data = [
        'city' => [
          'id' => $owm_data['city']['id'],
          'name' => $owm_data['city']['name'],
          'country' => $owm_data['city']['country'],
          'population' => $population,
          'sunrise' => $sunrise->format('Y-m-d H:i:s'),
          'sunset' => $sunset->format('Y-m-d H:i:s'),
        ]
      ];

      foreach ($owm_data['list'] as $data) {
        $timestamp = new DateTime('@'.$data['dt']);
        $timestamp->setTimeZone(new DateTimeZone($timezone));
        $weather_data['weather'][] = [
          'description' => $data['weather'][0]['description'],
          'timestamp' => $timestamp->format('Y-m-d H:i:s'),
          'temperature' => $data['main']['temp'] . 'F',
          'humidity' => $data['main']['humidity'] . '%',
          'wind' => $data['wind']['speed'] . 'mph',
          'clouds' => $data['clouds']['all'] . '%',
          'icon' => $data['weather'][0]['icon']
        ];
      }
      return json_encode($weather_data);
    }

    public static function save_weather($pdo, $form_data) {
      $statement = $pdo->prepare(
        "INSERT INTO `weather` (`user_id`, `city`, `remote_id`)
        VALUES (:user_id, :city, :remote_id)
        ON DUPLICATE KEY UPDATE `created_at` = CURRENT_TIMESTAMP()"
      );
      $statement->execute(array(
        ':user_id' => $form_data['user_id'],
        ':city' => $form_data['city']['name'],
        ':remote_id' => $form_data['city']['id']
      ));

      if ($statement->rowCount() < 1) {
        http_response_code(403);
        return 'There was an issue saving your request';
      }

      http_response_code(200);
      return json_encode(['success' => 'Saved successfully']);
    }

    public static function collect_weather($pdo, $user_id) {
      $statement = $pdo->prepare(
        "SELECT *
        FROM `weather`
        WHERE `user_id` = :user_id"
      );
      $statement->execute(array(
        ':user_id' => $user_id
      ));
      $users_weather = $statement->fetchAll(PDO::FETCH_ASSOC);
      if (empty($users_weather)) {
        http_response_code(403);
        return 'There was an issue retrieving your saved weather';
      }

      return json_encode($users_weather);
    }

    public static function delete_weather($pdo, $weather_id) {
      $statement = $pdo->prepare("DELETE FROM `weather` WHERE `id` = :id");
      $statement->execute(array(
        ':id' => $weather_id
      ));

      if ($statement->rowCount() < 1) {
        http_response_code(403);
        return 'There was an error deleting your weather';
      }

      http_response_code(200);
      return json_encode(['success' => 'Deleted successfully']);
    }

    public static function collect_surf($pdo) {
      $statement = $pdo->prepare(
        "SELECT *
        FROM `surf`"
      );
      $statement->execute();
      $surf_spots = $statement->fetchAll(PDO::FETCH_ASSOC);

      if (empty($surf_spots)) {
        http_response_code(403);
        return 'There are currently no surf spots';
      }

      http_response_code(200);
      return json_encode($surf_spots);
    }

    public static function search_surf($spot_id, $msw_key) {
      $forecast = [];
      $params = http_build_query([
        'spot_id' => $spot_id,
        'units' => 'us'
      ]);

      $msw_data = json_decode(@file_get_contents(self::MSW_API . $msw_key . '/forecast/?' . $params), true);

      foreach ($msw_data as $data) {
        $date = new DateTime();
        $date->setTimestamp($data['localTimestamp']);
        $local_time = $date->format('Y-m-d H:i:s');
        $data['localTimestamp'] = $local_time;
        $forecast['surf_forecast'][] = $data;
      }

      return json_encode($forecast);
    }
  }
