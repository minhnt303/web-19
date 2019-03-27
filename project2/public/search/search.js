window.onload = () => {
    console.log("gameId")
    $.ajax({
        url: `/api/product`,
        type: 'GET',
        success: (data) => {
            console.log(data[0]._id)
            console.log(data.length)
            console.log(data[0].openingimage);
            let pricediscount1 = data[0].price * (100 - data[0].discount) / 100;
            let pricediscount2 = data[1].price * (100 - data[1].discount) / 100;
            let pricediscount3 = data[2].price * (100 - data[2].discount) / 100;

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
                <a href="#" id="product-1-link">
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
            console.log(list2)
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

            const pathname = window.location.pathname;
            const searchName = pathname.split('/')[pathname.split('/').length - 1];
            document.getElementById("search-box-input1").value = searchName;
            console.log(searchName.charAt(0).toUpperCase() + searchName.slice(1))
            let name = searchName.charAt(0).toUpperCase() + searchName.slice(1);
            var list = "";
            for (var i = 0; i < data.length; i++) {
                if (data[i].seller === name || data[i].type === name || data[i].evaluate === searchName) {
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
                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                            class="fas fa-bookmark"></i></button></div>
                                <div class="col-1" style="padding: 0px;"></div>
                                <div class="col-5"
                                    style="border: 1px solid rgb(218, 218, 218);text-align: center;padding: 3px;border-radius: 4px;">
                                    <button class="btn" style="text-align: center; padding: 0px"><i
                                            class="fas fa-info"></i></button></div>
                            </div>
                        </div>
                        <div class="col-1" style="padding: 0px;"></div>
                        <div class="col-5"
                            style="text-align: center;border: 1px solid rgba(235, 0, 0);text-align: center;padding: 3px; background-color: rgba(235, 0, 0);border-radius: 4px;">
                            <button class="btn"
                                style="text-align: center; padding: 0px; color: white; font-weight: bold;">ADD
                                TO CARD</button>
                        </div>
                        <div class="col-1" style="padding: 0px;width: 8.016px;"></div>
                    </div>
                </div>
            </div>`;
                }
                else {
                    console.log("Can not find the item you want!!!");
                    // window.location.href = `/`;
                }
            }

            document.getElementById("collection").innerHTML = list;

            document.getElementById("search-box-1").addEventListener('click', (e) => {
                let searchItem = document.getElementById("search-box-input1").value;
                console.log(searchItem)

                window.location.href = `/search/${searchItem}`;
            })
        },
        error: (error) => {
            console.log(error);
        },
    });
};