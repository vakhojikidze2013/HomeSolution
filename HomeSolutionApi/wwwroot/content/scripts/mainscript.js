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
            //stringed JSON
            const myJSON = JSON.stringify(field);
            //parsed JSON object
            const contentObj = JSON.parse(myJSON);
            // An array of HTML files to load
            var htmlFiles = ["htmls/index.html", "htmls/desktopMain.html", "htmls/header.html", "htmls/footer.html", "htmls/about.html", "htmls/servicePage.html", "htmls/serviceSection.html", "htmls/serviceSlider.html", "htmls/mobileFooter.html", "htmls/mobileMain.html", "htmls/mobileServices.html", "htmls/lawn-care-service.html"];

            fetch(htmlFiles[i])
                .then(response => response.text())
                .then(data => {
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(data, "text/html");


                    // rest of the code here
                    if (this.readyState == 4 && this.status == 200) {
                        // Parse the HTML contents
                        var parser = new DOMParser();
                        var doc = parser.parseFromString(this.responseText, "text/html");

                       

                        // Loop through the keys in the JSON object
                        for (var key in contentObj) {
                            if (contentObj.hasOwnProperty(key)) {
                                // Select all elements and check if their text content contains the key
                                var elements = doc.querySelectorAll('*');
                                for (var j = 0; j < elements.length; j++) {
                                    if (elements[j].textContent.indexOf(key) !== -1) {
                                        // Update the text content with the value from the JSON object
                                        elements[j].textContent = contentObj[key];
                                    }
                                }
                            }
                        }
                    }
                    
                    console.log(elements);
                    console.log(contentObj);
                    console.log(doc);
                    console.log(contentObj.key);
                    console.log(contentObj.hasOwnProperty(key));

                });
        });

    });
});