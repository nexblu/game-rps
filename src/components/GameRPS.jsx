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
            choice: c
        };

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        axios.post(url, data, { headers })
            .then(response => {
                const result_game = response.data['k4']['status']
                const your_choice = response.data['k4']['your_choice']
                const bot_choice = response.data['k4']['bot_choice']
                console.log('Response:', response.data);
                console.log(result)
                choiceUpdate(
                    <>
                        <div className="row text-center fw-bold">
                            <div className="col result text-lght">
                                {`you ${result_game}, your choice : ${your_choice} and bot choice ${bot_choice}`}
                            </div>
                        </div>
                    </>
                )
            })
            .catch(error => {
                console.error('Error:', error.response.data);
            });
    }
    return (
        <>
            {result}
            <br /><br />
            <div className="row text-center">
                <div className="col-md-4 rock mb-3 mt-3">
                    <Image src={Rock} className='mb-3'></Image>
                    <br />
                    <Button variant="primary" onClick={() => buttonClick("rock")}>Rock</Button>
                </div>
                <div className="col-md-4 paper mb-3 mt-3">
                    <Image src={Paper} className='mb-3'></Image>
                    <br />
                    <Button variant="primary" onClick={() => buttonClick("paper")}>Paper</Button>
                </div>
                <div className="col-md-4 scissors mb-3 mt-3">
                    <Image src={Scissors} className='mb-3'></Image>
                    <br />
                    <Button variant="primary" onClick={() => buttonClick("scissors")}>Scissors</Button>
                </div>
            </div>
        </>
    )
}

export default GameRPS
