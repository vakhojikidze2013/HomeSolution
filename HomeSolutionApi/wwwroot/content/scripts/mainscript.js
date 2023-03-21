var isMainPage = true;



function openAboutPage() {
    $("#main-service-load-container").html("");
    $("#banner_cover").html("");
    $("#slider-service-load-container").html("");
    $(function () {
        $("#main-service-load-container").load("htmls/About.html");
    });
    headerAnimationIsActive = false;
    window.scrollTo(0, 0);
    getAllCaptionWait()
}

function openHomePage() {
    location.reload()
}

function openDesktopServices(x) {
    switch (x) {
        case 0:
            
            $("#main-service-load-container").html("");
            $("#slider-service-load-container").html("");
            $("#main-service-load-container").load("/htmls/service-htmls/lawn-care-service.html");
            break;
        case 1:
            $("#main-service-load-container").html("");
            $("#slider-service-load-container").html("");
            $("#main-service-load-container").load("/htmls/service-htmls/pool-cleaning-service.html");
            
            break;
        case 2:
            $("#main-service-load-container").html("");
            $("#slider-service-load-container").html("");
            $("#main-service-load-container").load("/htmls/service-htmls/plumbing-service.html");
        
            break;
        case 3:
            $("#main-service-load-container").html("");
            $("#slider-service-load-container").html("");
            $("#main-service-load-container").load("/htmls/service-htmls/electrical-service.html");
           
            break;
        case 4:
            $("#main-service-load-container").html("");
            $("#slider-service-load-container").html("");
            $("#main-service-load-container").load("/htmls/service-htmls/lock-changing-services.html");
          
            break;
        case 5:
            $("#main-service-load-container").html("");
            $("#slider-service-load-container").html("");
            $("#main-service-load-container").load("/htmls/service-htmls/conditioning-service.html");
            
            break;
        case 6:
            $("#main-service-load-container").html("");
            $("#slider-service-load-container").html("");
            $("#main-service-load-container").load("/htmls/service-htmls/universal-services.html");
      
            break;
        case 7:
            $("#main-service-load-container").html("");
            $("#slider-service-load-container").html("");
            $("#main-service-load-container").load("/htmls/service-htmls/aquarium-cleaning-service.html");
            break;


    }
    getAllCaptionWait()
}


function openMobileServices(x) {
    switch (x) {
        case 0:
            $("mobileServices-load-container").html("");
            $("#main-service-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/service-htmls/lawn-care-service.html");
            $("#main-service-load-container").load("/htmls/service-htmls/lawn-care-service.html");
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
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("htmls/service-htmls/electrical-service.html");
            break;
        case 4:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("htmls/service-htmls/lock-changing-services.html");
            break;
        case 5:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("htmls/service-htmls/conditioning-service.html");
            break;
        case 6:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("htmls/service-htmls/universal-services.html");
            
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
    $("#main-service-load-container").html("");
    $("#banner_cover").html("");
    window.stop("#banner_cover");
    $("#slider-service-load-container").html("");
    $(function () {
        $("#main-service-load-container").load("htmls/gallerySlider.html");
    });
}
function openScrollAnim() {
    $("#main-service-load-container").html("");
    $("#banner_cover").html("");
    window.stop("#banner_cover");
    $("#slider-service-load-container").html("");
    $(function () {
        $("#main-service-load-container").load("htmls/mobileScrollAnim.html");
    });
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
let currentLanguage = "en";

// function getAllCaptionWait() {
//     setTimeout(getAllCaptionAndSet, 1499);
// }

// window.addEventListener("DOMContentLoaded", () => {
//     // Your code here
//     getAllCaptionAndSet();
//   });

// var captionsSetInterval = setInterval(() => {
//     if (isPageLoaded){
//         getAllCaptionAndSet();
//         isPageLoaded = false;
//     }
// }, 200);
