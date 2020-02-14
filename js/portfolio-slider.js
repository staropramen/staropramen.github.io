window.onload = function() {

    portfolio();
};

var numberOfSlides;
var slideVelocity = 6000;
var logoCarousel;
var isExecuted = true;

// get logo carousel and number of slides
logoCarousel = document.getElementById('slider-portfolio')
numberOfSlides = logoCarousel.childElementCount;;

function portfolio() {
	
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
	
	currentSlide.style.marginLeft = "-100%";

	setTimeout(function(){ 
		var divToAppend = currentSlide;
	    currentSlide.remove();
	   	divToAppend.style.marginLeft = "0%";
	   	var htmlToAppend = divToAppend.outerHTML;
	   	logoCarousel.insertAdjacentHTML('beforeend', htmlToAppend);
    	isExecuted = true;
	}, slideTime);
}

function plusMargin() {

	var slideTime = 700;
	var currentSlide = logoCarousel.firstElementChild;
	isExecuted = false;
	
	currentSlide.style.marginLeft = "0%";

	setTimeout(function(){ 
	    isExecuted = true;
	}, slideTime);
}

function prevSlide() {
	if(isExecuted){
		var slideToInsert = logoCarousel.lastElementChild;
		logoCarousel.lastElementChild.remove();
		slideToInsert.style.marginLeft = "-100%";
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