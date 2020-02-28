//Year Settings


// function loadCalendarYears() {
//     // document.getElementById("years").innerHTML = "";

//     for (let i = startYear; i <= endYear; i++) {
//         let doc = document.createElement("div");
//         doc.innerHTML = i;
//         doc.classList.add("dropdown-item");
        
//         doc.onclick = (function () {
//             let selectedYear = i;
//             return function () {
//                 // console.log('asd');
//                 year = selectedYear;
//                 document.getElementById("curYear").innerHTML = year;
//                 // $('.calendar-years').fadeOut('fast');
//                 loadCalendarDays();
//                 return year;
//             }
//         })();

//         document.getElementById("years").appendChild(doc);
//     }
// }

//Days Settings
// function daysInMonth(month, year)
//     {
//         var d = new Date(year, month+1, 0);
//         return d.getDate();
//     }

// function loadCalendarDays() {
//     // document.getElementById("calendarDays").innerHTML = "";

//     var tmpDate = new Date(year, month, 0);
//     var num = daysInMonth(month, year);
//     var dayofweek = tmpDate.getDay();       // find where to start calendar day of week
//     // console.log(num);
//     for (var i = 0; i <= dayofweek; i++) {
//         var d = document.createElement("div");
//         d.classList.add("day");
//         d.classList.add("blank");
//         document.getElementById("calendarDays").appendChild(d);
//     }

//     for (var i = 0; i < num; i++) {
//         var tmp = i + 1;
//         var d = document.createElement("div");
//         d.id = "calendarday_" + tmp;
//         d.className = "day";
//         d.innerHTML = tmp;
//         d.dataset.day = tmp;              // easier to retrieve the date

//         /* ****************** Click Event ********************** */
//         // d.addEventListener('click', function(){
//         //     this.classList.toggle('selected');

//         //     if (!selectedDays.includes(this.dataset.day))
//         //         selectedDays.push(this.dataset.day);

//         //     else
//         //         selectedDays.splice(selectedDays.indexOf(this.dataset.day), 1);
//         // });
//         /* **************************************************** */

//         document.getElementById("calendarDays").appendChild(d);
//     }

//     // var clear = document.createElement("div");
//     // clear.className = "clear";
//     // document.getElementById("calendarDays").appendChild(clear);
// }

// console.log(daysInMonth(2,2020))
/////////////////////////////////////////////////////////////////////////////////////////////////
//Calendar Layout
var month = new Date().getMonth();
var year = new Date().getFullYear();
var startYear = new Date().getFullYear() - 5;
var endYear = new Date().getFullYear() + 5;
const months = ["JANUARI","FEBRUARI","MARET","APRIL","MEI","JUNI","JULI","AGUSTUS","SEPTEMBER","OKTOBER","NOVEMBER","DESEMBER"];
const days = ["SEN","SEL","RAB","KAM","JUM","SAB","MIN"];
//Years Layout
for (let i = startYear; i <= endYear; i++) {
    let doc = document.createElement("div");
    doc.innerHTML = i;
    doc.classList.add("dropdown-item");
    
    doc.onclick = (function () {
        var selectedYear = i;
        return function () {
            // console.log('asd');
            year = selectedYear;
            document.getElementById("curYear").innerHTML = year;
            // $('.calendar-years').fadeOut('fast');
            // loadCalendarDays();
            return year;
        }
    })();
    document.getElementById("years").appendChild(doc);
    // year =2000;
}
console.log(year)
console.log(month)
//Create Months Layout (Utama)
// loadCalendarYears();
for(var i = 0; i < months.length; i++)
{
    var kalender = document.createElement("div");
    kalender.classList.add("calendar");
    var bulan = document.createElement("div");
    bulan.classList.add("month");
    bulan.innerHTML = months[i];
    kalender.appendChild(bulan);
    month = months[i];
    //Create "days" layout
    var dates = document.createElement("div");
    dates.classList.add("calendar-dates");
    kalender.appendChild(dates);

    let tr = document.createElement("tr");
    for (let j = 0; j < days.length; j++)
    {
        th = document.createElement("th");
        th.innerHTML = days[j];
        tr.appendChild(th);
    }
    dates.appendChild(tr);
    //Create date layout
    day = document.createElement("div");
    day.classList.add("calendarDays");
    kalender.appendChild(day);
    document.getElementsByTagName("main")[0].appendChild(kalender);
    // loadCalendarDays();
}
// console.log(month)
// Date Leyout
month = 1;
var tmpDate = new Date(year, month, 0);
var num = new Date(year, month+1, 0);;
var dayofweek = tmpDate.getDay();       // find where to start calendar day of week
console.log(year, month, dayofweek, num.getDate());
for (let j=0; j < months.length; j++)
{
    console.log("berhasil berhasil hore")
    for (let i = 0; i <= dayofweek; i++) {
        let d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays")[j].appendChild(d);
    }
}

for (let i = 0; i < num.getDate(); i++) {
    var tmp = i + 1;
    var d = document.createElement("div");
    d.id = "calendarday_" + tmp;
    d.className = "day";
    d.innerHTML = tmp;
    d.dataset.day = tmp;              // easier to retrieve the date

    /* ****************** Click Event ********************** */
    // d.addEventListener('click', function(){
    //     this.classList.toggle('selected');

    //     if (!selectedDays.includes(this.dataset.day))
    //         selectedDays.push(this.dataset.day);

    //     else
    //         selectedDays.splice(selectedDays.indexOf(this.dataset.day), 1);
    // });
    /* **************************************************** */

    document.getElementById("calendarDays").appendChild(d);
}