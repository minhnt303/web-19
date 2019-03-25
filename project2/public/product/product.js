window.onload = () => {
    console.log("gameId")
    $.ajax({
        url: `/api/product`,
        type: 'GET',
        success: (data) => {
            console.log(data)
            console.log(data[0].openingimage);
            document.getElementById("product-1").innerHTML = `<img src="${data[0].image}" height="100%" width="100%">`

            document.getElementById("product-2").innerHTML = `<img src="${data[1].image}" height="100%" width="100%">`

            document.getElementById("product-3").innerHTML = `<img src="${data[2].image}" height="100%" width="100%">`
        },
        error: (error) => {
            console.log(error);
        },
    });
};