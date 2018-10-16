$(document).ready(function(){
	$("nav ul").hide()
	$("nav div").click(function(){
	$("nav ul").toggle(500);
	$("nav div p").toggleClass("menu-toggle")
});
})
