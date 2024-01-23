import axios from 'axios'

// const url = 'http://127.0.0.1:8000/api/v1/k4/rps/rps_game';

// const data = {
//     choice: 'rock'
// };

// const headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
// };

// axios.post(url, data, { headers })
//     .then(response => {
//         console.log('Response:', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error.response.data);
//     });

// URL endpoint
const url = 'http://localhost:8000/api/v1/k4/rps/rps_image';

// Header yang dibutuhkan
const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
};

// Data yang akan dikirim
const data = {
    'choice': 'rock',
};

// Melakukan permintaan POST dengan Axios
axios.post(url, data, { headers })
    .then(response => {
        // Mengecek apakah permintaan berhasil (status code 200)
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

