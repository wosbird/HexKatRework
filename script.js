/* Hamburger Menu */

$(".menu").click(function() {
	$(".menu").toggleClass("active");
	$(".navbar-menu").toggleClass("active");
});

/* End */


$("#skillbutton1").on("click", function(){
	$("#IA").slideToggle();

})

$("#skillbutton2").on("click", function(){
	$("#UT").slideToggle();

})

$("#skillbutton2").on("click", function(){
$("#IA").slideToggle();
})