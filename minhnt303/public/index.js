// ajax
$(document).ready(() => {
    let questionId;
    $.ajax({
        url: '/random-question',
        type: 'GET',
        success: (data) => {
            if (data.id != null) {
                document.getElementById('question-content').innerText = data.content;
                document.getElementById('vote-yes').addEventListener('click', () => {
                    $.ajax({
                        url: `vote/${data.id}/yes`,
                        type: 'GET',
                        success: (_result) => {
                            window.location.href = `/result/${data.id}`;
                        },
                        error: ''
                    })
                })
                questionId = data.id;

                document.getElementById('vote-no').addEventListener('click', () => {
                    $.ajax({
                        url: `vote/${data.id}/no`,
                        type: 'GET',
                        success: (data) => {
                            window.location.href = `/result/${data.id}`;
                        },
                        error: ''
                    })
                })

                document.getElementById('question-result').addEventListener('click',()=>{
                    window.location.href = `/result/${data.id}`;
                })
                document.getElementById('other-question').addEventListener('click',()=>{
                    window.location.href = `/`;
                })
            } else {
                document.getElementById('question-conten').innerText = 'question not found';
            }
        },
        error: (error) => {
            console.log(error);
        },
    });


})