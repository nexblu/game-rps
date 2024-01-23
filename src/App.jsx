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
            <section className={`jumbotron text-light ${isDarkMode ? 'bg-dark-v1' : 'bg-light-v1'}`}>
                <br /><br />
                <DarkMode isChecked={isDarkMode} handleChange={toggleDarkMode} />
                <Container className={`rounded ${isDarkMode ? 'bg-dark-v2' : 'bg-light-container'} shadow-lg`}>
                    <br /><br />
                    <div className="row text-center fw-bold title">
                        <div className="col">
                            <h4 className={`fw-bold ${isDarkMode ? 'text-light' : 'text-dark'}`}>RPS Game</h4>
                        </div>
                    </div>
                    <br />
                    <GameRPS isChecked={isDarkMode}></GameRPS>
                    <br />
                    <hr className={`${isDarkMode ? 'garis-dark' : 'garis-light'}`}/>
                    <br />
                    <div className="row text-center">
                        <div className="col">
                            <h4 className={`fw-bold ${isDarkMode ? 'text-light' : 'text-dark'}`}>Kelompok 4: </h4><br />
                            <Table striped bordered hover size="sm" className={`${isDarkMode ? 'table-light-v1' : 'table-dark-v1'}`}>
                                <thead>
                                    <tr>
                                        <th className={`${isDarkMode ? '' : 'text-light'}`}>#</th>
                                        <th className={`${isDarkMode ? '' : 'text-light'}`}>Name</th>
                                        <th className={`${isDarkMode ? '' : 'text-light'}`}>NPM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>1</td>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>ANDANA FARRAS PRAMUDITA</td>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>50423159</td>
                                    </tr>
                                    <tr>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>2</td>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>MUHAMMAD RAFI FADILLAH</td>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>50423976</td>
                                    </tr>
                                    <tr>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>3</td>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>NI MADE MAS VIKA AMANDA</td>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>51423099</td>
                                    </tr>
                                    <tr>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>4</td>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>SAMUEL MARTOGI SIHITE</td>
                                        <td className={`${isDarkMode ? '' : 'text-light'}`}>51423357</td>
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
