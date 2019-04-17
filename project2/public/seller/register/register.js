window.onload = () => {
    // $(document).ready(() => {
    $.ajax({
        url: '/api/seller',
        type: 'GET',
        success: (data) => {
            console.log(data)
            console.log("register");
            document.getElementById('register-button').addEventListener('click', (e) => {
                let sellername = document.getElementById("sellername").value;
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
                let repassword = document.getElementById("re-password").value;
                let valid = true;
                console.log(email, password, sellername, repassword);

                for (let i = 0; i < data.length; i++) {
                    if (data[i].email == email) {
                        console.log("the email has been used")
                        document.getElementById('alert').innerHTML = ` <div  class="alert alert-danger" ><strong>Error!</strong> This email has been used</div> `
                        $("#alert").fadeTo(2000, 500).slideUp(500, function () {
                            $("#alert").slideUp(500);
                        });
                        valid = false;
                        break;
                    }
                    else if (email == '' || sellername == '' || password == '' || repassword == '') {
                        document.getElementById('alert').innerHTML = ` <div  class="alert alert-danger" ><strong>Error!</strong> All feilt must be required</div> `
                        $("#alert").fadeTo(2000, 500).slideUp(500, function () {
                            $("#alert").slideUp(500);
                        });
                        valid = false;
                    }
                    else if (password != repassword) {
                        document.getElementById('alert').innerHTML = ` <div  class="alert alert-danger" ><strong>Error!</strong> Re-type your re-password</div> `
                        $("#alert").fadeTo(2000, 500).slideUp(500, function () {
                            $("#alert").slideUp(500);
                        });
                        valid = false;
                    }
                }
                if (valid == false) {
                    console.log('Register false')
                } else {
                    $.ajax({
                        url: '/sellerregister',
                        type: 'POST',
                        data: { seller: sellername, email: email, password: password },
                        success: (data) => {
                            console.log("Register success")
                        },
                        error: (error) => { console.log(error) }
                    })
                    localStorage.setItem('seller', email)
                    window.location.href = `http://localhost:3000/mainpage`;
                    console.log(data)
                }
            })
        },
        error: (error) => { console.log(error) }
    })






}