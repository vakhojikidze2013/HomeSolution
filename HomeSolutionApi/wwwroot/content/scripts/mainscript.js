var isMainPage = true;





function openServicePage() {

    window.stop("htmls/serviceSection.html");
    $("#banner_cover").html("");
    $("#slider-service-load-container").html("");
    $(function () {
        $("#main-service-load-container").load("htmls/servicePage.html");
    });

    headerAnimationIsActive = false;
    window.scrollTo(0, 0);
}

function openAboutPage() {
    $("#main-service-load-container").html("");
    $("#banner_cover").html("");
    $("#slider-service-load-container").html("");
    $(function () {
        $("#main-service-load-container").load("htmls/About.html");
    });
    headerAnimationIsActive = false;
    window.scrollTo(0, 0);
}

function openHomePage() {
    location.reload()
}


function openMobileServices(x) {
    switch (x) {
        case 0:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/service-htmls/lawn-care-service.html");
            break;
        case 1:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("htmls/service-htmls/pool-cleaning-service.html");
            break;
        case 2:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("htmls/service-htmls/plumbing-service.html");
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
            $("#mobileServices-load-container").load("htmls/service-htmls/aquarium-cleaning-service.html");
            break;


    }
    getAllCaptionWait()
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



var jsonUrl = `${getMainUrlDomain()}content/json/languagesCaptions.json`;
console.log(jsonUrl);
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

    getAllCaptionWait()

});


// Define a variable to store the current language
let currentLanguage = "en";

function getAllCaptionWait() {
    setTimeout(getAllCaptionAndSet, 500);
}

function getAllCaptionAndSet() {
    $.getJSON(jsonUrl, function (result) {

        $.each(result, function (i, field) {
            //console.log(i, field);
            //stringed JSON
            const myJSON = JSON.stringify(field);
            //parsed JSON object
            const contentObj = JSON.parse(myJSON);
            //console.log(field.key, field.value["en"]);

            let currentElement = document.getElementById(field.key);
            if (currentElement != null) {

                currentElement.innerHTML = field.value[currentLanguage]
            }

        });
    });
}