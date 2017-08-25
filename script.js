

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
    console.log(allData); },1000);

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

function countTotals() {

    for (var i = 1; i < tableLength; i++) {
        var aa = Number(document.getElementById("myTable").rows[i].cells[1].innerText);
        var bb = Number(document.getElementById("myTable").rows[i].cells[2].innerText);
        var x = document.getElementById("myTable").rows[i].cells[3];
        x.innerHTML = aa * bb;
        console.log(x);

    }
}


var calculateButtons=document.getElementsByClassName('calcButton');

function calculate(){

for(var i=0; i<tableLength; i++){

        myTable.rows[i].onclick=function () {
            var rIndex=this.rowIndex;
            console.log(rIndex);
        }


/*
        var aa = Number(document.getElementById("myTable").rows[i].cells[1].innerText);
        var bb = Number(document.getElementById("myTable").rows[i].cells[2].innerText);
        var x = document.getElementById("myTable").rows[i+1].cells[3];
        x.innerHTML = aa * bb;
*/
    }



}
calculate();



/*function doTest(){

    var input1 = document.getElementById('form1').getElementsByTagName('input');
    for(var i=0; i<input1.length; i++) {
        results.push(input1[i].value);
    }
   return results;
}
/*var input2=
var input3=*/
var results=[];
function addItem() {
    var input1 = document.getElementById('form1').getElementsByTagName('input');
var row=myTable.insertRow(tableLength);
var cell=row.insertCell(0);
var cell2=row.insertCell(1);
var cell3=row.insertCell(2);
var cell4=row.insertCell(3);


    for(var i=0; i<input1.length; i++) {
        results.push(input1[i].value);
    }
    cell.innerHTML=results[0];
    cell2.innerHTML=results[1];
    cell3.innerHTML=results[2];
cell4.innerHTML='<button class="calcButton" type="button" >Calculate</button>';

}

function displaySelectedRow() {
    
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
