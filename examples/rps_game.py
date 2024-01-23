import requests
import json

url = "http://localhost:8000/api/v1/k4/rps/rps_game"

headers = {
    "accept": "application/json",
    "Content-Type": "application/json",
}

data = {
    "choice": "rock",
}

response = requests.post(url, headers=headers, data=json.dumps(data))


if response.status_code == 200:
    print("Permintaan berhasil!")
    print("Response JSON:", response.json())
else:
    print("Gagal membuat permintaan. Status code:", response.status_code)
    print("Response text:", response.text)
