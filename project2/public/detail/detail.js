window.onload = () => {
    console.log("gameId")
    $.ajax({
        url: `/api/product`,
        type: 'GET',
        success: (data) => {
            console.log(data.length)
            console.log(data[0].openingimage);

            const pathname = window.location.pathname;
            const searchName = pathname.split('/')[pathname.split('/').length - 1];
            console.log(searchName);

            for (var i = 0; i < data.length; i++) {
                if (data[i]._id == searchName) {
                    let pricediscount = data[i].price * (100 - data[i].discount) / 100;
                    var list = `<div class="row" style="height: 450px; background-color: whitesmoke; border-radius: 4px; ">
            <div class="col-7"
                style="padding: 0px;height: 450px; text-align: center; padding-top: 20px;border-bottom:1px solid rgb(218, 218, 218)">
                <img src="${data[i].image}"
                    height="95%" width="90%" style="border-radius: 4px;">
            </div>
            <div class="col-5"
                style="padding: 0px;height: 450px;width: 100%;border-bottom:1px solid rgb(218, 218, 218)">
                <div class="product-name">
                    <h1 style="width: 100%;">${data[i].name}</h1>
                </div>
                <div class="product-seller"
                    style="width: 100%; border-bottom:1px solid rgb(218, 218, 218);padding-left:0px;">
                    <div class="row">
                        <div class="col-1" style="width: 100%;padding-right:0px;padding-top:3px;">
                            <h6>by</h6>
                        </div>
                        <div class="col-10" style="width: 100%; padding-left:2px; color: rgb(56, 56, 255);">
                            <h5>${data[i].seller}</h5>
                        </div>
                    </div>
                    <h6 style="margin-top: 0px;color: rgb(56, 56, 255);">Be the first to review this item</h6>
                </div>
                <div class="product-price" style="width: 100%; padding-left:0px;">
                    <div class="row">
                        <div class="col-2" style="width: 100%;padding-right:0px;padding-top:5px;">
                            <h6>Price:</h6>
                        </div>
                        <div class="col-10" style="width: 100%; padding-left:2px; color: rgb(56, 56, 255);">
                            <h3 style="margin-top: 7px; color: rgb(211, 49, 0)">$${pricediscount}</h3>
                        </div>
                    </div>
                </div>
                <div class="product-quantity" style="width: 100%; padding-left:0px;">
                    <h5 style="color: rgb(211, 49, 0);margin-top: 0px;">${data[i].quantity} left in stock - order soon.</h5>
                    <h6 style="margin-right: 20px">This item does not ship to Vietnam. Please check other sellers
                        who may ship internationally.</h6>
                </div>
            </div>
        </div>
        <div class="row" style="height: 40px; background-color: whitesmoke; border-radius: 4px;">
            <div class="col-6"
                style="text-align: right;padding-top: 10px;border-bottom:1px solid rgb(218, 218, 218)">
                <button class="btn" style=" padding: 0px"><i class="fas fa-bookmark"></i> FAVORITE</button></div>
            <div class="col-6"
                style="text-align: left;padding-top: 10px;border-bottom:1px solid rgb(218, 218, 218)">
                <button class="btn" style=" padding: 0px">ADD TO CART <i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>
        <div class="row" style="height: 300px; background-color: whitesmoke; border-radius: 4px;">
            <div class="col-12">
                <div>
                    <h3 style="padding-left:29px;background-color: whitesmoke; border-radius: 4px;">
                        Product description:</h3>
                </div>
                <div class="product-detail">
                    <h4 style="padding-left:29px; background-color: whitesmoke; border-radius: 4px;">
                    ${data[i].detail}</h4>
                </div>
            </div>

        </div>`;

                    document.getElementById("product-item").innerHTML = list;
                }
            }


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