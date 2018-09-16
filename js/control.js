//Programa para controlar el formulario
// v  0.1

//Declaraciones


function clearText() {
	var nombres = document.getElementById("nombre");
	nombres.value = "";

};

function validate() {
	var 
		nombreInput = document.getElementById("nombre"),
		apellidoInput = document.getElementById("apellidos"),
		mailInput = document.getElementById("mail");
	alert(nombreInput.value);
	return true;
};


