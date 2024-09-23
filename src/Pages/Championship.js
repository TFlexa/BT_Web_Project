import React from 'react';
import MonthlyChampionship from '../components/MonthlyChampionship';

const Championships = ({ players, setPlayers }) => {
  return (
    <div>
      <h1>Campeonatos Mensais</h1>
      <MonthlyChampionship players={players} setPlayers={setPlayers} />
    </div>
  );
};

export default Championships;
