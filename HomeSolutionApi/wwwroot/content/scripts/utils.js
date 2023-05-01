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

function emptyHtml(container,otherCont){
    $(container, otherCont).html("");
}

function loadPageWithCaption(container, path, otherCont ){
    emptyHtml(container, otherCont);

    $(container)
    .load(path, function() {
            getAllCaptionAndSet(path);
        });
}


function getLocalStorage(param) {
    var item = localStorage.getItem(param);
    return item;
}

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
//function scrollToServiceInfo() {
//    const serviceInfoId = document.getElementById("default-service-info");
//    //setTimeout(5000);
//    //location.reload();
//    serviceInfoId.scrollIntoView();
  
   
//}

