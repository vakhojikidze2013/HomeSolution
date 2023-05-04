var isMainPage = true;
var apperance = 0;


function openAboutPage() {

    closeAboutPage();
    console.log(apperance);
    loadPageWithCaption(
        "#about-load-containter",
        "htmls/About.html");

    apperance++;
    
    //$("#banner_cover").html("");
    //loadPageWithCaption(
    //    "#slider-service-load-container");
    //headerAnimationIsActive = false;
    //window.scrollTo(0, 0); 
}
function closeAboutPage() {
if (apperance >= 1) location.reload();
}

function openMobileAboutPage() {

    loadPageWithCaption(
        "#mobileServices-load-container",
        "htmls/About.html");
    window.scrollTo(0, 0);
}

function openHomePage() {
    location.reload()
}

function openDesktopServices(x) {
    switch (x) {
        case 0:
            loadPageWithCaption(
                "#main-service-load-container",
                "/htmls/service-htmls/lawn-care-service.html");
            loadPageWithCaption(
                "#slider-service-load-container");

            break;
        case 1:
            loadPageWithCaption(
                "#main-service-load-container",
                "/htmls/service-htmls/pool-cleaning-service.html");
            loadPageWithCaption(
                "#slider-service-load-container");
         
            break;
        case 2:
            loadPageWithCaption(
                "#main-service-load-container",
                "/htmls/service-htmls/plumbing-service.html");
            loadPageWithCaption(
                "#slider-service-load-container");

            break;
        case 3:
            loadPageWithCaption(
                "#main-service-load-container",
                "/htmls/service-htmls/electrical-service.html");
            loadPageWithCaption(
                "#slider-service-load-container");

            break;
        case 4:
            loadPageWithCaption(
                "#main-service-load-container",
                "/htmls/service-htmls/lock-changing-services.html");
            loadPageWithCaption(
                "#slider-service-load-container"); 
          
            break;
        case 5:
            loadPageWithCaption(
                "#main-service-load-container",
                "/htmls/service-htmls/conditioning-service.html");
            loadPageWithCaption(
                "#slider-service-load-container"); 
            
            break;
        case 6:
            loadPageWithCaption(
                "#main-service-load-container",
                "/htmls/service-htmls/universal-services.html");
            loadPageWithCaption(
                "#slider-service-load-container"); 
      
            break;
        case 7:
            loadPageWithCaption(
                "#main-service-load-container",
                "/htmls/service-htmls/aquarium-cleaning-service.html");
            loadPageWithCaption(
                "#slider-service-load-container"); 
            break;


    }
    getAllCaptionWait()
}


function openMobileServices(x) {
    switch (x) {
        case 0:
            loadPageWithCaption(
                "#mobileServices-load-container",
                "/htmls/service-htmls/lawn-care-service.html");
            loadPageWithCaption(
                "#main-service-load-container",
                "/htmls/service-htmls/lawn-care-service.html");

            break;
        case 1:
            loadPageWithCaption(
                "#mobileServices-load-container", 
                "htmls/service-htmls/pool-cleaning-service.html");
            break;
        case 2:
            loadPageWithCaption(
                "#mobileServices-load-container", 
                "htmls/service-htmls/plumbing-service.html");
            break;
        case 3:
            loadPageWithCaption(
                "#mobileServices-load-container",
                "htmls/service-htmls/electrical-service.html");
            break;
        case 4:
            loadPageWithCaption(
                "#mobileServices-load-container",
                "htmls/service-htmls/lock-changing-services.html");
            break;
        case 5:
            loadPageWithCaption(
                "#mobileServices-load-container",
                "htmls/service-htmls/conditioning-service.html");
            break;
        case 6:
            loadPageWithCaption(
                "#mobileServices-load-container",
            "htmls/service-htmls/universal-services.html");
            
            break;
        case 7:
            $("mobileServices-load-container").html("");

            $("#mobileServices-load-container")
            .load("htmls/service-htmls/aquarium-cleaning-service.html", function() {
                    getAllCaptionAndSet();
                });
            
            break;

    }
}

function openGalleryPage() {

    $("#banner_cover").html("");
    loadPageWithCaption(
        "#main-service-load-container",
        "htmls/gallerySlider.html");
    loadPageWithCaption(
        "#slider-service-load-container");

}
function openMobileGalleryPage() {
    loadPageWithCaption(
        "#mobileServices-load-container",
        "htmls/mobileScrollAnim.html");

}

function openScrollAnim() {
    $("#banner_cover").html("");
    loadPageWithCaption(
        "#main-service-load-container",
        "htmls/mobileScrollAnim.html");
    loadPageWithCaption(
        "#slider-service-load-container");

}

$(document).ready(function () {
    // An array of HTML files to load
    var htmlFiles = [
        "htmls/header.html",
        "htmls/footer.html",
        "htmls/about.html",
        "htmls/servicePage.html",
        "htmls/serviceSection.html",
        "htmls/serviceSlider.html",
        "htmls/mobileFooter.html",
        "htmls/mobileMain.html",
        "htmls/mobileServices.html",
        "htmls/lawn-care-service.html"];
});


// Define a variable to store the current language
var currentLanguage = "en";

// function getAllCaptionWait() {
//     setTimeout(getAllCaptionAndSet, 1499);
// }

// window.addEventListener("DOMContentLoaded", () => {
//     // Your code here
//     getAllCaptionAndSet();
//   });
//adasdad
// var captionsSetInterval = setInterval(() => {
//     if (isPageLoaded){
//         getAllCaptionAndSet();
//         isPageLoaded = false;
//     }
// }, 200);

//function scrollAnimation() {

//    $("#dm").html("");
//    loadPageWithCaption("#dm", "/htmls/desktopMain.html", null, function () {
//        setTimeout(() => {
//            $('html, body').animate({
//                scrollTop: $("#slider-service-load-container").offset().top
//            }, 500);

//        }, 250)
//    });
//}

function scrollAnimation() {
    // Store flag in sessionStorage
    sessionStorage.setItem('shouldScroll', true);

    // Reload the page
    location.reload();
}

window.onload = function () {
    if (sessionStorage.getItem('shouldScroll')) {
        $('html, body').animate({ scrollTop: $('#slider-service-load-container').offset().top }, 'slow');
        sessionStorage.removeItem('shouldScroll');
    }
};

//var backButtonCount = 1;
//window.addEventListener('pageshow', function (event) {
    
//    if (event.persisted && (window.performance
//        && window.performance.navigation.type === 2)) {
     
//        backButtonCount++;
//    }
//    if (backButtonCount > 1) {
//        window.history.go(-backButtonCount);
//    } else {
//        location.reload();    }
//});


