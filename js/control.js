//Programa para controlar el formulario




function nombreCompleto(nombre, apellido) {
	return (nombre + " " + apellido);
};

function validate() {
	var 
		nombreInput = document.getElementById("nombre").value,
		apellidoInput = document.getElementById("apellido").value,
		mailInput = document.getElementById("mail").value;

	if ((nombreInput == "") || (apellidoInput == "") || (mailInput == "")) {
		alert("Ingrese sus datos");
		return false;
	};

	var persona = nombreCompleto(nombreInput, apellidoInput);

	alert("Gracias " + persona);
	return true;
}
