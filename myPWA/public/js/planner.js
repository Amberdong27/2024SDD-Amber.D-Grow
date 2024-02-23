const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

window.onload = function (){
    setInterval(function() { 
    var todayDate = new Date();
    var currentyear = todayDate.getFullYear();
    var currentmonth = todayDate.getMonth({month:"long"});
    var currentday = todayDate.getDate();
    document.getElementById('date').innerHTML = monthNames[currentmonth] + " " + currentday + " " + currentyear;
        console.log(monthNames[currentmonth]);
    }, 1000);
}