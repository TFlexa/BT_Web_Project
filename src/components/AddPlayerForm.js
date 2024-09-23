import React, { useEffect, useState } from 'react';

const AddPlayerForm = ({ onAddPlayer, player, setEditingPlayer }) => {
  const [formData, setFormData] = useState({
    name: '',
    played: 0,
    wins: 0,
    losses: 0,
    gameBalance: 0,
    gamesWon: 0,
    gamesLost: 0,
    gamesBalance: 0,
  });

  useEffect(() => {
    if (player) {
      setFormData(player);
    } else {
      setFormData({
        name: '',
        played: 0,
        wins: 0,
        losses: 0,
        gameBalance: 0,
        gamesWon: 0,
        gamesLost: 0,
        gamesBalance: 0,
      });
    }
  }, [player]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlayer(formData);
    if (player) {
      setEditingPlayer(null); // Limpar jogador em edição
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Nome" 
        required 
      />
      <input 
        type="number" 
        name="played" 
        value={formData.played} 
        onChange={handleChange} 
        placeholder="Partidas Jogadas" 
      />
      <input 
        type="number" 
        name="wins" 
        value={formData.wins} 
        onChange={handleChange} 
        placeholder="Vitórias" 
      />
      <input 
        type="number" 
        name="losses" 
        value={formData.losses} 
        onChange={handleChange} 
        placeholder="Derrotas" 
      />
      <input 
        type="number" 
        name="gameBalance" 
        value={formData.gameBalance} 
        onChange={handleChange} 
        placeholder="Saldo de Jogos" 
      />
      <input 
        type="number" 
        name="gamesWon" 
        value={formData.gamesWon} 
        onChange={handleChange} 
        placeholder="Games Vencidos" 
      />
      <input 
        type="number" 
        name="gamesLost" 
        value={formData.gamesLost} 
        onChange={handleChange} 
        placeholder="Games Perdidos" 
      />
      <input 
        type="number" 
        name="gamesBalance" 
        value={formData.gamesBalance} 
        onChange={handleChange} 
        placeholder="Saldo de Games" 
      />
      <button type="submit">{player ? 'Atualizar Jogador' : 'Adicionar Jogador'}</button>
    </form>
  );
};

export default AddPlayerForm;
