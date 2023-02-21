var isMainPage = false;

//const parsedServiceInfos = JSON.parse(serviceInfos);

var slideIndex = 1;
showDivs(slideIndex);



function showDivs(n) {

    var i;
    var x = document.getElementsByClassName("service-info-cn");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " w3-white";
}
function plusDivs(n) {
    slideIndex = slideIndex + n;
    showDivs(slideIndex);

}


function currentDiv(n) {
    slideIndex = n
    showDivs(slideIndex);

}