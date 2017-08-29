var countDownaDate = new Date("August 20,2018 15:37:12").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var remained = countDownaDate - now;

    var allData = {
        'days': Math.floor(remained / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((remained % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        'minutes': Math.floor((remained % (1000 * 60 * 60)) / (1000 * 60)),
        'seconds': ("0" + Math.floor((remained % (1000 * 60)) / 1000)).slice(-2)
    };


    document.getElementById('days').innerHTML = allData.days;
    document.getElementById('hours').innerHTML = allData.hours;
    document.getElementById('minutes').innerHTML = allData.minutes;
    document.getElementById('seconds').innerHTML = allData.seconds;
}, 1000);

$(document).ready(function () {
    slideShow();
})


var slides = $('.slideShow>li');
var slideCount = 0;
var totalSlides = 3;


function slideShow() {
    slides.eq(slideCount).fadeIn(2000).fadeOut(1000, function () {
        slideCount < totalSlides ? slideCount++ : slideCount = 0;
        slideShow();

    });

};


$(".anch1").click(function () {
    $('html,body').animate(
        {
            scrollTop: $('.wrapper').offset().top
        }, 'slow'
    );

})

/*----------------DYNAMIC TABLE--------------------------------*/

var myTable = document.getElementById("myTable");
var tableLength = document.getElementById("myTable").rows.length;
var rIndex = '';
var inputs = document.getElementById('form1').getElementsByTagName('input');
var formValidationAlert=document.getElementsByClassName('formAlert');

function countTotals() {
    for (var i = 1; i < document.getElementById("myTable").rows.length; i++) {

        var quantityInputValue = parseInt(myTable.rows[i].cells[1].innerText);
        var priceInputValue = parseInt(myTable.rows[i].cells[2].innerText);
        var countResult = myTable.rows[i].cells[3];
        countResult.innerHTML = quantityInputValue * priceInputValue;
        console.log(countResult);

    }
}
/*
function countTotals(a,b) {

    for (var i = 1; i < document.getElementById('myTable').rows.length; i++) {

        console.log( parseInt(a.innerText) +parseInt(b.innerText));
       /* var x = myTable.rows[i].cells[3];
        x.innerHTML = aa * bb;
        console.log(x);

    }
}

*/
var editSelectedRow = (function () {
        var itemInput = inputs[0];
        var quantityInput = inputs[1];
        var priceInput = inputs[2];

        return function () {
            for (var i = 0; i < document.getElementById('myTable').rows.length; i++) {

                myTable.rows[i].onclick = function () {

                    rIndex = this.rowIndex;
                    itemInput.value = this.cells[0].innerHTML;
                    quantityInput.value = Number(this.cells[1].innerHTML);
                    priceInput.value = Number(this.cells[2].innerHTML);

                }

            }
        }
    })
();

editSelectedRow();


function editData() {
    var itemInput = inputs[0];
    var quantityInput = inputs[1];
    var priceInput = inputs[2];
    myTable.rows[rIndex].cells[0].innerHTML = itemInput.value;
    myTable.rows[rIndex].cells[1].innerHTML = quantityInput.value;
    myTable.rows[rIndex].cells[2].innerHTML = priceInput.value;

}


function addItem() {

    if (inputs[0].value == "" || inputs[1].value < 1 || inputs[2].value < 1) {
        alert('All item input must be correctly  filled!')
    }
    else {
        var results = [];
        var row = myTable.insertRow(tableLength);
        var cell = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4=row.insertCell(3);


        for (var i = 0; i < inputs.length; i++) {
            results.push(inputs[i].value);
        }
        cell.innerHTML = results[0];
        cell2.innerHTML = results[1];
        cell3.innerHTML = results[2];
        cell4.innerHTML="";
        editSelectedRow();
    }
}

function resetItem() {
    myTable.deleteRow(rIndex);
}

function nameValidation() {
    if (!/^[a-zA-Z]{3,10}$/.test(inputs[0].value)) {
        inputs[0].style.border='1px solid red';
        formValidationAlert[0].innerHTML='Item name must contain only letters and be at least 3 letters long!';
    }
    else {
        inputs[0].style.border='1px solid black';
        formValidationAlert[0].style.display='none'
    }


}

function numbersValidation(x) {
    if (inputs[x].value < 1) {
        inputs[x].style.border='1px solid red';
        formValidationAlert[x].innerHTML='Inserted numbers must be positive!';
    }
    else {
        inputs[x].style.border='1px solid black';
        formValidationAlert[x].style.display='none'
    }

}


function ExportToExcel() {
    $("#myTable").table2excel({
        exclude: ".excludeThisClass",
        name: "Worksheet Name",
        filename: "SomeFile" //do not include extension
    });
}

var sumTotal = 0;
function sum() {

    for (var i = 1; i < document.getElementById('myTable').rows.length; i++) {
        sumTotal += Number(myTable.rows[i].cells[3].innerHTML);
    }
    document.getElementById('result').innerHTML = 'You have to pay ' + sumTotal;
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


/*
function createText(word) {
var newWord=document.createElement('h2');
var newWordValue=document.createTextNode(word);
newWord.appendChild(newWordValue);
document.body.appendChild(newWord);

}
*/




