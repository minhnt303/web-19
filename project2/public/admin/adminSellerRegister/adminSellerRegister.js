window.onload = () => {
    $.ajax({
        url: "/api/sellerregister",
        type: 'GET',
        success: (data) => {
            // console.log(data)
            var list = "";
            var sellerregisterList = [];
            for (var i = 0; i < data.length; i++) {
                sellerregisterList.push(data[i]);
            }
            sellerregisterList.sort(function (a, b) {
                // console.log(a,b)
                return a.createdAt - b.createdAt;
            });
            console.log(sellerregisterList)
            sellerregisterList.reverse();
            for (var i = 0; i < sellerregisterList.length; i++) {
                list += `
                    <div class="col-1"
                        style="border-left: 1px solid #333;border-bottom: 1px solid #333;">
                        ${i + 1}</div>
                    <div class="col-2"
                        style="border-left: 1px solid #333;border-bottom: 1px solid #333;width: 5px;">
                        ${sellerregisterList[i].createdAt}</div>
                    <div class="col-2"
                        style="border-left: 1px solid #333;border-bottom: 1px solid #333;">
                        ${sellerregisterList[i].email}</div>
                    <div class="col-2"
                        style="border-left: 1px solid #333;border-bottom: 1px solid #333;">
                        ${sellerregisterList[i].seller}</div>
                    <div class="col-2"
                        style="border-left: 1px solid #333;border-bottom: 1px solid #333;">
                        ${sellerregisterList[i].info}</div>
                    <div class="col-3" style="padding:0px;">
                        <form method="POST" action="https://formspree.io/${sellerregisterList[i].email}" style="width: 100%; height: 100%;">
                            <div class="row" style="width:100%;margin-left:0px;border-left: 1px solid #333;border-bottom: 1px solid #333;border-right: 1px solid #333;">
                                <div class="col-8" style="padding:0px;width: 90%;">
                                    <input style="width: 90%; margin: 7px;" id="passwordinput" name="Your password are:"></input>
                                </div>
                                <div class="col-4" style="border-left: 1px solid #333;padding-top:4px;padding-bottom:4px">
                                    <button class="btn btn-success" id="confirmbtn" style="margin-top:2px;" type="submit">OK</button>
                                </div>
                            </div>
                        </form>
                    </div>    
                `
            }
            document.getElementById("itemDetail").innerHTML = list;
            document.getElementById("confirmbtn").addEventListener('click', (e) => {
                var passInput = document.getElementById("passwordinput").value;
                console.log(passInput);
                $.ajax({
                    url: "/sellerregister",
                    type: 'POST',
                    data: { seller: sellerregisterList[0].seller, email: sellerregisterList[0].email, info: sellerregisterList[0].info, password: passInput },
                    success: (data) => {
                        console.log("Register success")
                    },
                    error: (error) => { console.log(error) }
                })
                $.ajax({
                    url: `/removeSellerRequest/${sellerregisterList[0]._id}`,
                    type: 'GET',
                    success: (data) => {
                        console.log('Remove request success')
                    },
                    error: (error) => { console.log(error) }
                })
            })
        },
        error: (error) => { console.log(error) }
    })
}