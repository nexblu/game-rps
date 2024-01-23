import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';
import GameRPS from './components/GameRPS';
import '../static/css/main.css'
import DarkMode from './components/DarkMode';
import { useState } from 'react';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <section className={`jumbotron text-light ${isDarkMode ? 'bg-black' : 'bg-light'}`}>
                <br /><br />
                <DarkMode isChecked={isDarkMode} handleChange={toggleDarkMode} />
                <Container className={`rounded ${isDarkMode ? 'bg-dark' : 'bg-light-container'} shadow-lg`}>
                    <br /><br />
                    <div className="row text-center fw-bold title">
                        <div className="col">
                            <h4 className={`fw-bold ${isDarkMode ? 'text-light' : 'text-dark'}`}>RPS Game</h4>
                        </div>
                    </div>
                    <br />
                    <GameRPS isChecked={isDarkMode}></GameRPS>
                    <br /><br />
                    <div className="row text-center">
                        <div className="col">
                            <h4 className={`fw-bold ${isDarkMode ? 'text-light' : 'text-dark'}`}>Kelompok 4: </h4><br />
                            <Table striped bordered hover size="sm" className={`${isDarkMode ? 'table-primary' : 'table-dark'}`}>
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
