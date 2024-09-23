import React, { useState } from 'react';
import styled from 'styled-components';

const RoundContainer = styled.div`
  margin: 1rem 0;
`;

const Round = ({ roundNumber, players }) => {
  const [matches, setMatches] = useState([]);

  const handleDraw = () => {
    if (players.length < 4) {
      alert("Número insuficiente de jogadores para formar duplas.");
      return;
    }

    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
    const newMatches = [];
    const totalPlayers = shuffledPlayers.length;

    // Formar duplas
    const pairs = [];
    for (let i = 0; i < totalPlayers - 1; i += 2) {
      if (shuffledPlayers[i + 1]) {
        pairs.push([shuffledPlayers[i], shuffledPlayers[i + 1]]);
      }
    }

    // Formar os confrontos entre as duplas
    for (let i = 0; i < pairs.length - 1; i += 2) {
      if (pairs[i + 1]) {
        newMatches.push([pairs[i], pairs[i + 1]]);
      }
    }

    setMatches(newMatches);
  };

  return (
    <RoundContainer>
      <h3>Round {roundNumber}</h3>
      <button onClick={handleDraw}>Sorteio de Duplas</button>
      <ul>
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <li key={index}>
              {match[0][0]?.name || 'N/A'} e {match[0][1]?.name || 'N/A'} vs {match[1][0]?.name || 'N/A'} e {match[1][1]?.name || 'N/A'}
            </li>
          ))
        ) : (
          <li>Nenhum confronto gerado ainda.</li>
        )}
      </ul>
    </RoundContainer>
  );
};

export default Round;
