
// Define the click event handler for the first button
var divConainer1 = document.querySelector("#pothoHiden");
let isClicked1 = true;
let Hide = function() {
  if (isClicked1) {
    // Hide the previously shown element (if any)
    var prevDivContainer = document.querySelector(".shown");
    if (prevDivContainer) {
      prevDivContainer.classList.remove("shown");
      prevDivContainer.style.display = 'none';
    }

    // Show the current element
    divConainer1.classList.add("shown");
    divConainer1.style.display = 'block';

    isClicked1 = false;
  } else {
    divConainer1.classList.remove("shown");
    divConainer1.style.display = 'none';
    isClicked1 = true;
  }
}

// Define the click event handler for the second button
var divConainer2 = document.querySelector("#pothoHiden2");
let isClicked2 = true;
let show = function() {
  if (isClicked2) {
    // Hide the previously shown element (if any)
    var prevDivContainer = document.querySelector(".shown");
    if (prevDivContainer) {
      prevDivContainer.classList.remove("shown");
      prevDivContainer.style.display = 'none';
    }

    // Show the current element
    divConainer2.classList.add("shown");
    divConainer2.style.display = 'block';

    isClicked2 = false;
  } else {
    divConainer2.classList.remove("shown");
    divConainer2.style.display = 'none';
    isClicked2 = true;
  }
}

// Define the click event handler for the third button
var divConainer3 = document.querySelector("#pothoHiden3");
let isClicked3 = true;
let desc111Button = function() {
  if (isClicked3) {
    // Hide the previously shown element (if any)
    var prevDivContainer = document.querySelector(".shown");
    if (prevDivContainer) {
      prevDivContainer.classList.remove("shown");
      prevDivContainer.style.display = 'none';
    }

    // Show the current element
    divConainer3.classList.add("shown");
    divConainer3.style.display = 'block';

    isClicked3 = false;
  } else {
    divConainer3.classList.remove("shown");
    divConainer3.style.display = 'none';
    isClicked3 = true;
  }
}

// Define the click event handler for the fourth button
var divConainer4 = document.querySelector("#pothoHiden4");
let isClicked4 = true;
let showOrHide = function() {
  if (isClicked4) {
    // Hide the previously shown element (if any)
    var prevDivContainer = document.querySelector(".shown");
    if (prevDivContainer) {
      prevDivContainer.classList.remove("shown");
      prevDivContainer.style.display = 'none';
    }

    // Show the current element
    divConainer4.classList.add("shown");
    divConainer4.style.display = 'block';

    isClicked4 = false;
  } else {
    divConainer4.classList.remove("shown");
    divConainer4.style.display = 'none';
    isClicked4 = true;
  }
}