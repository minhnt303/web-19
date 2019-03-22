// window.onload = () => {
//     const addbutton = document.getElementById("add-round");
//     let count = 0;
//     addbutton.addEventListener('click', (e) => {
//         e.preventDefault();
//         count = count + 1;
//         // console.log(count)
//         $.ajax({
//             url: '/games',
//             type: 'POST',
//             data:{round1: count, round2: count, round3: count, round4:count},
//             success: (data) => {
//                 console.log(data)
//             },
//             error: (error) => { }
//         })
//     })
// }
$(document).ready(() => {
    const pathname = window.location.pathname;
    const gameId = pathname.split('/')[pathname.split('/').length - 1];
    console.log(gameId)
    $.ajax({
        url: `/get-id-game?gameId=${gameId}`,
        type: 'GET',
        success: (data) => {
            console.log(1)
            console.log(data.player1.name1)
            document.getElementById('player-1').innerText = data.player1.name1;
            document.getElementById('player-2').innerText = data.player2.name2;
            document.getElementById('player-3').innerText = data.player3.name3;
            document.getElementById('player-4').innerText = data.player4.name4;
        },
        error: (error) => {
            console.log(error);
        }
    });
});