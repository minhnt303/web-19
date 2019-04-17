window.onload = () => {
    $.ajax({
        url: `/api/seller`,
        type: 'GET',
        success: (data) => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                if (data[i].email == localStorage.getItem('seller')) {
                    console.log(1);
                    document.getElementById('login-register-button').innerHTML = `
                                    <a style="margin-left:20px;">Hello! ${data[i].seller}</a>
                                    <button class="btn btn-default" id='logout-button'>Logout</button>`;
                    document.getElementById('logout-button').addEventListener('click', (e) => {
                        window.location.href = `http://localhost:3000`;
                        localStorage.removeItem('seller');
                    })
                    document.getElementById('postproduct').addEventListener('click', (e) => {
                        let productname = document.getElementById("productname").value;
                        let quantity = document.getElementById("quantity").value;
                        let detail = document.getElementById("detail").value;
                        let imageurl = document.getElementById("imageurl").value;
                        let type = document.getElementById("type").value;
                        let price = document.getElementById("price").value;
                        let discount = document.getElementById("discount").value;
                        console.log(productname,quantity,detail,imageurl,type,price,discount);
                        $.ajax({
                            url: '/api/product',
                            type: 'POST',
                            data: { name: productname, quantity: quantity, detail: detail, image: imageurl, type: type, price: price, seller: data[i].seller, discount: discount },
                            success: (data) => {
                                console.log("Register success")
                            },
                            error: (error) => { console.log(error) }
                        })
                        window.location.href = `http://localhost:3000/mainpage`;
                        console.log(data)
                    })
                }
            }
        },
        error: (error) => {
            console.log(error);
        },
    })
}