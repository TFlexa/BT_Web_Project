import React, { useState, useEffect } from 'react';
import PlayerTable from '../components/PlayerTable';
import AddPlayerForm from '../components/AddPlayerForm';

const Home = ({ players, setPlayers }) => {
  const [editingPlayer, setEditingPlayer] = useState(null);

  const addPlayer = (newPlayer) => {
    setPlayers([...players, { ...newPlayer, id: players.length + 1 }]);
  };

  const updatePlayer = (updatedPlayer) => {
    setPlayers(players.map((player) => 
      player.id === updatedPlayer.id ? updatedPlayer : player
    ));
    setEditingPlayer(null);
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  return (
    <div>
      <h1>Bem-vindo ao Campeonato de Beach Tennis</h1>
      <p>Acompanhe o ranking e as estatísticas dos jogadores!</p>

      <AddPlayerForm 
        onAddPlayer={editingPlayer ? updatePlayer : addPlayer} 
        player={editingPlayer} 
        setEditingPlayer={setEditingPlayer}
      />

      <PlayerTable 
        players={players} 
        onEditPlayer={setEditingPlayer} 
        onDeletePlayer={deletePlayer} 
      />
    </div>
  );
};

export default Home;
