var isMainPage = true;

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
