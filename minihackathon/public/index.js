window.onload = () => {
    // find element
    
    const input1 = document.getElementById('player1');
    const input2 = document.getElementById('player2');
    const input3 = document.getElementById('player3');
    const input4 = document.getElementById('player4');
    const button = document.getElementById('button');
    // console.log(button);
    
    button.addEventListener('click', ()=>{
        // console.log(input1.value);
        // console.log(input2.value);
        // console.log(input3.value);
        // console.log(input4.value);
        $.ajax({
            url: '/',
            type: 'post',
            data: {name1: input1.value, name2: input2.value, name3: input3.value, name4: input4.value},
            success: (data) => {
                 console.log(data.id1);
                 if(data.id1!=null){
                    window.location.href = `/games/${data.id1}`;
                }else{
                    window.alert('Faled tocreatequestion')
                }
            },
            error: (error) => {
                console.log(error);
            },
        });
    });
};