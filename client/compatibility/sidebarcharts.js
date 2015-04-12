function drawAirChart(){
    var data = [
        {
            value: 123,
            //value: issairwater.findOne({type: 'o2'},{sort: {time: -1}}),
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Oxygen"
        },
        {
            value: 321,
            //value: issairwater.findOne({type: 'n2'},{sort: {time: -1}}),
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Nitrogen"
        },
        {
            value: 50,
            //value: issairwater.findOne({type: 'co2'},{sort: {time: -1}}),
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Carbon Dioxide"
        }
    ]

    var ctx = $("#air-chart").get(0).getContext("2d");
    var airChart = new Chart(ctx).Doughnut(data);
}

/*
    var options = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,

        //String - The colour of each segment stroke
        segmentStrokeColor : "#fff",

        //Number - The width of each segment stroke
        segmentStrokeWidth : 2,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 50, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps : 100,

        //String - Animation easing effect
        animationEasing : "easeOutBounce",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,

        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    }
*/