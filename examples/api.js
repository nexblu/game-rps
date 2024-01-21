import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/v1/k4/rps/rps_game';

const data = {
    choice: 'rock'
};

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

axios.post(url, data, { headers })
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.response.data);
    });
