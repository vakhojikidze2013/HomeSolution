function isLocalHost(){
    const localHost = "localhost";
    let currentUrl = window.location.href;

    return currentUrl.includes(localHost);
}

function getMainUrlDomain(){
    if (isLocalHost()){
        return window.location.href;
    }
    else{
        return "https://comfortexpress.ge/";
    }
}

function getAllCaptionAndSet(path) {
    $.getJSON(`${getMainUrlDomain()}content/json/languagesCaptions.json`, function (result) {

        $.each(result, function (i, field) {
            let currentElement = document.getElementById(field.key);
            if (currentElement != null) {

                currentElement.innerHTML = field.value[currentLanguage]

                const mychosenlang = {currentLanguage};
                localStorage.setItem("localLang","getAllCaptionAndSet(path)")


                let chosenlangtext = localStorage.getItem("Locallang");
                document.getElementsByClassName("about.page.list")
            }
        });
    });
}

function emptyHtml(container,otherCont){
    $(container, otherCont).html("");
}

async function loadPageWithCaption(container, path, otherCont, customFunction){
    emptyHtml(container, otherCont);

    $(container)
    .load(path, async function() {
        getAllCaptionAndSet(path);
        if (customFunction != null || customFunction != undefined) {
            customFunction();
        }
    });
}

//function saveCurrentLanguage() {

//    var isGeoclicked = false;

//    if (!isGeoclicked) {

//        localStorage.setItem ("lang","lang")
//    }


//}

