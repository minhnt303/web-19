window.onload = () => {
    $.ajax({
        url: `/api/product`,
        type: 'GET',
        success: (data) => {
            // console.log(data)
            $.ajax({
                url: '/api/user',
                type: 'GET',
                success: (userdata) => {
                    var cartArray = [];
                    for (let i = 0; i < userdata.length; i++) {
                        if (userdata[i].email == localStorage.getItem('user')) {
                            // document.getElementById('cart').innerHTML = `<h1>asdas</h1>`
                            console.log(userdata[i].cart)
                            var list = "";
                            for (let j = 0; j < userdata[i].cart.length; j++) {
                                // console.log(userdata[i].cart[j]);
                                for (let k = 0; k < data.length; k++) {
                                    if (userdata[i].cart[j] == data[k]._id) {
                                        // console.log(data[k]._id)
                                        let pricediscount = data[k].price * (100 - data[k].discount) / 100;
                                        list += `
                                        <div class="row" style="background-color: whitesmoke; border-radius: 4px; height: 150px;">
                                            <div class="col-1" style="border-right: 1px solid gray">
                                                <div class="row" style="margin-top:30px; margin-left:15px;">
                                                    <a href="http://localhost:3000/removecart/${userdata[i]._id}/${data[k]._id}"><i class="fa fa-times fa-2x" aria-hidden="true"></i></a>
                                                </div>
                                                <div class="row" style="margin-top:30px; margin-left:20px;">
                                                    <a href="http://localhost:3000/detail/${data[k]._id}" style="width:100%;">
                                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                                    class="fas fa-info"></i></button></div></a>
                                            </div>
                                            <div class="col-3" style="padding: 15px;">
                                                <img src="${data[k].image}"
                                                    height="120px" width="200px" style="border-radius: 4px;">
                                            </div>
                                            <div class="col-3" style="padding: 15px;"><h4>${data[k].name}</h4></div>
                                            <div class="col-3" style="padding: 15px;margin-top:8px;font-weight: bold;">QUANLITY
                                            <input class="form-group" id="${data[k]._id}" type="number" placeholder="Number of product" style="border-radius: 4px;"required></input></div>
                                            <div class="col-2" style="padding: 15px;"><h4>$ ${pricediscount}</h4></div>
                                        </div>
                                        <div class="spacer" data-height="100" style="height: 15px;"></div>`;
                                        cartArray.push({ "productId": data[k]._id, "quanlity": 0, "price": pricediscount})
                                    }
                                }
                            }
                            document.getElementById("cart").innerHTML = list;
                            console.log(cartArray)
                            break;
                        }
                    }

                    document.getElementById('checkOut').addEventListener('click', (e) => {
                        let productQuanlity = ''
                        let sumMoney = 0;
                        for (var i = 0; i < cartArray.length; i++) {
                            productQuanlity = document.getElementById(`${cartArray[i].productId}`).value;
                            // console.log(JSON.parse(productQuanlity))
                            if (productQuanlity != '') {
                                cartArray[i].quanlity = JSON.parse(productQuanlity);
                                cartArray[i].price = JSON.parse(productQuanlity) * cartArray[i].price;
                            }
                            else {
                                cartArray[i].quanlity = 0;
                            }
                            sumMoney += cartArray[i].price; 
                            // console.log(productQuanlity)
                        }
                        console.log(cartArray, sumMoney)
                        for (let i = 0; i < userdata.length; i++) {
                            if (userdata[i].email == localStorage.getItem('user')) {
                                console.log(userdata[i]._id)
                                $.ajax({
                                    url: '/order',
                                    type: 'POST',
                                    data: { userid: userdata[i]._id, product: JSON.stringify(cartArray), summoney: sumMoney },
                                    success: (pdata) => {
                                        // console.log("Order Success")
                                        // console.log(JSON.parse(pdata.product))
                                        window.alert("You have success order !!! Please continue to shopping!!!");
                                        for (let j = 0; j < userdata[i].cart.length; j++) {
                                            // console.log(userdata[i].cart[j]);
                                            for (let k = 0; k < data.length; k++) {
                                                if (userdata[i].cart[j] == data[k]._id) {
                                                    // console.log(userdata[i].cart[j], data[k]._id)
                                                    $.ajax({
                                                        url: `http://localhost:3000/removecart/${userdata[i]._id}/${data[k]._id}`,
                                                        type: 'GET',
                                                        success: (kkk) => {
                                                            console.log('deletecart')
                                                        },
                                                        error: (eee) => { console.log(eee) }
                                                    })
                                                }
                                            }
                                        }
                                        window.location.href = 'http://localhost:3000/cart'
                                    },
                                    error: (error) => { console.log(error) }
                                })
                            }
                        }
                    })

                    if (localStorage.getItem('user') != null) {
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