import React from 'react';
import styled from 'styled-components';

// Estilos para a tabela usando styled-components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
  text-align: left;
`;

const StyledTh = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const ActionButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:last-child {
    background-color: #f44336;

    &:hover {
      background-color: #e53935;
    }
  }
`;

const NoPlayersMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #888;
`;

const PlayerTable = ({ players = [], onEditPlayer, onDeletePlayer }) => {
  if (players.length === 0) {
    return <NoPlayersMessage>Nenhum jogador cadastrado.</NoPlayersMessage>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>Nome</StyledTh>
          <StyledTh>Partidas Jogadas</StyledTh>
          <StyledTh>Vitórias</StyledTh>
          <StyledTh>Derrotas</StyledTh>
          <StyledTh>Saldo de Jogos</StyledTh>
          <StyledTh>Games Vencidos</StyledTh>
          <StyledTh>Games Perdidos</StyledTh>
          <StyledTh>Saldo de Games</StyledTh>
          {onEditPlayer && onDeletePlayer && <StyledTh>Ações</StyledTh>}
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <StyledTr key={player.id}>
            <StyledTd>{player.name}</StyledTd>
            <StyledTd>{player.played}</StyledTd>
            <StyledTd>{player.wins}</StyledTd>
            <StyledTd>{player.losses}</StyledTd>
            <StyledTd>{player.gameBalance}</StyledTd>
            <StyledTd>{player.gamesWon}</StyledTd>
            <StyledTd>{player.gamesLost}</StyledTd>
            <StyledTd>{player.gamesBalance}</StyledTd>
            {onEditPlayer && onDeletePlayer && (
              <StyledTd>
                <ActionButton onClick={() => onEditPlayer(player)}>Editar</ActionButton>
                <ActionButton onClick={() => onDeletePlayer(player.id)}>Excluir</ActionButton>
              </StyledTd>
            )}
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default PlayerTable;
