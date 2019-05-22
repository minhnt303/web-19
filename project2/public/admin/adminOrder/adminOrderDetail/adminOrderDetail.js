window.onload = () => {
    $.ajax({
        url: `/api/order`,
        type: 'GET',
        success: (data) => {
            const pathname = window.location.pathname;
            const orderid = pathname.split('/')[pathname.split('/').length - 1];
            // console.log(orderid)
            var list = "";
            var sumMoney = "";
            var productList = [];
            for (var i = 0; i < data.length; i++) {
                if (orderid == data[i]._id) {
                    var product = JSON.parse(data[i].product);
                    console.log(orderid)
                    sumMoney = data[i].summoney;
                    $.ajax({
                        url: `/api/product`,
                        type: 'GET',
                        success: (productData) => {
                            for (var j = 0; j < productData.length; j++) {
                                for (var k = 0; k < product.length; k++) {
                                    if (productData[j]._id == product[k].productId) {
                                        productList.push({ productId: productData[j]._id, quanlity: product[k].quanlity, money: product[k].price, image: productData[j].image, name: productData[j].name, productquanlity: productData[j].quantity })

                                    }
                                }
                            }
                            console.log(productList)
                            for (var a = 0; a < productList.length; a++) {
                                list += `
                                <div class="col-1" style="border-left: 1px solid #333;border-bottom: 1px solid #333;">${a + 1}</div>
                                <div class="col-4" style="border-left: 1px solid #333;border-bottom: 1px solid #333;padding-top:10px;padding-bottom:10px"><img src="${productList[a].image}" style="height="120px" width="200px" style="border-radius: 4px;"/></div>
                                <div class="col-3" style="border-left: 1px solid #333;border-bottom: 1px solid #333;">${productList[a].name}</div>
                                <div class="col-2" style="border-left: 1px solid #333;border-bottom: 1px solid #333;">${productList[a].quanlity}
                                    <a href="/detail/${productList[a].productId}" style="width:100%; margin-left:110px;" class="linkproduct">
                                        <button class="btn" style="text-align: center; padding: 0px">
                                            <i class="fas fa-info"></i>
                                        </button>
                                    </a>
                                </div>
                                <div class="col-2" style="border-left: 1px solid #333;border-bottom: 1px solid #333;border-right: 1px solid #333;">${productList[a].money} $
                                    <!--<a href="#" style="width:100%; margin-left:150px;">
                                        <button class="btn" style="text-align: center; padding: 0px">
                                            <i class="fas fa-check"></i>
                                        </button>
                                    </a>-->
                                </div>
                                `
                            }
                            document.getElementById("itemDetail").innerHTML = list;
                            document.getElementById("summoney").innerHTML = `
                            
                            <div class="col-10"
                                style="border-left: 1px solid #333;border-bottom: 1px solid #333;text-align: center;">
                                SUM MONEY</div>
                            <div class="col-2" style="border-left: 1px solid #333;border-bottom: 1px solid #333;border-right: 1px solid #333;">${sumMoney} $</div>`;
                            document.getElementById("print").addEventListener('click', (e) => {
                                window.print();
                                for (var j = 0; j < productList.length; j++) {
                                    $.ajax({
                                        url: `/decreaeProductQuantity/${productList[j].productId}/${productList[j].quanlity}`,
                                        type: 'GET',
                                        success: (removepdata) => {
                                            $.ajax({
                                                url: `/removeOrder/${orderid}`,
                                                type: 'GET',
                                                success: (removeorder) => {
                                                    window.location.href="http://localhost:3000/adminOrder"
                                                },
                                                error: (error) => { console.log(error) }
                                                })
                                        },
                                        error: (error) => { console.log(error) }
                                        })
                                }

                            })
                        },
                        error: (error) => { console.log(error) }
                    })
                }
            }

        },
        error: (error) => { console.log(error) }
    })
}