
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['landing', 'contact'],
		paddingTop: '50px',
    	paddingBottom: '50px',
	});

	resizeDiv();
});


window.onresize = function(event) {

}

function resizeDiv() {
	margin = 50;
	vpw = $(window).width();
	vph = $(window).height();
	$(".grid").css({"height": vph - 2*margin + "px"});
	$(".grid").css({"width": vpw - 2*margin + "px"});
	$("#hello-svg").css({"height": vph - 2*margin + "px"});
	$("#hello-svg").css({"width": vpw - 2*margin + "px"});

}
