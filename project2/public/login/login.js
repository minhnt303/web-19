window.onload = () => {
    // $(document).ready(() => {
    $.ajax({
        url: '/api/user',
        type: 'GET',
        success: (data) => {
            console.log(data)
            console.log("register");
            document.getElementById('register-button').addEventListener('click', (e) => {
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
                console.log(email, password);

                if (email == '' || password == '') {
                    console.log('Login false')
                    document.getElementById('alert').innerHTML = ` <div  class="alert alert-danger" ><strong>Error!</strong> All feilt must be required</div> `
                    $("#alert").fadeTo(2000, 500).slideUp(500, function () {
                        $("#alert").slideUp(500);
                    });
                } else {
                    for (let i = 0; i < data.length; i++) {
                        if (email == data[i].email && password == data[i].password) {
                            console.log("login success")
                            localStorage.setItem('user', email);
                            window.location.href = `http://localhost:3000`;
                            break;
                        }
                        else {
                            console.log("login false!");
                            document.getElementById('alert').innerHTML = ` <div  class="alert alert-danger" ><strong>Error!</strong> Wrong email or password!</div> `
                            $("#alert").fadeTo(2000, 500).slideUp(500, function () {
                                $("#alert").slideUp(500);
                            });
                            localStorage.removeItem('user', email);
                            break;
                        }
                    }
                }
            })
        },
        error: (error) => { console.log(error) }
    })






}