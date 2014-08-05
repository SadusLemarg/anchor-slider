//STANDARD SETTINGS ====================================================================================================
var standardSpeed   = 600;
var standardRetreat = 0;

//TRIGGER ====================================================================================================
$(document).ready(function(){
	
	$('a.anchor-slider').click(function(){
		
		anchorSlide($(this));
		
	});
	
});

//MAIN FUNCTION ====================================================================================================
function anchorSlide(self) {
		
	var destination = self.attr('href');
	var speed       = self.attr('data-speed');
	var retreat     = self.attr('data-retreat');
	
	if(speed == undefined) speed = standardSpeed;
	if(retreat == undefined) retreat = standardRetreat;
	
	var target = $(destination).offset().top - retreat;
	
	$('html:not(:animated), body:not(:animated)').animate({
		scrollTop: target
	}, speed);
	
	return true;
	
}