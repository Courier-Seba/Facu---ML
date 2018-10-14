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
	["PYTHON", "R"],
];

var ids = ["#1a", "#1b", "#1c", "#2a", "#2b", "#2c", "#3a", "#3b", "#3c", "#4a",
 		   "#4b", "#4c", "#5a", "#5b"];

$(document).ready(function(){
	$("#nota").hide();

	$("#corrector").click(function(){
		var notaFinal = control_resultados()
		$("#nota").text(notaFinal);
		$("#nota").show();
	});

	function control_resultados() {
		let nota = 1;
		let cantIds = ids.length;
		let respuesta = "";
		for (i=0; i<=cantIds; i++) {
			respuesta = $(ids[i]).val().toUpperCase();
			if (respuesta == resultados[i]) {
				nota += 0.5
			};
		};
		return nota
	};
//End main
});
