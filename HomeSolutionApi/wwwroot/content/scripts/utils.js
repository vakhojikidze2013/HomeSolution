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
            }

        });
    });
}

function emptyHtml(container){
    $(container).html("");
}

function loadPageWithCaption(container, path){
    emptyHtml(container);

    $(container)
    .load(path, function() {
            getAllCaptionAndSet(path);
        });
}