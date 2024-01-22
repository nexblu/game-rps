import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import GameRPS from './components/GameRPS';
import '../static/css/main.css'

const App = () => {
    return (
        <>
            <section className="jumbotron text-light bg-black">
                <br /><br />
                <Container className='border rounded bg-dark'>
                    <br /><br />
                    <div className="row text-center fw-bold title">
                        <div className="col">
                            <h3>RPS Game</h3>
                        </div>
                    </div>
                    <br />
                    <GameRPS></GameRPS>
                    <br /><br />
                    <div className="row text-center">
                        <div className="col">
                            <h3>Kelompok 4: </h3><br />
                            <p>ANDANA FARRAS PRAMUDITA (50423159)</p><br />
                            <p>MUHAMMAD RAFI FADILLAH (50423976)</p><br />
                            <p>NI MADE MAS VIKA AMANDA (51423099)</p><br />
                            <p>SAMUEL MARTOGI SIHITE (51423357)</p><br />
                        </div>
                    </div>
                </Container>
                <br />
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
