window.onload = () => {
    console.log("Register")
    const form = document.getElementById("register-form");
    form.addEventListener("submit", e => {
        event.preventDefault();

        console.log(form.inputEmail.value)

        const loginInfo = { "email": form.inputEmail.value, "password": form.inputPassword.value };
        console.log(loginInfo)
        $.ajax({
            type: "POST",
            url: "/api/auth/register",
            data: {
                "email": form.inputEmail.value, "password": form.inputPassword.value, "facebookId": form.inputfbId.value, "firstName": form.inputFirstName.value, "lastName": form.inputLastName.value, "avatarUrl":form.inputavatarUrl.value, "permissions":form.inputpermissions.value
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