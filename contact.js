function sendMessage() {
	var messageConfirm = document.getElementById("confirm");
	var name = document.getElementById("inputName");
	var mail = document.getElementById("inputMail");
	var message = document.getElementById("msg");
	
	if (name.value.length > 0 && validateEmail(mail.value) && message.value.length > 0) {
		messageConfirm.style.color = "#58BB59";
		messageConfirm.innerHTML = "The message has been sent !";
		
		/* POST en Ajax sur une page PHP
		   Sois on stock sur une base de donnée avec page qui met en visuel les données
		   Sois on envoie par mail avec serveur SMTP
		*/
	} else {
		messageConfirm.style.color = "#660000";
		
		if (name.value.length == 0) {
			messageConfirm.innerHTML = "Name is required !";
		} else if (validateEmail(mail.value) == false) {
			messageConfirm.innerHTML = "Email is required !";
		} else if (message.value.length == 0) {
			messageConfirm.innerHTML = "The message i required !";
		}
	}
}
		
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}