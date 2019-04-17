window.onload = () => {
    $.ajax({
        url: `/api/product`,
        type: 'GET',
        success: (data) => {
            console.log(data)
            $.ajax({
                url: '/api/user',
                type: 'GET',
                success: (userdata) => {
                    for (let i = 0; i < userdata.length; i++) {
                        if (userdata[i].email == localStorage.getItem('user')) {
                            // document.getElementById('cart').innerHTML = `<h1>asdas</h1>`
                            console.log(userdata[i].cart)
                            var list = "";
                            for (let j = 0; j < userdata[i].cart.length; j++) {
                                console.log(userdata[i].cart[j]);
                                for (let k = 0; k < data.length; k++) {
                                    if (userdata[i].cart[j] == data[k]._id) {
                                        console.log(data[k]._id)
                                        let pricediscount = data[k].price * (100 - data[k].discount) / 100;
                                        list += `
                                        <div class="row" style="background-color: whitesmoke; border-radius: 4px; height: 150px;">
                                            <div class="col-1" style="border-right: 1px solid gray">
                                                <div class="row">
                                                    <a href="http://localhost:3000/removecart/${userdata[i]._id}/${data[k]._id}"><i class="fa fa-times fa-2x" aria-hidden="true"></i></a>
                                                </div>
                                                <div class="row">
                                                    <a href="http://localhost:3000/detail/${data[k]._id}" style="width:100%;">
                                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                                    class="fas fa-info"></i></button></div></a>
                                            </div>
                                            <div class="col-3" style="padding: 15px;">
                                                <img src="${data[k].image}"
                                                    height="120px" width="200px" style="border-radius: 4px;">
                                            </div>
                                            <div class="col-3" style="padding: 15px;"><h4>${data[k].name}</h4></div>
                                            <div class="col-3" style="padding: 15px;">Quanlity</div>
                                            <div class="col-2" style="padding: 15px;"><h4>$ ${pricediscount}</h4></div>
                                        </div>
                                        <div class="spacer" data-height="100" style="height: 15px;"></div>`;
                                    }
                                }
                            }
                            document.getElementById("cart").innerHTML = list;
                            console.log(1)
                            break;
                        }
                    }
                    if (localStorage.getItem('user') != null) {
                        console.log('there is user')
                        $.ajax({
                            url: '/api/user',
                            type: 'GET',
                            success: (userdata) => {
                                for (let i = 0; i < userdata.length; i++) {
                                    if (userdata[i].email == localStorage.getItem('user')) {
                                        document.getElementById('login-register-button').innerHTML = `
                                            <a style="margin-left:20px;">Hello! ${userdata[i].username}</a>
                                            <button class="btn btn-default" id='logout-button'>Logout</button>`;
                                        document.getElementById('logout-button').addEventListener('click', (e) => {
                                            window.location.href = `http://localhost:3000`;
                                            localStorage.removeItem('user');
                                        })
                                        break;
                                    }
                                }
                            },
                            error: (error) => { console.log(error) }
                        })
                    } else {
                        document.getElementById('login-register-button').innerHTML = `
                            <a href="http://localhost:3000/login"><button class="btn btn-default">Login</button></a>
                            <a href="http://localhost:3000/register"><button class="btn btn-default">Register</button></a>`
                        console.log('there is no user')
                    }
                },
                error: (error) => { console.log(error) }
            })

        },
        error: (error) => {
            console.log(error);
        },
    })
}