$(document).ready(function(){
	$("#nota").hide();

	$("#corrector").click(function(){
		var e = $("#section").css("background-color");
		$("#nota").append(e);
	});

//End main
});
