var isMainPage = true;

//Giving a click using jQuery 3.3.1
$(document).ready(function(){
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
    
}
