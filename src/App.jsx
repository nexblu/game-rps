import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Button } from 'react-bootstrap';
import Rock from '../static/image/rock.png';
import Paper from '../static/image/paper.png';
import Scissors from '../static/image/scissors.png';
import '../static/css/main.css'

const App = () => {
    return (
        <>
            <section className="jumbotron text-light">
                <Container>
                    <br /><br />
                    <div className="row text-center fw-bold title">
                        <div className="col">
                            <h3>RPS Game</h3>
                        </div>
                    </div>
                    <br />
                    <div className="row text-center fw-bold">
                        <div className="col result">
                            <p>.....</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row text-center">
                        <div className="col-md rock mb-3 mt-3">
                            <Image src={Rock} className='mb-3'></Image>
                            <br />
                            <Button variant="primary">Rock</Button>
                        </div>
                        <div className="col-md paper mb-3 mt-3">
                            <Image src={Paper} className='mb-3'></Image>
                            <br />
                            <Button variant="primary">Paper</Button>
                        </div>
                        <div className="col-md scissors mb-3 mt-3">
                            <Image src={Scissors} className='mb-3'></Image>
                            <br />
                            <Button variant="primary">Scissors</Button>
                        </div>
                    </div>
                </Container>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin></script>
            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossOrigin></script>
            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin></script>
        </>
    )
}

export default App
