import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Button } from 'react-bootstrap';
import Rock from '../../static/image/rock.png';
import Paper from '../../static/image/paper.png';
import Scissors from '../../static/image/scissors.png';
import { useState } from 'react'
import axios from 'axios'

const GameRPS = (prop) => {
    let { isChecked } = prop;

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
                choiceUpdate(
                    <>
                        <div className="row text-center fw-bold">
                            <div className={`col result`}>
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
            <div className="row">
                <div className={`col ${isChecked ? 'text-light' : 'text-dark'}`}>
                    {result}
                </div>
            </div>
            <br /><br />
            <div className="row text-center game justify-content-center">
                <div className={`col-md-4 rock mb-3 mt-3 border me-3 ms-3 rounded item-rps ${isChecked ? 'bg-light-container' : 'bg-dark-v1'}`}>
                    <br />
                    <Image src={Rock} className='mb-3 image-rock'></Image>
                    <br /><br />
                    <Button variant="primary" className={`${isChecked ? '' : 'btn-light-theme'}`} onClick={() => buttonClick("rock")}>Rock</Button>
                </div>
                <div className={`col-md-4 paper mb-3 mt-3 border me-3 ms-3 rounded item-rps ${isChecked ? 'bg-light-container' : 'bg-dark-v1'}`}>
                    <br />
                    <Image src={Paper} className='mb-3 image-paper'></Image>
                    <br /><br />
                    <Button variant="primary" className={`${isChecked ? '' : 'btn-light-theme'}`} onClick={() => buttonClick("paper")}>Paper</Button>
                </div>
                <div className={`col-md-4 scissors mb-3 mt-3 border me-3 ms-3 rounded item-rps ${isChecked ? 'bg-light-container' : 'bg-dark-v1'}`}>
                    <br />
                    <Image src={Scissors} className='mb-3 image-scissors'></Image>
                    <br /><br />
                    <Button variant="primary" className={`${isChecked ? '' : 'btn-light-theme'}`} onClick={() => buttonClick("scissors")}>Scissors</Button>
                </div>
            </div>
        </>
    )
}

export default GameRPS
