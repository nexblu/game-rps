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
