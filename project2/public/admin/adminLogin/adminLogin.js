window.onload = () => {
    document.getElementById('register-button').addEventListener('click', (e) => {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        
        if(email == 'admin' && password == 'admin') {
            localStorage.setItem('adminid', email);
            window.location.href = `http://localhost:3000/admin`;
        } else {
            document.getElementById('error').innerHTML= `<div class="alert alert-danger"><strong>Error!</strong>Admin does not exist</div>`
            $("#error").fadeTo(2000, 500).slideUp(300, function(){
                $("#error").slideUp(500);
            });
        }
    });
}