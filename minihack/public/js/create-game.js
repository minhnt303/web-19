window.onload = () => {
  const form = document.getElementById('create-game-form');
  form.addEventListener('submit', (e) => {
    event.preventDefault();

    // get players name
    const players = [
      form.player1.value,
      form.player2.value,
      form.player3.value,
      form.player4.value,
    ];

    // send ajax
    $.ajax({
      type: 'post',
      url: '/api/games',
      data: {
        players: JSON.stringify(players),
      },
      success: (data) => {
        window.location.href = `/games/${data._id}`;
      },
      error: (error) => {
        console.log(error);
      }
    });
  });
}