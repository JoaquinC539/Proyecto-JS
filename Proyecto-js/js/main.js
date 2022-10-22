$(document).ready(function(){
	//Slider
	var globalwidth=$("#global").width();
	$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: globalwidth,
    infiniteLoop:true,
    auto:true,
    pause:3000,

  });
	//Post
	var posts=[
	{
		title:"Prueba de titulo 1", date: "Publicado el : " + moment().format("MMMM do YYYY"),content:"Sed vulputate lectus at erat placerat, eget feugiat mauris consectetur. Nulla cursus risus vitae est hendrerit laoreet. In pellentesque sed quam id mollis. Praesent interdum arcu ante, et pellentesque ex vulputate ornare. In nec tristique diam. Etiam neque nisi, pulvinar a leo venenatis, pellentesque iaculis odio. In finibus interdum ex nec eleifend. Morbi quis tellus volutpat, rhoncus orci in, auctor massa. Morbi nibh massa, dignissim eget sodales at, ullamcorper sed turpis. Etiam euismod mattis leo. Nulla vel est eu tortor tincidunt laoreet. Morbi id rhoncus velit."
	},
	{
		title:"Prueba de titulo 2", date: "Publicado el : " + moment().format("MMMM do YYYY"),content:"Sed vulputate lectus at erat placerat, eget feugiat mauris consectetur. Nulla cursus risus vitae est hendrerit laoreet. In pellentesque sed quam id mollis. Praesent interdum arcu ante, et pellentesque ex vulputate ornare. In nec tristique diam. Etiam neque nisi, pulvinar a leo venenatis, pellentesque iaculis odio. In finibus interdum ex nec eleifend. Morbi quis tellus volutpat, rhoncus orci in, auctor massa. Morbi nibh massa, dignissim eget sodales at, ullamcorper sed turpis. Etiam euismod mattis leo. Nulla vel est eu tortor tincidunt laoreet. Morbi id rhoncus velit."
	},
	{title:"Prueba de titulo 3", date: "Publicado el : " + moment().format("MMMM do YYYY"),content:"Sed vulputate lectus at erat placerat, eget feugiat mauris consectetur. Nulla cursus risus vitae est hendrerit laoreet. In pellentesque sed quam id mollis. Praesent interdum arcu ante, et pellentesque ex vulputate ornare. In nec tristique diam. Etiam neque nisi, pulvinar a leo venenatis, pellentesque iaculis odio. In finibus interdum ex nec eleifend. Morbi quis tellus volutpat, rhoncus orci in, auctor massa. Morbi nibh massa, dignissim eget sodales at, ullamcorper sed turpis. Etiam euismod mattis leo. Nulla vel est eu tortor tincidunt laoreet. Morbi id rhoncus velit."},
	{title:"Prueba de titulo 4", date: "Publicado el : " + moment().format("MMMM do YYYY"),content:"Sed vulputate lectus at erat placerat, eget feugiat mauris consectetur. Nulla cursus risus vitae est hendrerit laoreet. In pellentesque sed quam id mollis. Praesent interdum arcu ante, et pellentesque ex vulputate ornare. In nec tristique diam. Etiam neque nisi, pulvinar a leo venenatis, pellentesque iaculis odio. In finibus interdum ex nec eleifend. Morbi quis tellus volutpat, rhoncus orci in, auctor massa. Morbi nibh massa, dignissim eget sodales at, ullamcorper sed turpis. Etiam euismod mattis leo. Nulla vel est eu tortor tincidunt laoreet. Morbi id rhoncus velit."},
	{
		title:"Prueba de titulo 5", date: "Publicado el : " + moment().format("MMMM do YYYY"),content:"Sed vulputate lectus at erat placerat, eget feugiat mauris consectetur. Nulla cursus risus vitae est hendrerit laoreet. In pellentesque sed quam id mollis. Praesent interdum arcu ante, et pellentesque ex vulputate ornare. In nec tristique diam. Etiam neque nisi, pulvinar a leo venenatis, pellentesque iaculis odio. In finibus interdum ex nec eleifend. Morbi quis tellus volutpat, rhoncus orci in, auctor massa. Morbi nibh massa, dignissim eget sodales at, ullamcorper sed turpis. Etiam euismod mattis leo. Nulla vel est eu tortor tincidunt laoreet. Morbi id rhoncus velit."
	},
	]

	posts.forEach((item,index)=>{
		var post=`
			<article class="post"><h2>${item.title}</h2>
				<span class="date">${item.date}</span>
				<p>${item.content}
				</p>
				<a href="#" class="button-more">Leer mas</a>
			</article>
`
$("#posts").append(post);
	});
	
	//Selector de tema

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

//Login falso
var about_parrafo=$("#about p");
$("#login form").submit(function(){
	var name=$("[name='name']").val();
	localStorage.setItem("form_name",name)
	$("#login").hide();
	var form_name=localStorage.getItem("form_name")

	about_parrafo.html("Bienvenido, "+form_name);
	about_parrafo.append("<a href='#' id='logout'> Cerrar sesión</a>");
		$("#logout").click(function(){
		localStorage.removeItem("form_name",name);
		location.reload();
	});
});
	

});
