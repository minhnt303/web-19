//making a user register in day
window.onload = () => {


    $.ajax({
        url: '/api/user',
        type: 'GET',
        success: (data) => {
            document.getElementById('numberOfUser').innerHTML = `Number of user: ${data.length}`
            var date = [];
            for (var i = 0; i < data.length; i++) {
                var myDate = new Date(data[i].createdAt);

                var month = myDate.getUTCMonth();
                var day = myDate.getDate();
                var year = myDate.getFullYear();

                if (month < 10 && day < 10) {
                    var dateString = `${year}-0${month + 1}-0${day}`
                }
                else if (month < 10) {
                    var dateString = `${year}-0${month + 1}-${day}`
                }
                else if (day < 10) {
                    var dateString = `${year}-${month + 1}-0${day}`
                }
                else {
                    var dateString = `${year}-${month + 1}-${day}`
                }
                // console.log(dateString);
                date.push(dateString);
            }
            date.sort()
            // console.log(date)
            var dateCount = [];
            var current = null;
            var cnt = 0;
            for (var i = 0; i < date.length; i++) {
                if (date[i] != current) {
                    if (cnt > 0) {
                        // console.log(current + ' comes --> ' + cnt + ' times');
                        dateCount.push([current, cnt])
                    }
                    current = date[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            // console.log(current + ' comes --> ' + cnt + ' times');
            dateCount.push([current, cnt])


            var dateString = []
            for (var i = 0; i < dateCount.length; i++) {

                // dateString += `{"date": ${dateCount[i][0]},"column-1": ${dateCount[i][1]}},`

                dateString[i] = { "date": dateCount[i][0], "column-1": dateCount[i][1] }

            }

            // console.log(dateString);
            // var myobj = JSON.parse(dateString)
            AmCharts.makeChart("chartdiv",
                {
                    "type": "serial",
                    "categoryField": "date",
                    "dataDateFormat": "YYYY-MM-DD",
                    "categoryAxis": {
                        "parseDates": true
                    },
                    "chartCursor": {
                        "enabled": true
                    },
                    "chartScrollbar": {
                        "enabled": true
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "bullet": "round",
                            "id": "AmGraph-1",
                            "title": "graph 1",
                            "valueField": "column-1"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "title": "User per day"
                        }
                    ],
                    "allLabels": [],
                    "balloon": {},
                    "legend": {
                        "enabled": true,
                        "useGraphSettings": true
                    },
                    "titles": [
                        {
                            "id": "Title-1",
                            "size": 15,
                            "text": "Number of user register each day"
                        }
                    ],
                    "dataProvider": dateString
                }
            );
        }
    })


    //product satisfided
    $.ajax({
        url: '/api/product',
        type: 'GET',
        success: (data) => {
            var dataArray = [];
            for (var i = 0; i < data.length; i++) {
                dataArray.push(data[i].evaluate)
            }
            dataArray.sort();

            var evaluateCount = [];
            var current = null;
            var cnt = 0;
            for (var i = 0; i < dataArray.length; i++) {
                if (dataArray[i] != current) {
                    if (cnt > 0) {
                        // console.log(current + ' comes --> ' + cnt + ' times');
                        evaluateCount.push([current, cnt])
                    }
                    current = dataArray[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            // console.log(current + ' comes --> ' + cnt + ' times');
            evaluateCount.push([current, cnt])


            var evaluateString = []
            for (var i = 0; i < evaluateCount.length; i++) {

                // dateString += `{"date": ${dateCount[i][0]},"column-1": ${dateCount[i][1]}},`

                evaluateString[i] = { "category": evaluateCount[i][0] + " star", "column-1": evaluateCount[i][1] }

            }

            AmCharts.makeChart("piechartdiv",
                {
                    "type": "pie",
                    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                    "innerRadius": "40%",
                    "titleField": "category",
                    "valueField": "column-1",
                    "allLabels": [],
                    "balloon": {},
                    "legend": {
                        "enabled": true,
                        "align": "center",
                        "markerType": "circle"
                    },
                    "titles": [{ "text": "Sum evaluate of product" }],
                    "dataProvider": evaluateString
                }
            );
        }
    })


    //number of product
    $.ajax({
        url: '/api/product',
        type: 'GET',
        success: (data) => {
            document.getElementById('numberOfProduct').innerHTML = `Number of product: ${data.length}`
            var date = [];
            for (var i = 0; i < data.length; i++) {
                var myDate = new Date(data[i].createdAt);

                var month = myDate.getUTCMonth();
                var day = myDate.getDate();
                var year = myDate.getFullYear();

                if (month < 10 && day < 10) {
                    var dateString = `${year}-0${month + 1}-0${day}`
                }
                else if (month < 10) {
                    var dateString = `${year}-0${month + 1}-${day}`
                }
                else if (day < 10) {
                    var dateString = `${year}-${month + 1}-0${day}`
                }
                else {
                    var dateString = `${year}-${month + 1}-${day}`
                }
                // console.log(dateString);
                date.push(dateString);
            }
            date.sort()
            // console.log(date)
            var dateCount = [];
            var current = null;
            var cnt = 0;
            for (var i = 0; i < date.length; i++) {
                if (date[i] != current) {
                    if (cnt > 0) {
                        // console.log(current + ' comes --> ' + cnt + ' times');
                        dateCount.push([current, cnt])
                    }
                    current = date[i];
                    cnt = 1;
                } else {
                    cnt++;
                }
            }
            // console.log(current + ' comes --> ' + cnt + ' times');
            dateCount.push([current, cnt])


            var dateString = []
            for (var i = 0; i < dateCount.length; i++) {

                // dateString += `{"date": ${dateCount[i][0]},"column-1": ${dateCount[i][1]}},`

                dateString[i] = { "date": dateCount[i][0], "column-1": dateCount[i][1] }

            }

            // console.log(dateString);
            // var myobj = JSON.parse(dateString)
            AmCharts.makeChart("productchartdiv",
                {
                    "type": "serial",
                    "categoryField": "date",
                    "dataDateFormat": "YYYY-MM-DD",
                    "categoryAxis": {
                        "parseDates": true
                    },
                    "chartCursor": {
                        "enabled": true
                    },
                    "chartScrollbar": {
                        "enabled": true
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "bullet": "round",
                            "id": "AmGraph-1",
                            "title": "graph 1",
                            "valueField": "column-1"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "title": "Product per day"
                        }
                    ],
                    "allLabels": [],
                    "balloon": {},
                    "legend": {
                        "enabled": true,
                        "useGraphSettings": true
                    },
                    "titles": [
                        {
                            "id": "Title-1",
                            "size": 15,
                            "text": "Number of created product each day"
                        }
                    ],
                    "dataProvider": dateString
                }
            );
        }
    })
}

