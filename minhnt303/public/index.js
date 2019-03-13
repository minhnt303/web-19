// ajax
$(document).ready(() => {
    let questionId;
    $.ajax({
        url: '/random-question',
        type: 'GET',
        success: (data) => {
            if (data._id != null) {
                document.getElementById('question-content').innerText = data.content;
                document.getElementById('vote-yes').addEventListener('click', () => {
                    $.ajax({
                        url: `vote/${data._id}/yes`,
                        type: 'GET',
                        success: (_result) => {
                            window.location.href = `/result/${data._id}`;
                        },
                        error: ''
                    })
                })
                questionId = data.id;

                document.getElementById('vote-no').addEventListener('click', () => {
                    $.ajax({
                        url: `vote/${data._id}/no`,
                        type: 'GET',
                        success: (data) => {
                            window.location.href = `/result/${data._id}`;
                        },
                        error: ''
                    })
                })

                document.getElementById('question-result').addEventListener('click',()=>{
                    window.location.href = `/result/${data._id}`;
                })
                document.getElementById('other-question').addEventListener('click',()=>{
                    window.location.href = `/`;
                })
            } else {
                document.getElementById('question-content').innerText = 'question not found';
            }
        },
        error: (error) => {
            console.log(error);
        },
    });


})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }