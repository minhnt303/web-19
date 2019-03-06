// ajax
$(document).ready(() => {
    let questionId;
    $.ajax({
        url: '/question-random',
        type: 'GET',
        success: (data) => {
            if (data) {  
                document.getElementById('yes-no-button').innerText = data.content;
                questionId = data.id;
            } else {
                document.getElementById('yes-no-button').innerText = 'question not found';
            }
        },
        error: (error) => {
            console.log(error); 
        },
    });

    
})