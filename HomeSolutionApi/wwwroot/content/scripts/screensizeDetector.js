function detectScreen() {
    var screenWidth = screen.availWidth;

    if (screenWidth < 550) {
        $(function () {
            $("#mobileMain").load("mobileMain.html");
        });
    }
    else {
        $(function () {
            $("#desktopMain").load("desktopMain.html");
        });
    }
    
}