// Mobile Menu

var clickListener = false;


function openCloseMenu() {
	
	if (clickListener == false) {
		document.getElementById("mobile_menu").style.display = "block";
		clickListener = true;
	} else {
		document.getElementById("mobile_menu").style.display = "none";
		clickListener = false;
	}
	
}

function openCloseItem(e) {
	var innerHTML = document.getElementById(e).innerHTML;
	var htmlParts;
	
	var itemListener = document.getElementById(e).getAttribute("value");
	
	if (itemListener == 0) {
		
		htmlParts = innerHTML.split("▼");
		document.getElementById(e).innerHTML = htmlParts[0] + " &#9650" + htmlParts[1];
		
		document.getElementById(e).firstElementChild.style.display = "block";
		
		document.getElementById(e).setAttribute("value", 1);
		
	} else {
		
		htmlParts = innerHTML.split("▲");
		document.getElementById(e).innerHTML = htmlParts[0] + " &#9660" + htmlParts[1];
		
		document.getElementById(e).firstElementChild.style.display = "none";
		
		document.getElementById(e).setAttribute("value", 0);
		
	}
}

// Sticky Header



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("site-header");

//Get the hidden logo
var logo = document.getElementById("logo-sticky");
var logoHeader = document.getElementById("logo-header");
var aboutText = document.getElementById("head_text");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    logo.style.display = "inline-block";
    logoHeader.style.display = "none";
    aboutText.style.display = "none";
  } else {
    header.classList.remove("sticky");
    logo.style.display = "none";
    logoHeader.style.display = "inline-block";
    aboutText.style.display = "inline-block";
  }
} 