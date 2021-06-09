export default function getScoreBreakdown(scoresObject) {
  let scoreData = []
  for (var i = 1; i <= Object.keys(scoresObject).length; i++) {
    const numberOfVotes = scoresObject[i].votes
    scoreData.push({Score: i, Votes: numberOfVotes})
  }
  return scoreData
}