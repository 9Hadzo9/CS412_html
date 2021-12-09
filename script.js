
/*  variable, if else statement,  jQuery amination, function,  event listener */
const topbtn1 = document.querySelector("#topbtn1");

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
       $("#topbtn1").css({"opacity" : "1"})
    }
    else if($(this).scrollTop()<199){
      $("#topbtn1").css({"opacity" : "0"})
   }
  })
  })

topbtn1.addEventListener("click", function() {
  

  $("html, body").animate({scrollTop:0 },50);
  
});

/*  arrays, */

const text1 = document.getElementById("info1");
const text2 = document.getElementById("info2");
const text3 = document.getElementById("info3");

const textch = "06/01/2001";
const textch1 = " Bosniak";
const textch2= "  Male";

let indx = 1;

const textarr = [
  text1,
  text2,
  text3
  
];

const arr = [
  textch,
  textch1,
  textch2
  
];

setInterval(writeText,400);

/*  for loop */

function writeText(){

  for(let i =0; i<=2; i++){

  textarr[i].innerText = arr[i].slice(0,indx);
  setTimeout(2000);
  indx++;
  
  }
  if(indx > 24){
    indx =0;}

}

/*  for looop, javascript global  object */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/*  functions, jQuery */

function setRandomColor() {
  $("#colorpad").css("color", getRandomColor());
}

function setRandomBackColor() {
  $("#colorpadback").css("background-color", getRandomColor());
}

/*  switch statement, Built-in Objects  Document OM */

switch(color){
  case "#FF0000":
    document.getElementById("colorspan").innerHTML="red";
    break;
  case "#00FF00":
    document.getElementById("colorspan").innerHTML="green";
    break;
  case "#0000FF":
    document.getElementById("colorspan").innerHTML="blue";
    break;
  case "#FFFF00":
      document.getElementById("colorspan").innerHTML="yellow";
      break;
  default:
    document.getElementById("colorspan").innerHTML="default";
    break;


}

/* 0bject */

const profile = {
  firstName: "Harun",
  surName: "Hadzo",
  age: 20,
  skinColor: "white"

};

var name = profile.firstName;
profile.age = 21;
profile["surName"] = "Hadžo";


/*content Panels */

/*
$('.tab-list').each(function() {
var $this = $(this);
var $tab = $this.find('li.active');
var $link = $tab.find('a');
var $panel = $($link.attr('href'));

$this.on('click', '.tab-control', function(e){
  e.preventDefault();
  var $link = $(this);
  var id = this.hash;

  if(id && !$link.is('.active')){
    $panel.removeClass('active');
    $tab.removeClass('active');

    $panel = $(id).addClass('active');
    $tab = $link.parent().addClass('active');

  }

});
});  */


function openShortcut(evt, shortcut) {
  
  var i;
 
  var content = document.getElementsByClassName("tabcontent");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  var links = document.getElementsByClassName("tablinks");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }

  document.getElementById(shortcut).style.display = "block";
  evt.currentTarget.className += " active";
}






