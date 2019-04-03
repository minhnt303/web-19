

  window.onload = () => {
    console.log("Port")
    const form = document.getElementById("port-form");
    console.log(form.dataset.value)
    form.addEventListener("submit", e => {
        event.preventDefault();

        console.log(form.inputContent.value)

        const loginInfo = { "title": form.inputTitle.value, "content": form.inputContent.value };
        console.log(loginInfo)
        $.ajax({
            type: "POST",
            url: "/api/posts",
            data: {
                "title": form.inputTitle.value, "content": form.inputContent.value, "description": form.inputDescription.value
            },
            success: data => {
                console.log(data);
            },
            error: error => {
                console.log(error);
            }
        });
    })
};