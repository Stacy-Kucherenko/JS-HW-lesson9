function check() {
	var surname = document.getElementById("Surname").value;
	var name = document.getElementById("Name").value;
	var age = document.getElementById("Age").value;
	var address = document.getElementById("Address").value;
	
	if (surname && name && (age > 0 && age <= 100) && address) {
		document.getElementById("Message").style.visibility = "hidden";
		document.getElementById("AjaxGET").disabled = false;
		document.getElementById("AjaxPOST").disabled = false;		
	} else {
		document.getElementById("Message").style.visibility = "visible";
		document.getElementById("AjaxGET").disabled = true;
		document.getElementById("AjaxPOST").disabled = true;		
	}
}

function validateAge() {
	let age = document.getElementById("Age");

	if (age.value > 0 && age.value <= 100) {
		age.classList.remove("error");		
	} else {
		age.classList.add("error");
		age.value = "";
		age.focus();		
		console.log("Age must be between 1 and 100 years old!");
	}
}

function sendDataByGetMethod() {
	var userData = {
		userSurname : document.getElementById("Surname").value,
		userName : document.getElementById("Name").value,
		userAge : document.getElementById("Age").value,
		userAddress : document.getElementById("Address").value
	};

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/userGet?Surname=" + userData.userSurname + "&Name="
			+ userData.userName + "&Age=" + userData.userAge + "&Address="
			+ userData.userAddress);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send();
}

function sendDataByPostMethod() {
	var userData = {
		userSurname : document.getElementById("Surname").value,
		userName : document.getElementById("Name").value,
		userAge : document.getElementById("Age").value,
		userAddress : document.getElementById("Address").value
	};

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/userPost");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(userData));
}

function clearFields() {
	document.getElementById("Surname").value = "";
	document.getElementById("Name").value = "";
	document.getElementById("Age").value = "";
	document.getElementById("Address").value = "";
	check();
}