$(document).ready(() => {
    const pathname = window.location.pathname;
    const questionId = pathname.split('/')[pathname.split('/').length - 1];
    console.log(questionId)
    $.ajax({
        url: `/get-question-by-id?questionId=${questionId}`,
        type: 'GET',
        success: (data) => {
            console.log(data._id)
            if (data._id) {
                document.getElementById('question-content').innerText = data.content;
                document.getElementById('total-vote').innerText = data.yes + data.no +" vote";
                if (data.yes == 0 & data.no == 0) {
                    const yesPercent = 50;
                    const noPercent = 50;
                    document.getElementById('yes-percent').innerText = `${yesPercent.toFixed(2)}%`;
                    document.getElementById('no-percent').innerText = `${noPercent.toFixed(2)}%`;
                } else {
                    const yesPercent = data.yes / (data.yes + data.no) * 100;
                    const noPercent = 100 - yesPercent;
                    document.getElementById('yes-percent').innerText = `${yesPercent.toFixed(2)}%`;
                    document.getElementById('no-percent').innerText = `${noPercent.toFixed(2)}%`;
                }
            } else {
                document.getElementById('question-content').innerText = 'Question not found';
            }
        },
        error: (error) => {
            console.log(error);
        }
    });
});