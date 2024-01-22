import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';
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
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>NPM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>ANDANA FARRAS PRAMUDITA</td>
                                        <td>50423159</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>MUHAMMAD RAFI FADILLAH</td>
                                        <td>50423976</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>NI MADE MAS VIKA AMANDA</td>
                                        <td>51423099</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>SAMUEL MARTOGI SIHITE</td>
                                        <td>51423357</td>
                                    </tr>
                                </tbody>
                            </Table>
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
