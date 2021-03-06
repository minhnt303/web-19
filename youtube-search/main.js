window.onload = () => {
    let isLoading = false;
    let timeOutId = undefined;
    document.getElementById('search').addEventListener('input', (e) => {
        e.preventDefault();
        console.log('question search')
        const form = document.getElementById('keyword');
        const keyword = form.value;
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            if (!keyword) {
                // document.getElementById('error-massage').innerText = 'Please input question'
                console.log('error');
            } else {
                console.log(keyword)
                const searchText = keyword;
                //call youtube api 
                $.ajax({
                    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
                    type: 'GET',
                    success: (data) => {
                        document.getElementById("result-list").innerHTML = '';
                        if (data != null) {
                            console.log(data)
                            console.log(keyword)
                            var list = "";
                            for (var i = 0; i < data.items.length; i++) {

                                list += `<a class="result col-md-12" href="https://www.youtube.com/watch?v=${data.items[i].id.videoId}?autoplay=true" target="_blank">
                                <img src="${data.items[i].snippet.thumbnails.high.url}" alt="">
                                <div class="video_info">
                                    <h2 class="title">${data.items[i].snippet.title}
                                    </h2>
                                    <p class="description">${data.items[i].snippet.description}</p>
                                    <span>View >></span>
                                </div>
                                </a>`
                            }
                            document.getElementById("result-list").innerHTML = list;
                            // if (list != "") {
                            //     document.getElementById('keyword').value = '';
                            // }
                            console.log(window.innerHeight)
                            if (data.nextPageToken != null) {
                                // function yHandler() {
                                //     // Watch video for line by line explanation of the code
                                //     // http://www.youtube.com/watch?v=eziREnZPml4
                                //     var wrap = document.getElementById('result-list');
                                //     var contentHeight = wrap.offsetHeight;
                                //     var yOffset = window.pageYOffset;
                                //     var y = yOffset + window.innerHeight;
                                //     if (y >= contentHeight) {
                                //         // Ajax call to get more dynamic data goes here
                                //         // wrap.innerHTML += '<div class="newData"></div>';
                                //         $.ajax({
                                //             url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${data.nextPageToken}`,
                                //             type: 'GET',
                                //             success: (a) => {
                                //                 if (a != null) {
                                //                     console.log(a)
                                //                     console.log(keyword)
                                //                     console.log(searchText)
                                //                     for (var i = 0; i < a.items.length; i++) {

                                //                         list += `<a class="result col-md-12" href="https://www.youtube.com/watch?v=${a.items[i].id.videoId}?autoplay=true" target="_blank">
                                //                             <img src="${a.items[i].snippet.thumbnails.high.url}" alt="">
                                //                             <div class="video_info">
                                //                                 <h2 class="title">${a.items[i].snippet.title}
                                //                                 </h2>
                                //                                 <p class="description">${a.items[i].snippet.description}</p>
                                //                             <span>View >></span>
                                //                             </div>
                                //                             </a>`
                                //                     }
                                //                     wrap.innerHTML = list;
                                //                 }
                                //             },
                                //             error: (error) => { }
                                //         })
                                //     } 
                                //     // console.log(contentHeight)
                                // }
                                // window.onscroll = yHandler;

                                window.addEventListener('scroll', () => {
                                    if (document.documentElement.offsetHeight - window.scrollY - window.innerHeight < 200) {
                                        console.log(data)
                                        // console.log(window.innerHeight, document.documentElement.offsetHeight, window.scrollY)
                                        if (!isLoading) {
                                            isLoading = true;
                                            $.ajax({
                                                type: 'GET',
                                                url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${data.nextPageToken}`,
                                                success: (data2) => {
                                                    isLoading = false;
                                                    for (var i = 0; i < data2.items.length; i++) {

                                                        list += `<a class="result col-md-12" href="https://www.youtube.com/watch?v=${data2.items[i].id.videoId}?autoplay=true" target="_blank">
                                                        <img src="${data2.items[i].snippet.thumbnails.high.url}" alt="">
                                                        <div class="video_info">
                                                            <h2 class="title">${data2.items[i].snippet.title}
                                                            </h2>
                                                            <p class="description">${data2.items[i].snippet.description}</p>
                                                            <span>View >></span>
                                                        </div>
                                                        </a>`
                                                    }
                                                    document.getElementById("result-list").innerHTML = list;
                                                },
                                                error: (error2) => { window.alert(error) }
                                            });
                                        }
                                    }
                                });

                            }
                        } if (data.pageInfo.totalResults == 0) {
                            window.alert('Không tìm kiếm thấy video')
                        }
                    },
                    error: (error) => { window.alert(error) }
                })
            }
        }, 1000);

    })
};
