<?php
  // require db connection
  require_once '../db_connection.php';
  // and env vars
  require '../../../vendor/autoload.php';
  $dotenv = Dotenv\Dotenv::createImmutable('../../../');
  $dotenv->load();

  const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=san+diego&';
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  if (strlen($form_data['city']) < 1) {
    http_response_code(403);
    echo('All fields are required.');
    // return;
  }

  $params = http_build_query([
    // 'q' => $form_data['city'],
    'units' => 'imperial',
    'appid' => $_ENV['OWM_KEY']
  ]);

  $owm_data = json_decode(file_get_contents(URL . $params), true);
  // create data structure to return to frontend that can map to your
  // weather model
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
    $weather_data['weather'][] = [
      'description' => $data['weather'][0]['description'],
      'temperature' => $data['main']['temp'],
      'humidity' => $data['main']['humidity'] . '%',
      'wind' => $data['wind']['speed'] . 'mph',
      'clouds' => $data['clouds']['all'] . '%',
      'timestamp' => $data['dt_txt']
    ];
  }
  var_dump($weather_data);
