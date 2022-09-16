/// Start  jQuery Area
$(document).ready(function() {

    // Start Header
    // Start Nav Bar
    $('.navbuttons').click(function() {
            $(this).toggleClass('crossxs');
        })
        // End Nav Bar
        // Start Header

});
// End  jQuery Area


// Start Javascript Area

// start student counter section 

var getcountervalues = document.querySelectorAll(".countervalues");
// console.log(getcountervalues) //Note List 
getcountervalues.forEach(function(getcountervalue) {
    getcountervalue.textContent = 0;

    const updatecounter = function() {
        // console.log("i am working")
        const getcttarget = +getcountervalue.getAttribute('data-target')
            // console.log(getcttarget) 
            // console.log(typeof getcttarget)

        const getctcontent = +getcountervalue.innerText;
        // console.log(getctcontent)
        // console.log(typeof getctcontent)

        const incnumber = getcttarget / 100;
        console.log(incnumber)
        if (getctcontent < getcttarget) {
            getcountervalue.textContent = getctcontent + incnumber;

            setTimeout(updatecounter, 100);
        }


    }
    updatecounter();
})

// end student counter section 

// Start Rating Section

// start google code for chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Myanmar", 8],
    ["Thailand", 2],
    ["Signapore", 4],
    ["Indonesia", 2],
    ["Srilanka", 8],
  ]);

  var options = {
    title: "International Students",
    // is3D: true,
    // pieHole: 0.2,
    width: 550,
    height: 400,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

// end google code for chart
// End Rating Section


//End Javascript area
// 25CT