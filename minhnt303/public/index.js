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

    const buttonArray = document.getElementsByTagName("button");
    for (let i = 0 ; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", (event) => { 
            $.ajax({ 
                url :`/vote/?questionId=${questionId}&value=${buttonArray[i].value}`,
                type :"post", 
                success : (data) => {
                    console.log('ok!');     
                } 
            });
        });
    }
})