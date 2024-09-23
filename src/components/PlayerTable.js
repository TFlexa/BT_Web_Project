import React from 'react';

const PlayerTable = ({ players = [], onEditPlayer, onDeletePlayer }) => {
  if (players.length === 0) {
    return <p>Nenhum jogador cadastrado.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Partidas Jogadas</th>
          <th>Vitórias</th>
          <th>Derrotas</th>
          <th>Saldo de Jogos</th>
          <th>Games Vencidos</th>
          <th>Games Perdidos</th>
          <th>Saldo de Games</th>
          {onEditPlayer && onDeletePlayer && <th>Ações</th>}
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.played}</td>
            <td>{player.wins}</td>
            <td>{player.losses}</td>
            <td>{player.gameBalance}</td>
            <td>{player.gamesWon}</td>
            <td>{player.gamesLost}</td>
            <td>{player.gamesBalance}</td>
            {onEditPlayer && onDeletePlayer && (
              <td>
                <button onClick={() => onEditPlayer(player)}>Editar</button>
                <button onClick={() => onDeletePlayer(player.id)}>Excluir</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
