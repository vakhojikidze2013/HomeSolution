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
    $(document).ready(function () {
        $(".services").click((info) => {
            let currentClickIdInfo = info.currentTarget.id;
            window.location.href = `servicePage.html?${currentClickIdInfo}`;

        });
    });


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

getLanguageCaption();
function getLanguageCaption(captionKey) {
    console.log("clickedasasasa");
    $.getJSON("https://localhost:44347/content/json/languagesCaptions.json"), function (json) {

        var as = $(json).filter(function (i, n) { return n.website === captionKey });



    for (var i = 0; i < as.length; i++) {
        alert(as[i].name + "         " + as[i].website)
        }
    
    }
    


    

}

$(document).ready(function () {
    
    $.getJSON("https://localhost:44347/content/json/languagesCaptions.json", function (result) {
        $.each(result, function (i, field) {

            /*alert(field.key);*/
            });
        });
    
});