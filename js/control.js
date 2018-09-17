//Programa para controlar el formulario


function compruebaDatos(strNombre, strApellido, strMail) {
	// Checkea el ingreso de datos correctamente


	if ((strNombre == "") || (strNombre == "Su nombre")) {
		// No es el default
		return false;
	};

	if ((strApellido == "") || (strApellido == "Su apellido")) {
		return false;
	};

	if ((strMail == "") || (strMail == "Su mail")) {
		return false;
	};
};


function nombreCompleto(nombre, apellido) {
	// Forma el nombre y apellido
	return (nombre + " " + apellido);
};

function validate() {
	var 
		nombreInput = document.getElementById("nombre").value,
		apellidoInput = document.getElementById("apellido").value,
		mailInput = document.getElementById("mail").value;

	//Control
	var checkInputs = compruebaDatos(nombreInput, apellidoInput, mailInput);
	if (checkInputs == false) {
		alert("Ingrese sus datos")
		return false;
	}


	var persona = nombreCompleto(nombreInput, apellidoInput);
	alert("Gracias " + persona);

	return true;
}
