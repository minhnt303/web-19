const calculateSumOfScore = (scores) => {
    const sumOfScores = [0, 0, 0, 0];
    for (let row = 0; row < scores.length; row += 1) {
      for (let col = 0; col < scores[row].length; col += 1) {
        sumOfScores[col] += Number(scores[row][col]);
      }
    }
  
    return sumOfScores;
  }

export default calculateSumOfScore;