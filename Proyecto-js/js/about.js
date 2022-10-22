$(document).ready(function(){
//Tema
var theme=$("#theme");
var color;
if(localStorage.getItem('color',JSON.stringify(color))=="blue"){theme.attr("href","css/blue.css");};
if(localStorage.getItem('color',JSON.stringify(color))=="green"){theme.attr("href","css/green.css");};
if(localStorage.getItem('color',JSON.stringify(color))=="red"){theme.attr("href","css/red.css");};
		$("#toGreen").click(function(){
		theme.attr("href","css/green.css");
		localStorage.removeItem(color)
		color="green"
		localStorage.setItem('color',color)
		});
	
		$("#toRed").click(function(){
		theme.attr("href","css/red.css");
		localStorage.removeItem(color)
		color="red"
		localStorage.setItem('color',color)
		});
		
			$("#toBlue").click(function(){
		theme.attr("href","css/blue.css");
		localStorage.removeItem(color)
		color="blue"
		localStorage.setItem('color',color)

		});

			//Scroll Arriba de la web
$('.up').click(function(e){
	e.preventDefault();
	$('html,body').animate({
		scrollTop:0
	},500);
	return false;
}); 
	//
	$("#acordeon").accordion();




});