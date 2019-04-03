window.onload = () => {
    console.log("Sign in")
    const form = document.getElementById("login-form");
    form.addEventListener("submit", e => {
        event.preventDefault();

        console.log(form.inputEmail.value)

        const loginInfo = {"email": form.inputEmail.value, "password": form.inputPassword.value};   
        console.log(loginInfo)
        $.ajax({
            type: "POST",
            url: "/api/auth/login",
            data: {
                "email": form.inputEmail.value, "password": form.inputPassword.value
            },
            success: data => {
                console.log(data + 'INFO')
              window.alert(data.message);
            },
            error: error => {
              console.log(error);
            }
          });
    })
};