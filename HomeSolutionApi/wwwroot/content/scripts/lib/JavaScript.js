
// Loop through each HTML file
for (var i = 0; i < htmlFiles.length; i++) {
    // Load the HTML file using AJAX
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the HTML contents
            var parser = new DOMParser();
            var doc = parser.parseFromString(this.responseText, "text/html");

            // Your JSON object
            var myObj = new contentObj

            // Loop through the keys in the JSON object
            for (var key in myObj) {
                if (myObj.hasOwnProperty(key)) {
                    // Select all elements and check if their text content contains the key
                    var elements = doc.querySelectorAll('*');
                    for (var j = 0; j < elements.length; j++) {
                        if (elements[j].textContent.indexOf(key) !== -1) {
                            // Update the text content with the value from the JSON object
                            elements[j].textContent = myObj[key];
                        }
                    }
                }
            }

            // Replace the original HTML file with the modified version
            var htmlString = new XMLSerializer().serializeToString(doc);
            document.getElementsByTagName('html')[0].innerHTML = htmlString;
        }
    };
    xhttp.open("GET", htmlFiles[i], true);
    xhttp.send();
}
