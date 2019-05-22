window.onload = () => {
    $.ajax({
        url: `/api/order`,
        type: 'GET',
        success: (data) => {
            console.log(data)
            var list = "";
            for (var i = 0; i < data.length; i++) {
                list += `
                    <div class="col-1" style="border-left: 1px solid #333;border-bottom: 1px solid #333;">${i + 1}</div>
                    <div class="col-2" style="border-left: 1px solid #333;border-bottom: 1px solid #333;">${data[i].createdAt}</div>
                    <div class="col-3" style="border-left: 1px solid #333;border-bottom: 1px solid #333;">${data[i].userid}</div>
                    <div class="col-3" style="border-left: 1px solid #333;border-bottom: 1px solid #333;">${JSON.parse(data[i].product).length}
                        <a href="/adminOrderDetail/${data[i]._id}" style="width:100%; margin-left:200px;">
                            <button class="btn" style="text-align: center; padding: 0px">
                                <i class="fas fa-info"></i>
                            </button>
                        </a>
                    </div>
                    <div class="col-3" style="border-left: 1px solid #333;border-bottom: 1px solid #333;border-right: 1px solid #333;">${data[i].summoney} $
                        <!--<a href="#" style="width:100%; margin-left:150px;">
                            <button class="btn" style="text-align: center; padding: 0px">
                                <i class="fas fa-check"></i>
                            </button>
                        </a>-->
                    </div>
                `
            }
            document.getElementById("itemDetail").innerHTML = list;
        },
        error: (error) => { console.log(error) }
    })
}