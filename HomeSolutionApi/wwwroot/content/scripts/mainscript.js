var isMainPage = true;
var language = "en";




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
    window.stop("#banner_cover");
    $("#slider-service-load-container").html("");
    $(function () {
        $("#main-service-load-container").load("htmls/About.html");
    });

        console.log("clicked");
        headerAnimationIsActive = false;
        window.scrollTo(0, 0);
    }

    function openHomePage(){
        $("#dm").load("htmls/desktopMain.html");
    }


function openMobileServices(x) {
    var x=0
    switch(x) {
        case 0:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/lawn-care-service.html");
            break;
        case 1:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/pool-cleaning-service-geo.html");
            break;
        case 2:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/plumbing service-geo.html");
            break;
        case 3:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/electrical-service-geo.html");
            break;
        case 4:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/lock-changing-services-geo.html");
            break;
        case 5:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/conditioning-service-geo.html");
            break;
        case 6:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/universal-services-geo.html");
            break;
        case 7:
            $("mobileServices-load-container").html("");
            $("#mobileServices-load-container").load("/htmls/aquarium-cleaning-service-geo.html");
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



    var jsonUrl = "https://localhost:44347/content/json/languagesCaptions.json";
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


        setTimeout(getAllCaptionAndSet, 1000);
    });


    function getAllCaptionAndSet() {
        $.getJSON(jsonUrl, function (result) {
            console.log(result);
            $.each(result, function (i, field) {
                //console.log(i, field);
                //stringed JSON
                const myJSON = JSON.stringify(field);
                //parsed JSON object
                const contentObj = JSON.parse(myJSON);
                //console.log(field.key, field.value["en"]);

                let currentElement = document.getElementById(field.key);
                if (currentElement != null) {

                    currentElement.innerHTML = field.value["en"]
                }

            });
        });
    }
