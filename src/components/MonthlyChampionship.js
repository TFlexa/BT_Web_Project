import React from 'react';
import styled from 'styled-components';
import PlayerTable from './PlayerTable';
import Round from './Round';

const ChampionshipContainer = styled.div`
  margin: 2rem 0;
`;

const MonthlyChampionship = ({ players }) => {
  return (
    <ChampionshipContainer>
      <h2>Monthly Championships</h2>
      <PlayerTable players={players} />
      {[...Array(5)].map((_, roundIndex) => (
        <Round key={roundIndex} roundNumber={roundIndex + 1} players={players} />
      ))}
    </ChampionshipContainer>
  );
};

export default MonthlyChampionship;
