<?php

$url = 'http://localhost:8000/api/v1/k4/rps/rps_game';

$headers = [
    'accept: application/json',
    'Content-Type: application/json',
];

$data = [
    'choice' => 'rock',
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);


$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if ($httpCode == 200) {
    echo 'Permintaan berhasil!' . PHP_EOL;
    echo 'Response JSON: ' . $response . PHP_EOL;
} else {
    echo 'Gagal membuat permintaan. Status code: ' . $httpCode . PHP_EOL;
    echo 'Response text: ' . $response . PHP_EOL;
}

curl_close($ch);

?>
