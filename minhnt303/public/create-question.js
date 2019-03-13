window.onload= ()=>{
    //find element
    const textArea = document.getElementById('content');
    //.addEventListener()
    textArea.addEventListener('input',(event)=>{
        const contentLength = textArea.value.length;
        console.log(contentLength);

        //findelement
        const remainCharacter = document.getElementById('remain-character');
        //change content
        remainCharacter.innerText = `${200 - contentLength}/200 characters left`;
    });

    document.getElementById('create-form').addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log('create-question')

        const form = document.getElementById('create-form');
        const questionContent = form.content.value;
        if(!questionContent){
            document.getElementById('error-massage').innerText = 'Please input question'
        }else{
            $.ajax({
                url:'/create-question',
                type:'POST',
                data:{content: questionContent},
                success:(data)=>{
                    if(data.id!=null){
                        window.location.href = `/result/${data.id}`;
                    }else{
                        window.alert('Faled tocreatequestion')
                    }
                },
                error:(error)=>{}
            })
        }
        console.log(form.content.value)
    })
};
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }