const calculateSumOfScore = (scores) => {
  const sumOfScores = [0, 0, 0, 0];
  for (let row = 0; row < scores.length; row += 1) {
    for (let col = 0; col < scores[row].length; col += 1) {
      sumOfScores[col] += Number(scores[row][col]);
    }
  }

  return sumOfScores;
}

window.onload = () => {
  const gameId = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];

  // call ajax
  $.ajax({
    type: 'get',
    url: `/api/games/${gameId}`,
    success: (data) => {
      $('#thead').append(`
        <tr>
          <td></td>
          ${data.players.map((player) => {
            return `
              <td>${player}</td>
            `;
          })}
        </tr>
      `);
      
      const sumOfScores = calculateSumOfScore(data.scores);
      const totalScore = sumOfScores.reduce((item, currentValue) => Number(item) + Number(currentValue), 0);
      $('#thead').append(`
          <tr>
            <td>Sum of Score (${totalScore})</td>
            ${sumOfScores.map((sum) => {
              return `
                <td>${sum}</td>
              `;
            })}
          </tr>
      `);

      data.scores.forEach((row, index) => {
        $('#tbody').append(`
          <tr>
            <td>Round ${index + 1}</td>
            <td><input value='${row[0]}' class='form-control score' id='${index}-0' type='number' /></td>
            <td><input value='${row[1]}' class='form-control score' id='${index}-1' type='number' /></td>
            <td><input value='${row[2]}' class='form-control score' id='${index}-2' type='number' /></td>
            <td><input value='${row[3]}' class='form-control score' id='${index}-3' type='number' /></td>
          </tr>
        `);
      });

      // add round
      const scores = data.scores;
      document.getElementById('add-round').addEventListener('click', () => {
        // add row
        $('#tbody').append(`
          <tr>
            <td>Round ${data.scores.length + 1}</td>
            <td><input class='form-control score' id='${data.scores.length}-0' type='number' /></td>
            <td><input class='form-control score' id='${data.scores.length}-1' type='number' /></td>
            <td><input class='form-control score' id='${data.scores.length}-2' type='number' /></td>
            <td><input class='form-control score' id='${data.scores.length}-3' type='number' /></td>
          </tr>
        `);
        scores.push([0, 0, 0, 0]);

        // update scores
        const inputScores = document.getElementsByClassName('score');
        Array.from(inputScores).forEach((input) => {
          input.addEventListener('input', () => {
            console.log('qweqweqwe', scores);
            const inputId = input.id;
            const row = inputId.split('-')[0];
            const col = inputId.split('-')[1];

            $.ajax({
              type: 'put',
              url: `/api/games/${data._id}`,
              data: {
                type: 'update_scores',
                value: input.value,
                row: row,
                col: col,
              },
            });

            scores[row][col] = input.value;
            const newSumOfScores = calculateSumOfScore(scores);
            const newTotalScore = newSumOfScores.reduce((item, currentValue) => Number(item) + Number(currentValue), 0);
            $('#thead').children().last().replaceWith(`
              <tr>
                <td>Sum of Score (${newTotalScore})</td>
                ${newSumOfScores.map((sum) => {
                  return `
                    <td>${sum}</td>
                  `;
                })}
              </tr>
            `);
          });
        });

        // update game scores
        $.ajax({
          type: 'put',
          url: `/api/games/${data._id}`,
          data: {
            type: 'add_round',
          },
        });
      });

      // update scores
      const inputScores = document.getElementsByClassName('score');
      Array.from(inputScores).forEach((input) => {
        input.addEventListener('input', () => {
          const inputId = input.id;
          const row = inputId.split('-')[0];
          const col = inputId.split('-')[1];

          $.ajax({
            type: 'put',
            url: `/api/games/${data._id}`,
            data: {
              type: 'update_scores',
              value: input.value,
              row: row,
              col: col,
            },
          });

          scores[row][col] = input.value;
          const newSumOfScores = calculateSumOfScore(scores);
          const newTotalScore = newSumOfScores.reduce((item, currentValue) => Number(item) + Number(currentValue), 0);
          $('#thead').children().last().replaceWith(`
            <tr>
              <td>Sum of Score (${newTotalScore})</td>
              ${newSumOfScores.map((sum) => {
                return `
                  <td>${sum}</td>
                `;
              })}
            </tr>
          `);
        });
      });
    },
    error: (error) => {
      console.log(error);
    }
  });
}