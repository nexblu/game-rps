import requests
import json


def logic_game(choice):
    url = "http://localhost:8000/api/v1/k4/rps/rps_game"

    headers = {
        "accept": "application/json",
        "Content-Type": "application/json",
    }

    data = {
        "choice": choice,
    }

    response = requests.post(url, headers=headers, data=json.dumps(data))
    resp = response.json()

    if response.status_code == 200:
        print(
            f"""Bot Choice : {resp['k4']['your_choice']}
Status Choice : {resp['k4']['bot_choice']}
Status : You {resp['k4']['status']}, Your Choice : {resp['k4']['your_choice']} And {resp['k4']['bot_choice']}"""
        )
    else:
        print(f"""{resp['k4']['status']}""")


input_user = (input("masukkan antara rock, paper, scissors: ")).lower()
logic_game(input_user)
