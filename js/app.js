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


// End Javascript Area

// 25CT