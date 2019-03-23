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
            console.log(data)
            document.getElementById('player-1').innerText = data.player1.name1;
            document.getElementById('player-2').innerText = data.player2.name2;
            document.getElementById('player-3').innerText = data.player3.name3;
            document.getElementById('player-4').innerText = data.player4.name4;
            document.getElementById('total-1').innerText = data.player1.total1;
            document.getElementById('total-2').innerText = data.player2.total2;
            document.getElementById('total-3').innerText = data.player3.total3;
            document.getElementById('total-4').innerText = data.player4.total4;
        },
        error: (error) => {
            console.log(error);
        }
    });
    document.getElementById('add-round').addEventListener('click', (e) => {
        e.preventDefault();
        let point1 = document.getElementById("point-1").value;
        let point2 = document.getElementById("point-2").value;
        let point3 = document.getElementById("point-3").value;
        let point4 = document.getElementById("point-4").value;
        console.log(point1, point2, point3, point4)
        $.ajax({
            url: `/get-score/${gameId}`,
            type: 'POST',
            data: {point1: point1, point2: point2, point3: point3, point4: point4},
            success: data => {
                console.log(data,point1)
                document.getElementById('total-1').innerText = data.player1.total1;
                // document.getElementById('total-3').innerText = data.player3.total3;
                // document.getElementById('total-4').innerText = data.player4.total4;
                // document.getElementById('sumtotal').innerText = data.player1.total1 + data.player2.total2 + data.player3.total3 + data.player4.total4
            }
        })
    })
});