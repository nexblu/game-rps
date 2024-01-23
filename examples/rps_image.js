import axios from 'axios'

const url = 'http://localhost:8000/api/v1/k4/rps/rps_image';


const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
};


const data = {
    'choice': 'rock',
};


axios.post(url, data, { headers })
    .then(response => {
        if (response.status === 200) {
            console.log('Permintaan berhasil!');
            console.log('Response JSON:', response.data);
        } else {
            console.log('Gagal membuat permintaan. Status code:', response.status);
            console.log('Response data:', response.data);
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

