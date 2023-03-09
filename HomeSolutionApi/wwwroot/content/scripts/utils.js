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
        return "https://comfortexpress.ge";
    }
}