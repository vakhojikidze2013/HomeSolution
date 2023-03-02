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
            const myJSON = JSON.stringify(field);
            const parsedJSON = JSON.parse(myJSON);

            var textCaptions = Document.getLanguageCaption
            if (parsedJSON.key.match(textCaptions)) {
                console.log(parsedJSON.value)
            }
        });
    });  
     
});