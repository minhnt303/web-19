window.onload = () => {
    $.ajax({
        url: '/api/user',
        type: 'GET',
        success: (userdata) => {
            for (let useridi = 0; useridi < userdata.length; useridi++) {
                if (userdata[useridi].email == localStorage.getItem('user')) {
                    console.log(userdata[useridi]._id)
                    $.ajax({
                        url: `/api/product`,
                        type: 'GET',
                        success: (data) => {
                            // console.log(data)
                            let pricediscount1 = data[0].price * (100 - data[0].discount) / 100;
                            let pricediscount2 = data[1].price * (100 - data[1].discount) / 100;
                            let pricediscount3 = data[2].price * (100 - data[2].discount) / 100;
                            // document.getElementById("product-1-link").addEventListener('click',(e)=>{
                            //     console.log("asdasdsad")
                            // })

                            var list2 = `<div class="col-3" style="background-color:rgba(235, 0, 0, 0.75);height: 300px;color: white;font-family: 'Roboto', sans-serif;">
                            <div>
                                <h2 style="margin-top: 0px;padding-top: 15px">BEST SELLING PRODUCTS</h2>
                                <h5 style="margin-top: 180px;">VIEW ALL PRODUCT</h5>
                            </div>
                        </div>`;
                            for (var i = 0; i < 3; i++) {
                                let pricediscount = data[i].price * (100 - data[i].discount) / 100;
                                list2 += `<div class="col-3"
                style="background-color:white;height: 300px;border-right: 1px solid rgb(218, 218, 218);border-bottom: 1px solid rgb(218, 218, 218);color: black;font-family: 'Roboto', sans-serif; padding: 20px;">
                <a href="http://localhost:3000/detail/${data[i]._id}" id="product-1-link">
                    <div style="height: 75%;">
                        <div id="product-1"><img src="${data[i].image}" height="100%" width="100%"></div>
                    </div>
                    <div style="height: 25%;">
                        <div class="row">
                            <div class="col-8">
                                <div class="row">
                                    <div class="col-6">
                                        <div id="product-1-discount"><h4 style="color: black;">$${pricediscount}0</h4></div>
                                    </div>
                                    <div class="col-6">
                                        <div id="product-1-price"><h5 style="color:rgb(218, 218, 218);">$${data[i].price}.00</h5></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div id="product-1-evaluate"><h5 style="float: right;color: black;">${data[i].evaluate} <i class="fas fa-star"></i></h5></div>
                            </div>
                        </div>
                        <div id="product-1-name"><h4 style="color: black;">${data[i].name}</h4></div>
                    </div>
                </a>
            </div>`;
                            }
                            document.getElementById("best_selling_product_row").innerHTML = list2;

                            // document.getElementById("product-1").innerHTML = `<img src="${data[0].image}" height="100%" width="100%">`;
                            // document.getElementById("product-1-discount").innerHTML = `<h4 style="color: black;">$${pricediscount1}0</h4>`;
                            // document.getElementById("product-1-price").innerHTML = `<h5 style="color:rgb(218, 218, 218);">$${data[0].price}.00</h5>`;
                            // document.getElementById("product-1-evaluate").innerHTML = `<h5 style="float: right;color: black;">${data[0].evaluate} <i class="fas fa-star"></i></h5>`;
                            // document.getElementById("product-1-name").innerHTML = `<h4 style="color: black;">${data[0].name}</h4>`;


                            // document.getElementById("product-2").innerHTML = `<img src="${data[1].image}" height="100%" width="100%">`;
                            // document.getElementById("product-2-discount").innerHTML = `<h4 style="color: black;">$${pricediscount2}0</h4>`;
                            // document.getElementById("product-2-price").innerHTML = `<h5 style="color:rgb(218, 218, 218);">$${data[1].price}.00</h5>`;
                            // document.getElementById("product-2-evaluate").innerHTML = `<h5 style="float: right;color: black;">${data[1].evaluate}  <i class="fas fa-star"></i></h5>`;
                            // document.getElementById("product-2-name").innerHTML = `<h4 style="color: black;">${data[1].name}</h4>`;

                            // document.getElementById("product-3").innerHTML = `<img src="${data[2].image}" height="100%" width="100%">`;
                            // document.getElementById("product-3-discount").innerHTML = `<h4 style="color: black;">$${pricediscount3}0</h4>`;
                            // document.getElementById("product-3-price").innerHTML = `<h5 style="color:rgb(218, 218, 218);">$${data[2].price}.00</h5>`;
                            // document.getElementById("product-3-evaluate").innerHTML = `<h5 style="float: right;color: black;">${data[2].evaluate}  <i class="fas fa-star"></i></h5>`;
                            // document.getElementById("product-3-name").innerHTML = `<h4 style="color: black;">${data[2].name}</h4>`;

                            var list = "";
                            for (var i = 0; i < data.length; i++) {
                                let pricediscount = data[i].price * (100 - data[i].discount) / 100;

                                list += `<div class="col-3"
                style="background-color:white;height: 300px;border-right: 1px solid rgb(218, 218, 218);border-left: 1px solid rgb(245, 245, 245);border-top: 1px solid rgb(245, 245, 245);border-bottom: 1px solid rgb(218, 218, 218);color: black;font-family: 'Roboto', sans-serif;padding-bottom: 10px;padding-top: 10px;border-radius:4px;margin-top:10px;">
                <div style="height: 65%;">
                    <div id="collection-${i}">
                        <img src="${data[i].image}" height="100%" width="100%">
                    </div>
                </div>
                <div style="height: 25%;">
                    <div class="row">
                        <div class="col-8">
                            <div class="row">
                                <div class="col-6">
                                    <div id="collection-${i}-discount">
                                        <h4 style="color: black;">$${pricediscount}</h4>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div id="collection-${i}-price">
                                        <h5 style="color:rgb(218, 218, 218);">$${data[i].price}.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div id="collection-${i}-evaluate">
                                <h5 style="float: right;color: black;">${data[i].evaluate} <i class="fas fa-star"></i></h5>
                            </div>
                        </div>
                    </div>
                    <div id="collection-${i}-name">
                        <h4 style="color: black;-o-text-overflow: ellipsis;  
                        text-overflow:    ellipsis;   
                        overflow:hidden;             
                        white-space:nowrap;           
                        width: 180px; ">${data[i].name}</h4>
                    </div>
                </div>
                <div style="height: 10%;">
                    <div class="row">
                        <div class="col-1" style="padding: 0px;"></div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col-5"
                                    style="border: 1px solid rgb(218, 218, 218);text-align: center;padding: 3px;border-radius: 4px;">
                                    <a href="http://localhost:3000/saveproduct/${userdata[useridi]._id}/${data[i]._id}" style="width:100%;">
                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                            class="fas fa-bookmark"></i></button></div></a>
                                <div class="col-1" style="padding: 0px;"></div>
                                <div class="col-5"
                                    style="border: 1px solid rgb(218, 218, 218);text-align: center;padding: 3px;border-radius: 4px;">
                                    <a href="http://localhost:3000/detail/${data[i]._id}" style="width:100%;">
                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                    class="fas fa-info"></i></button></div></a>
                            </div>
                        </div>
                        <div class="col-1" style="padding: 0px;"></div>
                        <div class="col-5 cart"
                            style="text-align: center;border: 1px solid rgba(235, 0, 0);text-align: center;padding: 3px; background-color: rgba(235, 0, 0);border-radius: 4px;">
                            <a href="/cart/${userdata[useridi]._id}/${data[i]._id}">
                            <button class="btn" id="add-to-cart"
                                style="text-align: center; padding: 0px; color: white; font-weight: bold;">ADD
                                TO CART</button>
                                </a>
                        </div>
                        <div class="col-1" style="padding: 0px;width: 8.016px;"></div>
                    </div>
                </div>
            </div>`;

                                // console.log(data[i]._id)


                            }
                            var bestsellerlist = "";
                            var array = [];
                            for (var i = 0; i < 12; i++) {
                                array.push(data[i].price);
                            }
                            array.sort(function (a, b) { return a - b });
                            for (var i = 0; i < 12; i++) {
                                for (var j = 0; j < 12; j++) {
                                    if (data[i].price == array[j]) {
                                        array[j] = data[i];
                                    }
                                }
                            }
                            for (var i = 0; i < 12; i++) {
                                let pricediscount = array[i].price * (100 - array[i].discount) / 100;

                                bestsellerlist += `<div class="col-3"
                style="background-color:white;height: 300px;border-right: 1px solid rgb(218, 218, 218);border-left: 1px solid rgb(245, 245, 245);border-top: 1px solid rgb(245, 245, 245);border-bottom: 1px solid rgb(218, 218, 218);color: black;font-family: 'Roboto', sans-serif;padding-bottom: 10px;padding-top: 10px;border-radius:4px;margin-top:10px;">
                <div style="height: 65%;">
                    <div id="collection-${i}">
                        <img src="${array[i].image}" height="100%" width="100%">
                    </div>
                </div>
                <div style="height: 25%;">
                    <div class="row">
                        <div class="col-8">
                            <div class="row">
                                <div class="col-6">
                                    <div id="collection-${i}-discount">
                                        <h4 style="color: black;">$${pricediscount}</h4>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div id="collection-${i}-price">
                                        <h5 style="color:rgb(218, 218, 218);">$${array[i].price}.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div id="collection-${i}-evaluate">
                                <h5 style="float: right;color: black;">${array[i].evaluate} <i class="fas fa-star"></i></h5>
                            </div>
                        </div>
                    </div>
                    <div id="collection-${i}-name">
                        <h4 style="color: black;-o-text-overflow: ellipsis;  
                        text-overflow:    ellipsis;   
                        overflow:hidden;             
                        white-space:nowrap;           
                        width: 180px; ">${array[i].name}</h4>
                    </div>
                </div>
                <div style="height: 10%;">
                    <div class="row">
                        <div class="col-1" style="padding: 0px;"></div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col-5"
                                    style="border: 1px solid rgb(218, 218, 218);text-align: center;padding: 3px;border-radius: 4px;">
                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                            class="fas fa-bookmark"></i></button></div>
                                <div class="col-1" style="padding: 0px;"></div>
                                <div class="col-5"
                                    style="border: 1px solid rgb(218, 218, 218);text-align: center;padding: 3px;border-radius: 4px;">
                                    <a href="http://localhost:3000/detail/${array[i]._id}" style="width:100%;">
                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                    class="fas fa-info"></i></button></div></a>
                            </div>
                        </div>
                        <div class="col-1" style="padding: 0px;"></div>
                        <div class="col-5 cart"
                            style="text-align: center;border: 1px solid rgba(235, 0, 0);text-align: center;padding: 3px; background-color: rgba(235, 0, 0);border-radius: 4px;">
                            <a href="/cart/${userdata[useridi]._id}/${data[i]._id}">
                            <button class="btn" id="add-to-cart"
                                style="text-align: center; padding: 0px; color: white; font-weight: bold;">ADD
                                TO CART</button>
                                </a>
                        </div>
                        <div class="col-1" style="padding: 0px;width: 8.016px;"></div>
                    </div>
                </div>
            </div>`;
                            }

                            var newarrivallist = "";
                            var newarrivalarray = [];
                            for (var i = 0; i < 12; i++) {
                                newarrivalarray.push(data[i].createdAt);
                            }
                            newarrivalarray.sort(function (a, b) { return b - a });
                            for (var i = 0; i < 12; i++) {
                                for (var j = 0; j < 12; j++) {
                                    if (data[i].price == newarrivalarray[j]) {
                                        newarrivalarray[j] = data[i];
                                    }
                                }
                            }
                            for (var i = 0; i < 12; i++) {
                                let pricediscount = newarrivalarray[i].price * (100 - newarrivalarray[i].discount) / 100;

                                newarrivallist += `<div class="col-3"
                style="background-color:white;height: 300px;border-right: 1px solid rgb(218, 218, 218);border-left: 1px solid rgb(245, 245, 245);border-top: 1px solid rgb(245, 245, 245);border-bottom: 1px solid rgb(218, 218, 218);color: black;font-family: 'Roboto', sans-serif;padding-bottom: 10px;padding-top: 10px;border-radius:4px;margin-top:10px;">
                <div style="height: 65%;">
                    <div id="collection-${i}">
                        <img src="${newarrivalarray[i].image}" height="100%" width="100%">
                    </div>
                </div>
                <div style="height: 25%;">
                    <div class="row">
                        <div class="col-8">
                            <div class="row">
                                <div class="col-6">
                                    <div id="collection-${i}-discount">
                                        <h4 style="color: black;">$${pricediscount}</h4>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div id="collection-${i}-price">
                                        <h5 style="color:rgb(218, 218, 218);">$${newarrivalarray[i].price}.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div id="collection-${i}-evaluate">
                                <h5 style="float: right;color: black;">${newarrivalarray[i].evaluate} <i class="fas fa-star"></i></h5>
                            </div>
                        </div>
                    </div>
                    <div id="collection-${i}-name">
                        <h4 style="color: black;-o-text-overflow: ellipsis;  
                        text-overflow:    ellipsis;   
                        overflow:hidden;             
                        white-space:nowrap;           
                        width: 180px; ">${newarrivalarray[i].name}</h4>
                    </div>
                </div>
                <div style="height: 10%;">
                    <div class="row">
                        <div class="col-1" style="padding: 0px;"></div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col-5"
                                    style="border: 1px solid rgb(218, 218, 218);text-align: center;padding: 3px;border-radius: 4px;">
                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                            class="fas fa-bookmark"></i></button></div>
                                <div class="col-1" style="padding: 0px;"></div>
                                <div class="col-5"
                                    style="border: 1px solid rgb(218, 218, 218);text-align: center;padding: 3px;border-radius: 4px;">
                                    <a href="http://localhost:3000/detail/${newarrivalarray[i]._id}" style="width:100%;">
                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                    class="fas fa-info"></i></button></div></a>
                            </div>
                        </div>
                        <div class="col-1" style="padding: 0px;"></div>
                        <div class="col-5 cart"
                            style="text-align: center;border: 1px solid rgba(235, 0, 0);text-align: center;padding: 3px; background-color: rgba(235, 0, 0);border-radius: 4px;">
                            <a href="/cart/${userdata[useridi]._id}/${data[i]._id}">
                            <button class="btn" id="add-to-cart"
                                style="text-align: center; padding: 0px; color: white; font-weight: bold;">ADD
                                TO CART</button>
                                </a>
                        </div>
                        <div class="col-1" style="padding: 0px;width: 8.016px;"></div>
                    </div>
                </div>
            </div>`;
                            }
                            document.getElementById("collection").innerHTML = list;
                            document.getElementById("bestseller").addEventListener('click', (e) => {
                                document.getElementById("bestseller").innerHTML = '<h6 style="font-size: 10.5px;font-weight: bold;color: rgba(235, 0, 0);">BEST SELLER</h6>';
                                document.getElementById("mostpopular").innerHTML = '<h6 style="font-size: 10.5px;font-weight: bold;width: 90px;">MOST POPULAR</h6>';
                                document.getElementById("newarrival").innerHTML = '<h6 style="font-size: 10.5px;font-weight: bold;">NEW ARRIVAL</h6>';
                                document.getElementById("collection").innerHTML = bestsellerlist;
                            })
                            document.getElementById("newarrival").addEventListener('click', (e) => {
                                document.getElementById("newarrival").innerHTML = '<h6 style="font-size: 10.5px;font-weight: bold;color: rgba(235, 0, 0);">NEW ARRIVAL</h6>';
                                document.getElementById("bestseller").innerHTML = '<h6 style="font-size: 10.5px;font-weight: bold;">BEST SELLER</h6>';
                                document.getElementById("mostpopular").innerHTML = '<h6 style="font-size: 10.5px;font-weight: bold;width: 90px;">MOST POPULAR</h6>';
                                document.getElementById("collection").innerHTML = newarrivallist;
                            })
                            document.getElementById("mostpopular").addEventListener('click', (e) => {
                                document.getElementById("newarrival").innerHTML = '<h6 style="font-size: 10.5px;font-weight: bold;">NEW ARRIVAL</h6>';
                                document.getElementById("bestseller").innerHTML = '<h6 style="font-size: 10.5px;font-weight: bold;">BEST SELLER</h6>';
                                document.getElementById("mostpopular").innerHTML = '<h6 style="font-size: 10.5px;font-weight: bold;width: 90px;color: rgba(235, 0, 0);">MOST POPULAR</h6>';
                                document.getElementById("collection").innerHTML = list;
                            })

                            var laptopList = [];

                            for (var i = 0; i < data.length; i++) {
                                // for(var j =0; j <laptopList.length;j++){

                                // }
                                if (data[i].type == 'Laptop') {
                                    laptopList.push(data[i].seller)
                                }
                            }

                            const uniqueSet = new Set(laptopList);
                            const laptoplistArray = [...uniqueSet]

                            // console.log(laptoplistArray)
                            var listLaptopHtml = '';

                            for (var i = 0; i < laptoplistArray.length; i++) {
                                listLaptopHtml += `<a href='/search/${laptoplistArray[i]}'>${laptoplistArray[i]}</a>`;
                            }
                            document.getElementById('dropdownContent').innerHTML = listLaptopHtml;


                            var consoleList = [];

                            for (var i = 0; i < data.length; i++) {
                                // for(var j =0; j <laptopList.length;j++){

                                // }
                                if (data[i].type == 'Console') {
                                    consoleList.push(data[i].seller)
                                }
                            }

                            const uniqueSetConsole = new Set(consoleList);
                            const consolelistArray = [...uniqueSetConsole]

                            // console.log(consolelistArray)
                            var listConsolepHtml = '';

                            for (var i = 0; i < consolelistArray.length; i++) {
                                listConsolepHtml += `<a href='/search/${consolelistArray[i]}'>${consolelistArray[i]}</a>`;
                            }
                            document.getElementById('dropdownContentConsole').innerHTML = listConsolepHtml;


                            var techgearList = [];

                            for (var i = 0; i < data.length; i++) {
                                // for(var j =0; j <laptopList.length;j++){

                                // }
                                if (data[i].type == 'Techgear') {
                                    techgearList.push(data[i].seller)
                                }
                            }

                            const uniqueSetTechgear = new Set(techgearList);
                            const techgearlistArray = [...uniqueSetTechgear]

                            // console.log(techgearlistArray)
                            var listTechgearpHtml = '';

                            for (var i = 0; i < techgearlistArray.length; i++) {
                                listTechgearpHtml += `<a href='/search/${techgearlistArray[i]}'>${techgearlistArray[i]}</a>`;
                            }
                            document.getElementById('dropdownContentTechgear').innerHTML = listTechgearpHtml;

                            // document.getElementById("add-to-cart").addEventListener('click', (e) => {
                            //     $.ajax({
                            //         url: '/api/user',
                            //         type: 'GET',
                            //         success: (userdata) => {
                            //             for (let i = 0; i < userdata.length; i++) {
                            //                 if (userdata[i].email == localStorage.getItem('user')) {
                            //                     console.log(1)
                            //                 }
                            //             }
                            //         },
                            //         error: (error) => { console.log(error) }
                            //     })
                            // })

                            document.getElementById("search-box-1").addEventListener('click', (e) => {
                                let searchItem = document.getElementById("search-box-input1").value;
                                console.log(searchItem)

                                window.location.href = `/search/${searchItem}`;
                            })
                            document.getElementById("search-box-2").addEventListener('click', (e) => {
                                let searchItem = document.getElementById("search-input-2").value;
                                console.log(searchItem)

                                window.location.href = `/search/${searchItem}`;
                            })
                            if (localStorage.getItem('user') != null) {
                                // console.log('there is user')
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
                        error: (error) => {
                            console.log(error);
                        },
                    });
                }
            }
        }
    })
};

// $(document).ready(function() {
//     debugger
//             $(".cart button").each(function(index, item){
//                 debugger
//                 $(item).bind('click',(e)=>{
//                     alert("1");
//                 })
//             })
// })

