/*start  navbar mobile */
let leftMainNav = document.getElementById("leftMainNav");
let pre = document.getElementById("pre");
let exit = document.getElementById("exit");
let searchContainer = document.getElementById("search-container");
let search = document.getElementById("search");
let exitSearch = document.getElementById("exit-search");


/*click pre to show navbar */
pre.onclick = function() {
        leftMainNav.style.transform = "translateX(0)"

    }
    /*click exit to hide navbar */
exit.onclick = function() {
        leftMainNav.style.transform = "translateX(-460px)"

    }
    /*end  navbar mobile################## */

/*click search to show navbar search */
search.onclick = function() {
        searchContainer.style.transform = "translate(0)"
    }
    /*click exit to hide navbar */
exitSearch.onclick = function() {
        searchContainer.style.transform = "translate(0,-550px)"
    }
    /* end click search to show navbar search################## */


/*start stiky navbar */
let myButtonToScroll = document.getElementById("scroll-to");

window.onscroll = function() {
        const allmainnav = document.getElementById("allmainnav");
        if (scrollY > 50) {
            allmainnav.classList.add("stiky")

        } else {
            allmainnav.classList.remove("stiky")
        }
        /*end stiky navbar ###################*/
        /*start scroll to top button*/
        /* start window 900 scroll display*/
        if (window.scrollY >= 600) {
            myButtonToScroll.style.display = "block"
        } else {
            myButtonToScroll.style.display = "none"
        }
    }
    /* click  button to scroll top*/
myButtonToScroll.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

/*end scroll to top button################*/
/*start countdown timer */
const countDown = () => {
    //Know the gap between today's date and future date
    const futureDate = new Date("november 28,2021 00:00:00").getTime();
    const nowdate = new Date().getTime();
    const gap = futureDate - nowdate;
    //Know days & hours & minuts & seconds
    const second = 1000;
    const minuts = second * 60;
    const hours = minuts * 60;
    const days = hours * 24;
    //Turn on the timer
    const textDay = Math.floor(gap / days);
    const textHours = Math.floor((gap % days) / hours);
    const textMinuts = Math.floor((gap % hours) / minuts);
    const textSecond = Math.floor((gap % minuts) / second);
    //but to html

    const htmlDay = document.getElementById("days").innerHTML = textDay;
    const htmlHours = document.getElementById("hours").innerHTML = textHours;
    const htmlMinuts = document.getElementById("minutes").innerHTML = textMinuts;
    const htmlSecond = document.getElementById("seconds").innerHTML = textSecond;

}
setInterval(countDown, 1000)
    //start slider prand
var span =document.getElementsByClassName("span");
var div =document.querySelectorAll(".prand img");
var z= 0;

span[0].onclick = function(){
    z++
    for(var i of div ){
if(z== 0){
   i.style.left= "0"
   }
if(z== 1){
   i.style.left= "-340px"
   }
if(z== 2){
   i.style.left= "-570px"
   }
        if(z== 3){
   i.style.left= "-770px"
   }
        if(z== 4){
   i.style.left= "-950px"
   }
        if(z>4){
    z=4
}

    }
}
span[1].onclick = function(){
    z--
    for(var i of div ){
if(z== 0){
   i.style.left= "0"
   }
if(z== 1){
   i.style.left= "-340px"
   }
if(z== 2){
   i.style.left= "-570px"
   }
        if(z== 3){
   i.style.left= "-950px"
   }

        if(z<0){
    z=0
}
    }
}
    //start slider prand








