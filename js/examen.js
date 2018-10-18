var resultados = [
	"COMPUTACION",
	"MCCARTY",
	"GENERICO",
	"SIMBOLICO",
	"REDES NEURONALES",
	"SISTEMAS EXPERTOS",
	"FEEDBACK",
	"ELECTRONICA",
	"OBJETOS",
	"TENSORFLOW",
	"SEMANTICO",
];

var ids = ["#1a", "#1b", "#1c", "#2a", "#2b", "#2c", "#3a", "#3b", "#3c", "#4a",
 		   "#4b", "#4c"];


$(document).ready(function(){
	$("#nota").hide();

	$("#corrector").click(function(){
		var notaFinal = control_resultados()
		$("#nota").text(notaFinal);
		$("#nota").show();
	});

	function control_resultados() {
		let nota = 0;
		let cantIds = ids.length;
		for (i=0; i<cantIds; i++) {
			let respuesta = $(ids[i]).val();
			respuesta = respuesta.toUpperCase;
			if (respuesta == resultados[i]) {
				nota += 0.5
			};
		};
		return nota
	};
//End main
});
