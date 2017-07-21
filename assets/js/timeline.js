(function($) {

	$("#p1").click(function (e) {
		e.preventDefault();
		$("#projects").fadeOut(500);
		$("#personal").fadeOut(500, function(){
			$("#resume").fadeIn(1500);
		});
		// return false;
    })

	$("#p2").click(function(e) {
		e.preventDefault();
		$("#resume").fadeOut(500);
		$("#personal").fadeOut(500, function() {
			$("#projects").fadeIn(1500);
		});
		// return false;
	})

	$("#p3").click(function(e) {
		e.preventDefault();
		$("#projects").fadeOut(500);
		$("#resume").fadeOut(500, function() {
			$("#personal").fadeIn(1500);
		});
		// return false;
	})

})(jQuery);