function checkForm() {
	var name = document.getElementById("name");
	var nameVal = name.value;
	var surname = document.getElementById("surname");
	var surNameVal = surname.value;

	var password = document.getElementById("password");
	var passwordValue = password.value;

	var uppercase = /[A-Z]/g; //uppercase
	var lowercase = /[a-z]/g;
	var special = /[\W_]/g;
	var numeric = /[0-9]/g;
	
	var patt1 = /[w_]/g;

	if(nameVal.match(patt1) != null || surNameVal.match(patt1) != null) {
		console.log("Check the inputs");
		alert("Name and Surname must be a character.")
		return false;
	}

	if(checkPassword(passwordValue,uppercase) == false) {
		return false;
	}

	if(checkPassword(passwordValue,lowercase) == false) {
		return false;
	}

	if(checkPassword(passwordValue,special) == false) {
		return false;
	}

	if(checkPassword(passwordValue,numeric) == false) {
		return false;
	}

}

function checkPassword(v,p) {
	if(v.match(p) == null) {
		alert("Your password should contain at least one uppercase latter,one numeric digit, and one special character");
		return false;
	}
} 
