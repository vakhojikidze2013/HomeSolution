function detectScreen() {
    var screenWidth = screen.availWidth;

    if (screenWidth < 550px) {
        //aq chaitvirteba jQuery it mobile main 
    }
    else {
        $(function () {
            $("#desktopMain").load("htmls/deskopMain.html");
        });
    }
    
}