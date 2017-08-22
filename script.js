

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
