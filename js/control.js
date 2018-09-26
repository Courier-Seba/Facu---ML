//Programa para controlar el formulario

//Alertas
function alertaIncompleto() {
	return alert("Ingrese sus datos")
};
function alertaChistoso() {
	return alert("Completa bien tus datos")
};
function alertaMailMalo() {
	return alert("Ingrese un mail valido")
};
function alertaSinOpcion(){
	return alert("Ingrese su tipo de consulta")
};
function alertaNoMsg(){
	return alert("Deje su mensaje")
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

function mailControl(letrasMail) {
	// Devuelve true si hay un arroba
	var ok1 = false,
		ok2 = false;
	for (let letra of letrasMail) {
		if (letra == "@"){
			ok1 = true;
		} else if (letra == ".") {
			ok2 = true;
		} else if ((ok1 == true) && (ok2 == true)) {
			// Contiene al menos un @ y un .
			return true;
		};
	};
	alertaMailMalo();
	return false;
};

// Checkea el ingreso de datos correctamente
function compruebaDatos(strNombre, strApellido, strMail, opcion, texto) {

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

	// Control Mail
	if ((strMail == "") || (strMail == "Su mail")) {
		// No es el defaul
		alertaIncompleto();
		return false;
	} else if (mailControl(listaLetras(strMail)) == false) {
		return false;
	};

	// Controla si tiene algun radio puesto
	for (let radio of opcion) {
		if (radio == true) {
			break;
		} else if (radio == opcion[opcion.length-1]) {
			// Si el ultimo es false
			alertaSinOpcion();
			return false;
		};
	};

	if ((texto == "") || (texto == "Ingrese...")) {
		alertaNoMsg();
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
		mailInput = document.getElementById("mail").value,
		radiosInput = [document.getElementById("sugerencia").checked,
					   document.getElementById("contacto").checked,
					   document.getElementById("pregunta").checked],
		textoInput = document.getElementById("mensage").value;

	//Control
	var checkInputs = compruebaDatos(nombreInput, apellidoInput, mailInput, 
									radiosInput, textoInput);

	if (checkInputs == false) {
		return false;
	}


	var persona = nombreCompleto(nombreInput, apellidoInput);
	alert("Gracias " + persona);

	return true;
}
