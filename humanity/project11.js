
// shrink nav




window.onscroll= function shrink()
{   
   
    let one,two,three,four,five,six;
one = document.getElementById('one');
two = document.getElementById('two');
three = document.querySelectorAll('.navigation ul>li');
four = document.getElementById('four');
five= document.getElementsByClassName('ham');
six = document.querySelector('.navigation ul ul');
   

    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        one.style.height="70px";
        two.style.height="70px";
        two.style.lineHeight="70px";
        two.style.top="55%";

        for(i=0; i< three.length; i++){
            three[i].style.height= '70px';
        }
        four.style.height='70px';
        four.style.lineHeight='70px';
        five[0].style.height="70px";
        five[0].style.lineHeight="70px";
        six.style.top="70px";
        

        
    

        
    }
    else{
        one.style.height="100px";
        two.style.height="60px";
        two.style.lineHeight="60px";
        two.style.top="50%";

       
        for(i=0; i< three.length; i++){
            three[i].style.height= '100px';
        }
        four.style.height='100px';
        four.style.lineHeight='100px';
        five[0].style.height="100px";
        five[0].style.lineHeight="100px";
        six.style.top="100px";
      
    }
}
// toggle7
function hamburger(){
    let hides= document.getElementById('toggle');
    if(hides.style.display=='none'){
        hides.style.display='block';
    }
    else{
        hides.style.display='none';

    }
}
// slider

let s=0;

function sliders(){
    
  
let slider_img= ["project_images/p1.jpg","project_images/p2.jpg","project_images/p3.jpg"];
 
document.getElementById('myslider').src= slider_img[s];

    if(s<2)
    {
    s++;
    }
    else{
        s=0;
    }
}
setInterval(sliders,1500);

// owl_carousel

let small_screen = window.matchMedia('(max-width:904px)');
let big_screen = window.matchMedia('(min-width:905px)');
let emp= document.getElementsByClassName('employee');
let shift= -2;

// for fixing the issue of last employee from small screen to big screen
function big(){
if(big_screen.matches){

    shift= -2;
    for(element of emp)
    {
        element.style.transform=`translateX(${shift}%)`;

     }
  
}
}
big_screen.addEventListener('change',big);

function small(){
    if(small_screen.matches){
    
        shift= -2;
        for(element of emp)
        {
            element.style.transform=`translateX(${shift}%)`;
    
         }
         
    }
    }
    small_screen.addEventListener('change',small);
    

// for right chevron

function right()
{
   

    if(shift>-203)
    {
        shift = shift-100;
        for(element of emp)
        {
            element.style.transform=`translateX(${shift}%)`;

         }
   
    }
    else if(small_screen.matches){
        shift = -402;
        for(element of emp)
        {
            element.style.transform=`translateX(${shift}%)`;
      
         }
      
    }

}
// for left chevron
function left()
{
    if(shift<= -102)
    {
        console.log('leftworks');
        shift= shift+100;
    
        for(element of emp)
        {
        console.log(`left = ${shift}`);

            element.style.transform=`translateX(${shift}%)`;
        }
        
    }
   
}


// modal
function view(){
   document.getElementById('mymodal').style.display="block";
}
function delay_form(){

setTimeout(view,5000);
setTimeout(notify,2000);

};

function hides(){
    document.getElementById('mymodal').style.display= "none";
}

// time


function timing(){
    let time= new Date();
    let current_hours = time.getHours();
    let current_minutes = time.getMinutes();
    let current_seconds = time.getSeconds();
    let current_time = `${current_hours}:${current_minutes}:${current_seconds}`;
    document.getElementById('mytime').innerHTML="<span class = 'fa fa-chevron-circle-right fa-fw fa-lg'></span>"+ current_time;
 
};
setInterval(timing,1000);








// form validation
function validation(){
   
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;

    if( name == null || name == ""){
        alert('enter proper value in name')
        return false;
    } 
    else if(number.length<10 ||number == '' ){
        alert('enter proper digits in number')
        return false;
    }

}

// for setTimeout of fix


function notify(){

    let notifications = document.getElementById('mynotification');
    let  rotates= document.getElementById('myrotate');

    notifications.style.display= "block";
    rotates.style.display= "block";
}

 function closes(){
    let closenotification = document.getElementById('mynotification');
    let closerotate = document.getElementById('myrotate');

     closenotification.style.display="none";
     closerotate.style.display="none";

    
 }





