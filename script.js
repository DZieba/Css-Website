

var countDownaDate= new Date("August 20,2018 15:37:12").getTime();

var x=setInterval(function () {
    var now=new Date().getTime();
    var remained=countDownaDate-now;

    var allData={
        'days': Math.floor(remained / (1000 * 60 * 60 * 24)),
     'hours' : Math.floor((remained % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
     'minutes':  Math.floor((remained % (1000 * 60 * 60)) / (1000 * 60)),
     'seconds':  ("0"+Math.floor((remained % (1000 * 60)) / 1000)).slice(-2)
    };



    document.getElementById('days').innerHTML=allData.days;
    document.getElementById('hours').innerHTML=allData.hours;
    document.getElementById('minutes').innerHTML=allData.minutes ;
    document.getElementById('seconds').innerHTML=allData.seconds;
     },1000);

$(document).ready(function () {
  slideShow();
})


    var slides=$('.slideShow>li');
    var slideCount=0;
    var totalSlides=3;




function slideShow() {
    slides.eq(slideCount).fadeIn(2000).fadeOut(1000, function () {
        slideCount<totalSlides? slideCount++ : slideCount=0;
        slideShow();

    });

};


$(".anch1").click(function () {
    $('html,body').animate(
        {
            scrollTop: $('.wrapper').offset().top
        },'slow'
    );

})

/*----------------DYNAMIC TABLE--------------------------------*/

var myTable=document.getElementById("myTable");
var tableLength=document.getElementById("myTable").rows.length;
var rIndex = '';
var inputs = document.getElementById('form1').getElementsByTagName('input');

function countTotals() {

    for (var i = 1; i < document.getElementById('myTable').rows.length; i++) {

        var aa = Number(myTable.rows[i].cells[1].innerText);
        var bb = Number(myTable.rows[i].cells[2].innerText);

        var x = myTable.rows[i].cells[3];
        x.innerHTML = aa * bb;
        console.log(x);

    }
}

var editSelectedRow=(function () {
    var input1 = inputs[0];
    var input2 = inputs[1];
    var input3 = inputs[2];

return function () {
    for (var i = 0; i < document.getElementById('myTable').rows.length; i++) {

        myTable.rows[i].onclick = function () {

            rIndex = this.rowIndex;
            input1.value = this.cells[0].innerHTML;
            input2.value = Number(this.cells[1].innerHTML);
            input3.value = Number(this.cells[2].innerHTML);

        }

    }
}}
)
();

editSelectedRow();



function editData(){
    var input1=inputs[0];
    var input2=inputs[1];
    var input3=inputs[2];
    myTable.rows[rIndex].cells[0].innerHTML=input1.value;
myTable.rows[rIndex].cells[1].innerHTML=input2.value;
    myTable.rows[rIndex].cells[2].innerHTML=input3.value;

}


function addItem() {

    if (inputs[0].value == "" || inputs[1].value<1 || inputs[2].value<1) {
        alert('All item input must be correctly  filled!')
    }
    else {
        var results = [];
        var row = myTable.insertRow(tableLength);
        var cell = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        for (var i = 0; i < inputs.length; i++) {
            results.push(inputs[i].value);
        }
        cell.innerHTML = results[0];
        cell2.innerHTML = results[1];
        cell3.innerHTML = results[2];

        editSelectedRow();
    }
}
function resetItem() {

   myTable.deleteRow(rIndex);
    tableLength--;
}



function formValidation(x) {
   if( inputs[x].value < 1) {
       alert('Inserted numbers must be positive!')
   }
   else{
       return true;
   }
}


function nameValidation(){
    if (!/^[a-zA-Z]{3,10}$/.test(inputs[0].value)){
        alert('Your item must contain only letters and be between 3 and 10 letters long');
    }
    else {
        return true;
    }


}


function ExportToExcel() {
    $("#myTable").table2excel({
        exclude: ".excludeThisClass",
        name: "Worksheet Name",
        filename: "SomeFile" //do not include extension
    });
}

/*
$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('.wrapper').addClass('fixed');
        $('.aside').addClass('fixed');
        $('.nav').addClass('newClas1');

    } else {


    }
});

*/



/*
$(".section1 > img:gt(0)").hide();

setInterval(function() {
    $('.section1 > img:first')
        .fadeIn(1000)
        .fadeOut(1000)
        .next(1000)
        .fadeIn(1000)
        .fadeOut(1000)
        .next()
        .end()
        .appendTo('.section1');
},  3000);
*/


/*--------------EXPORTING-----------*/
/*
 function ExportToExcel(){
 var htmltable= document.getElementById('myTable');
 var html = htmltable.outerHTML;
 window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));
 }*/
