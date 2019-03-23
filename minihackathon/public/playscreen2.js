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
            console.log(data.player1.round1)
            if(data.player1.round1 >= 2){
            document.getElementById('point-1').value = data.player1.point1[0];
            document.getElementById('point-2').value = data.player2.point2[0];
            document.getElementById('point-3').value = data.player3.point3[0];
            document.getElementById('point-4').value = data.player4.point4[0];
            
            }
            document.getElementById('player-1').innerText = data.player1.name1;
            document.getElementById('player-2').innerText = data.player2.name2;
            document.getElementById('player-3').innerText = data.player3.name3;
            document.getElementById('player-4').innerText = data.player4.name4;
            document.getElementById('total-1').innerText = data.player1.total1;
            document.getElementById('total-2').innerText = data.player2.total2;
            document.getElementById('total-3').innerText = data.player3.total3;
            document.getElementById('total-4').innerText = data.player4.total4;
            document.getElementById('sumtotal').innerText = data.player1.total1 + data.player2.total2 + data.player3.total3 + data.player4.total4
        },
        error: (error) => {
            console.log(error);
        }
    });
    document.getElementById('add-round').addEventListener('click', (e) => {
        let player_score = document.getElementsByClassName("form-control");
        let index = player_score.length;
        let a1 = player_score[index-4].value
        let a2 = player_score[index-3].value
        let a3 = player_score[index-2].value
        let a4 = player_score[index-1].value
        console.log(player_score[index-4].value,player_score[index-3].value, player_score[index-2].value, player_score[index-1].value)
        $.ajax({
            url: `/get-score/${gameId}`,
            type: 'POST',
            data: { point1: a1, point2: a2, point3: a3, point4: a4 },
            success: data => {
                console.log(data)
                document.getElementById('total-1').innerText = data.player1.total1;
                document.getElementById('total-2').innerText = data.player2.total2;
                document.getElementById('total-3').innerText = data.player3.total3;
                document.getElementById('total-4').innerText = data.player4.total4;
                document.getElementById('sumtotal').innerText = data.player1.total1 + data.player2.total2 + data.player3.total3 + data.player4.total4;
                $("#score-round").append(`
             <div class="row bg-light">
        <div class="col-sm">Round ${data.player1.round1}</div>
        <div class="col-sm">
          <input
            class="form-control"
            rows="1"
       
            name="score"
          ></input> 
        </div>
        <div class="col-sm">
          <input
            class="form-control"
            rows="1"
    
            name="score"
          ></input>
        </div>
        <div class="col-sm">
          <input
            class="form-control"
            rows="1"

            name="score"
          ></input>
        </div>
        <div class="col-sm">
          <input
            class="form-control"
            rows="1"
            name="score"
          ></input>
        </div>
      </div>
             `)
            }
        })
    })
});