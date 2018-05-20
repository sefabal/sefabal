function checkForm() {
	var name = document.getElementById("name");
	var nameVal = name.value;
	var surname = document.getElementById("surname");
	var surNameVal = surname.value;
	var email = document.getElementById("email");
	var emailVal = email.value;

	var password = document.getElementById("password");
	var passwordValue = password.value;

	var uppercase = /[A-Z]/g; //uppercase
	var lowercase = /[a-z]/g;
	var special = /[\W_]/g;
	var numeric = /[0-9]/g;
	
	var patt1 = /[w_]/g;

	
	if(nameVal.length == 0 ) {
		alert("Name can't be empty.");
		return false;
	}

	if(surNameVal.length == 0) {
		alert("Surname can't be empty.");
		return false;
	}

	if(emailVal.length == 0) {
		
		alert("Email can't be empty");
		return false;
	}


	if(passwordValue.length == 0) {
		alert("Password can't be empty");
		return false;
	}

	
	if(nameVal.match(patt1) != null || surNameVal.match(patt1) != null) {
		console.log("Check the inputs");
		alert("Name and Surname must be a character.")
		return false;
	}

	if(passwordValue.length < 6 || passwordValue.length > 14) {
		alert("Your password should be longer 6 and lower than 14");
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
