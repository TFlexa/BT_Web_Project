import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Championships from './Pages/Championship';
import Header from './components/Cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Jogador 1', played: 0, wins: 0, losses: 0, gameBalance: 0, gamesWon: 0, gamesLost: 0, gamesBalance: 0 },
    { id: 2, name: 'Jogador 2', played: 0, wins: 0, losses: 0, gameBalance: 0, gamesWon: 0, gamesLost: 0, gamesBalance: 0 },
    { id: 2, name: 'Jogador 2', played: 0, wins: 0, losses: 0, gameBalance: 0, gamesWon: 0, gamesLost: 0, gamesBalance: 0 },
    { id: 2, name: 'Jogador 2', played: 0, wins: 0, losses: 0, gameBalance: 0, gamesWon: 0, gamesLost: 0, gamesBalance: 0 },
    // Adicione mais jogadores aqui
  ]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home players={players} setPlayers={setPlayers} />} />
        <Route path="/championships" element={<Championships players={players} setPlayers={setPlayers} />} />
      </Routes>
    </Router>
  );
};

export default App;

