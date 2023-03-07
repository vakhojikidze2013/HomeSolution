var isMainPage = true;
var language = "en";

//detecting which screen to use
// function detectScreen() {
//    var screenWidth = screen.availWidth;

//    if (screenWidth < 550) {

//        $("#mobileMain").load("mobileMain.html");

//    }
//    else {

//        $("#desktopMain").load("content/htmls/desktopMain.html");

//    }
//}


    //Giving a click using jQuery 3.3.1
    // $(document).ready(function () {
    //     $(".services").click((info) => {
    //         let currentClickIdInfo = info.currentTarget.id;
    //         window.location.href = `servicePage.html?${currentClickIdInfo}`;

    //     });
    // });


    function openServicePage() {

        window.stop("htmls/serviceSection.html");
        $("#banner_cover").html("");
        $("#slider-service-load-container").html("");
        $(function () {
            $("#main-service-load-container").load("htmls/servicePage.html");
        });

        console.log("clicked");
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
            $("#mobileServices-load-container").load("/htmls/lawn-care-service-geo.html");
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
//getLanguageCaption();
//function getLanguageCaption(captionKey) {
//    //console.log("clickedasasasa");
//    $.getJSON("https://localhost:44347/content/json/languagesCaptions.json"), function (json) {

//        var as = $(json).filter(function (i, n) { return n.website === captionKey });



//    for (var i = 0; i < as.length; i++) {
//        alert(as[i].name + "         " + as[i].website)
//        }
    
//    }
    


    

/*}*/


//getLanguageCaption();
//function getLanguageCaption(captionKey) {
//    console.log("clickedasasasa");
//    $.getJSON("https://localhost:44347/content/json/languagesCaptions.json"), function (json) {

//        var as = $(json).filter(function (i, n) { return n.website === captionKey });



//        for (var i = 0; i < as.length; i++) {
//            alert(as[i].name + "         " + as[i].website)
//        }

//    }





////}

//$(document).ready(function () {

//    $.getJSON("https://localhost:44347/content/json/languagesCaptions.json", function (result) {
//        $.each(result, function (i, field) {

//            /*alert(field.key);*/
//        });
//    });

//});
