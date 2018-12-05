$(document).click(function(e) {
	if (!$(e.target).is('.panel-body')) {
    	$('.collapse').collapse('hide');	    
    }
});