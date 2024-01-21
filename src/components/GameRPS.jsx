import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Button } from 'react-bootstrap';
import Rock from '../../static/image/rock.png';
import Paper from '../../static/image/paper.png';
import Scissors from '../../static/image/scissors.png';
import { useState } from 'react'
import axios from 'axios'

const GameRPS = () => {
    const [result, choiceUpdate] = useState('');

    const buttonClick = (c) => {
        console.log(c)
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
                choiceUpdate(`you ${response.data['k4']['status']}, your choice : ${response.data['k4']['your_choice']} and bot choice ${response.data['k4']['bot_choice']}`)
            })
            .catch(error => {
                console.error('Error:', error.response.data);
            });
    }
    return (
        <>
            <div className="row text-center fw-bold">
                <div className="col result text-lght">
                    <p>{result}</p>
                </div>
            </div>
            <br /><br />
            <div className="row text-center">
                <div className="col-md rock mb-3 mt-3">
                    <Image src={Rock} className='mb-3'></Image>
                    <br />
                    <Button variant="primary" onClick={() => buttonClick("rock")}>Rock</Button>
                </div>
                <div className="col-md paper mb-3 mt-3">
                    <Image src={Paper} className='mb-3'></Image>
                    <br />
                    <Button variant="primary" onClick={() => buttonClick("paper")}>Paper</Button>
                </div>
                <div className="col-md scissors mb-3 mt-3">
                    <Image src={Scissors} className='mb-3'></Image>
                    <br />
                    <Button variant="primary" onClick={() => buttonClick("scissors")}>Scissors</Button>
                </div>
            </div>
        </>
    )
}

export default GameRPS
