//Programa para controlar el formulario

//Alertas
function alertaIncompleto() {
	return alert("Ingrese sus datos")
};
function alertaChistoso() {
	return alert("Completa bien tus datos")
};

function seudonimoNormal(letrasPalabra) {
	// Chars no aceptados (puden ser más)
	var charNoAceptado = new Array ("0", "1", "2", "3", "4", "5", "6", "7", "8",
									"9", "|", "|", "!", "#", "$", "%", "&", "/",
									"(", ")", "=", "?", "+", "-", "_", ",", ";",
									":", ".", "*", "@", "{", "}", "[", "]");

	for (i = 0; i < letrasPalabra.length; i++) { 
		for (j = 0; j < charNoAceptado.length; j++) {
			if (letrasPalabra[i] == charNoAceptado[j]) {
				return false;
			};
		};
	};
	//Todo bien
	return true;
};


// Checkea el ingreso de datos correctamente
function compruebaDatos(strNombre, strApellido, strMail) {

	// Separa los String a una lista de chars
	var listaLetras = function(someStr) {return someStr.split("")};

	// Control Nombre
	if ((strNombre == "") || (strNombre == "Su nombre")) {
		// No es el defaul
		alertaIncompleto();
		return false;
	} else if (seudonimoNormal(listaLetras(strNombre)) == false) {
			// Caracteres especiales en nombre
			alertaChistoso();
			return false;
	};

	// Control Apellido
	if ((strApellido == "") || (strApellido == "Su apellido")) {
		// No es el defaul
		alertaIncompleto();
		return false;
	} else if (seudonimoNormal(listaLetras(strApellido)) == false) {
		// Caracteres especiales en nombre
		alertaChistoso();
		return false;
	};

	// Control Mail TODO:
	if ((strMail == "") || (strMail == "Su mail")) {
		// No es el defaul
		alertaIncompleto();
		return false;
	};

	//Todo bien
	return true
};


function nombreCompleto(nombre, apellido) {
	// Forma el nombre y apellido
	return (nombre + " " + apellido);
};


// Main 
function validate() {
	var 
		nombreInput = document.getElementById("nombre").value,
		apellidoInput = document.getElementById("apellido").value,
		mailInput = document.getElementById("mail").value;

	//Control
	var checkInputs = compruebaDatos(nombreInput, apellidoInput, mailInput);

	if (checkInputs == false) {
		return false;
	}


	var persona = nombreCompleto(nombreInput, apellidoInput);
	alert("Gracias " + persona);

	return true;
}
