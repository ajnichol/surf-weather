<?php
  // require db connection
  require_once '../db_connection.php';
  // require utils class
  require_once '../classes/utils.php';
  // and env vars
  require '../../../vendor/autoload.php';
  $dotenv = Dotenv\Dotenv::createImmutable('../../../');
  $dotenv->load();

  const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=san+diego&';
  // get form data
  $form_data = json_decode(file_get_contents('php://input'), true);

  $invalid_search = Utils::validate_search($form_data);
  if ($invalid_search) {
    http_response_code(403);
    echo($invalid_search);
    return;
  }

  $params = http_build_query([
    // 'q' => $form_data['city'],
    'units' => 'imperial',
    'appid' => $_ENV['OWM_KEY']
  ]);

  $owm_data = json_decode(file_get_contents(URL . $params), true);

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
      'timestamp' => $timestamp->format('Y-m-d H:i:s'),
      'description' => $data['weather'][0]['description'],
      'temperature' => $data['main']['temp'],
      'humidity' => $data['main']['humidity'] . '%',
      'wind' => $data['wind']['speed'] . 'mph',
      'clouds' => $data['clouds']['all'] . '%'
    ];
  }
  var_dump($weather_data);
