$(document).on("ready", inicio);

function inicio()
{
	$("#personalizar").on("click", transicion);
}

function transicion() {
	var cambioCSS = {
		//background: "rgba(60,60,180,0.8)",
		//color: "#eee"
		margin: 0, 
		overflow: "hidden",
		padding: 0,
		width: 0
	};

    var cambiosPersonalizacion = {
    	height: "auto",
    	opacity: 1, 
    	width: "40%"
    };
	$("#historia").css(cambioCSS);
	$("#personalizacion").css(cambiosPersonalizacion);

	$("#color div").on("click", cambiarColor);
	$(".llanta img").on("click", cambiarLlanta);
	$(".opcion-techo img").on("click", cambiarTecho);

}

function cambiarLlanta(datos)
{
	var llanta = $("#" + datos.currentTarget.parentElement.id + " img");
	$("#custom-llanta1").find("img").remove();
	$("#custom-llanta2").find("img").remove();
	llanta.clone().appendTo("#custom-llanta1");
	llanta.clone().appendTo("#custom-llanta2");

}

function cambiarTecho(datos)
{
	var techo = $("#" + datos.currentTarget.parentElement.id + " img");
	$("#custom-techo").find("img").remove();
	techo.clone().appendTo("#custom-techo");
}


function cambiarColor(datos)
{

	var colorito = datos.currentTarget.id;
	var nuevoCoche = "img/c" + colorito + ".jpg";
	$("#cochecito>img").attr("src", nuevoCoche);
}

