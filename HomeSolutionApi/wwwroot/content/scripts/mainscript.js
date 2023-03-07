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

function openGalleryPage() {
    $("#main-service-load-container").html("");
    $("#banner_cover").html("");
    window.stop("#banner_cover");
    $("#slider-service-load-container").html("");
    $(function () {
        $("#main-service-load-container").load("htmls/gallerySlider.html");
    });



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

    const jsonUrl = "https://localhost:44347/content/json/languagesCaptions.json";
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


                //for (var index = 0; index < htmlFiles.length; index++){
                //    fetch(htmlFiles[index])
                //    .then(response => response.text())
                //    .then(data => {
                //        var parser = new DOMParser();
                //        var doc = parser.parseFromString(data, "text/html");

                //        // // rest of the code here
                //        // if (!(this.readyState == 4 && this.status == 200)){
                //        //     return;
                //        // }

                //        // Parse the HTML contents
                //        var parser = new DOMParser();
                //        var doc = parser.parseFromString(this.responseText, "text/html");

                //        // Loop through the keys in the JSON object
                //        for (var key in contentObj) {
                //            if (!(contentObj.hasOwnProperty(key))){
                //                console.log("armushaobs amis dedac " + contentObj) 
                //                continue;
                //            }

                //            console.log("Checking for key:", key);

                //            // Select all elements and check if their text content contains the key
                //            var elements = doc.querySelectorAll('*');

                //            console.log("Elements:", elements);

                //            for (var j = 0; j < elements.length; j++) {
                //                if (elements[j].textContent.indexOf(key) !== -1) {
                //                    // Update the text content with the value from the JSON object
                //                    elements[j].textContent = contentObj[key];
                //                }
                //            }
                //        }
                //    });
                //}
            });
        });
    }
}