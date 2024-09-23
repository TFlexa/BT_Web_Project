import React, { useState } from 'react';
import PlayerTable from '../components/PlayerTable';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header'; // Importe o novo componente

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
      <Header /> {/* Adicione o componente Header aqui */}

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
