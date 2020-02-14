


window.onload = function() {

	slideshow();
	carousel();
};


// !!!! Slideshow Code !!!!
// Define number of slides
var slidesInShow = 3;
var duration = 6000;

function slideshow() {
	// Detect slideshow
	var sliderDiv = document.getElementById('slider');
	var sliderDiv2 = document.getElementById('slider-2');
	sliderDiv.style.backgroundImage = "url(/slides/slide-1.jpg)";

	var counter = 2;
	var isOne = true;
	var i = setInterval(function(){
	   
	    if(counter <= slidesInShow) {
	        if(isOne){
	        	sliderDiv2.style.backgroundImage = "url(/slides/slide-" + counter + ".jpg)";
	        	slideIn(sliderDiv2);
	        	slideOut(sliderDiv);
	        	isOne = false;
	        }else {
	        	sliderDiv.style.backgroundImage = "url(/slides/slide-" + counter + ".jpg)";
	        	slideIn(sliderDiv);
	        	slideOut(sliderDiv2);
	        	isOne = true;
	        }
	        counter++;
	    } else {
	    	counter = 1;
	    	if(isOne){
	        	sliderDiv2.style.backgroundImage = "url(/slides/slide-" + counter + ".jpg)";
	        	slideIn(sliderDiv2);
	        	slideOut(sliderDiv);
	        	isOne = false;
	        }else {
	        	sliderDiv.style.backgroundImage = "url(/slides/slide-" + counter + ".jpg)";
	        	slideIn(sliderDiv);
	        	slideOut(sliderDiv2);
	        	isOne = true;
	        }
	    	counter++;
	    }
	}, duration);
}

function slideIn(divToSlide) {
	var widthBigger = 0;
	var widthStep = 0.02;
	var finalWidth = 1 - widthStep;
	var i = setInterval(function(){
	   if(widthBigger <= finalWidth){
	   		divToSlide.style.opacity = widthBigger;
	   		widthBigger = widthBigger + widthStep;
	   } else {
	   	divToSlide.style.opacity = "1";
	   	clearInterval(i);
	   }
	}, 40);
}

function slideOut(divToSlide) {
	var widthBigger = 1;
	var widthStep = 0.02;
	var finalWidth = 0 + widthStep;
	var i = setInterval(function(){
	   if(widthBigger >= finalWidth){
	   		divToSlide.style.opacity = widthBigger;
	   		widthBigger = widthBigger - widthStep;
	   } else {
	   	divToSlide.style.opacity = "0";
	   	clearInterval(i);
	   }
	}, 40);
}


// !!!! Carousel Code
// Global

var numberOfSlides;
var slideVelocity = 6000;
var logoCarousel;
var isExecuted = true;

// get logo carousel and number of slides
logoCarousel = document.getElementById('logo_carousel')
numberOfSlides = logoCarousel.childElementCount;;

function carousel() {
	
	slideDivs(slideVelocity);
}


//Automatic sliding

function slideDivs(slideVelocity) {

	var counter = 1;
	var i = setInterval(function(){

	    if(isExecuted){
	    	if(counter < numberOfSlides){
		    	minusMargin();
		    	counter++;
		    } else {
		    	minusMargin();
		    	counter = 1;
		    }
	    }else {
	    	
	    }

	}, slideVelocity);

}

function minusMargin() {

	var slideTime = 700;
	var currentSlide = logoCarousel.firstElementChild;
	isExecuted = false;
	
	currentSlide.style.marginLeft = "-32%";

	setTimeout(function(){ 
		var divToAppend = currentSlide;
	    currentSlide.remove();
	   	divToAppend.style.marginLeft = "1%";
	   	var htmlToAppend = divToAppend.outerHTML;
	   	logoCarousel.insertAdjacentHTML('beforeend', htmlToAppend);
    	isExecuted = true;
	}, slideTime);
}

function plusMargin() {

	var slideTime = 700;
	var currentSlide = logo_carousel.firstElementChild;
	isExecuted = false;
	
	currentSlide.style.marginLeft = "1%";

	setTimeout(function(){ 
	    isExecuted = true;
	}, slideTime);
}

function prevSlide() {
	if(isExecuted){
		var slideToInsert = logoCarousel.lastElementChild;
		logoCarousel.lastElementChild.remove();
		slideToInsert.style.marginLeft = "-32%";
		var htmlToInsert = slideToInsert.outerHTML;
		
		logoCarousel.insertAdjacentHTML('afterbegin', htmlToInsert);

		setTimeout(function(){ 
		    plusMargin();
		}, 100);
	}
}

function nextSlide() {
	if(isExecuted){
		isExecuted = false;
		minusMargin();
	}
}