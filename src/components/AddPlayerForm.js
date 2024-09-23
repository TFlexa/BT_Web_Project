import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Estilos para a tabela do formulário
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledTh = styled.th`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: left;
`;

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

const StyledButton = styled.button`
  margin-top: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

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
    <>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTh>Nome</StyledTh>
            <StyledTd>
              <StyledInput 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </StyledTd>
          </tr>
          <tr>
            <StyledTh>Partidas Jogadas</StyledTh>
            <StyledTd>
              <StyledInput 
                type="number" 
                name="played" 
                value={formData.played} 
                onChange={handleChange} 
              />
            </StyledTd>
          </tr>
          <tr>
            <StyledTh>Vitórias</StyledTh>
            <StyledTd>
              <StyledInput 
                type="number" 
                name="wins" 
                value={formData.wins} 
                onChange={handleChange} 
              />
            </StyledTd>
          </tr>
          <tr>
            <StyledTh>Derrotas</StyledTh>
            <StyledTd>
              <StyledInput 
                type="number" 
                name="losses" 
                value={formData.losses} 
                onChange={handleChange} 
              />
            </StyledTd>
          </tr>
          <tr>
            <StyledTh>Saldo de Jogos</StyledTh>
            <StyledTd>
              <StyledInput 
                type="number" 
                name="gameBalance" 
                value={formData.gameBalance} 
                onChange={handleChange} 
              />
            </StyledTd>
          </tr>
          <tr>
            <StyledTh>Games Vencidos</StyledTh>
            <StyledTd>
              <StyledInput 
                type="number" 
                name="gamesWon" 
                value={formData.gamesWon} 
                onChange={handleChange} 
              />
            </StyledTd>
          </tr>
          <tr>
            <StyledTh>Games Perdidos</StyledTh>
            <StyledTd>
              <StyledInput 
                type="number" 
                name="gamesLost" 
                value={formData.gamesLost} 
                onChange={handleChange} 
              />
            </StyledTd>
          </tr>
          <tr>
            <StyledTh>Saldo de Games</StyledTh>
            <StyledTd>
              <StyledInput 
                type="number" 
                name="gamesBalance" 
                value={formData.gamesBalance} 
                onChange={handleChange} 
              />
            </StyledTd>
          </tr>
        </tbody>
      </StyledTable>
      <StyledButton type="submit" onClick={handleSubmit}>
        {player ? 'Atualizar Jogador' : 'Adicionar Jogador'}
      </StyledButton>
    </>
  );
};

export default AddPlayerForm;
