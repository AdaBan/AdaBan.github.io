function changeColor(button, color) {	
	$(button).click(function() {
		$("#color-buttons button").removeClass("selected");	
		$(".main-color").css("background", color);
		$(button).addClass("selected");
	});
}
changeColor("#btn-hazelnut","#d1af94");
changeColor("#btn-blue","#22264b");
changeColor("#btn-olive","#AB8F46");