import { promises as fs } from 'fs';
const updateMatchResults = (matches, teams) => {
  matches.forEach(match => {
    const { home, away, goalsHome, goalsAway } = match;

    if (home && away) {
      home.played += 1;
      away.played += 1;

      home.goalsFor += goalsHome;
      away.goalsFor += goalsAway;

      home.goalsAgainst += goalsAway;
      away.goalsAgainst += goalsHome;

      home.goalDifference = home.goalsFor - home.goalsAgainst;
      away.goalDifference = away.goalsFor - away.goalsAgainst;

      if (goalsHome > goalsAway) {
        home.won += 1;
        home.points += 3;
        away.lost += 1;
      } else if (goalsHome < goalsAway) {
        away.won += 1;
        away.points += 3;
        home.lost += 1;
      } else {
        home.drawn += 1;
        home.points += 1;
        away.drawn += 1;
        away.points += 1;
      }
    }
  });
};
export const updateData = async (matches, teamsFilePath) => {
    try {
      let teams = JSON.parse(await fs.readFile(teamsFilePath, 'utf-8'));
  
      updateMatchResults(matches, teams);
      await fs.writeFile(teamsFilePath, JSON.stringify(teams, null, 2), 'utf8');
  
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };