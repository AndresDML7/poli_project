const validForm = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var errorName = document.getElementById("errorName");
    var errorEmail = document.getElementById("errorEmail");
    var errorMessage = document.getElementById("errorMessage");

    let isValid = true;

    if(name === "") {
        errorName.innerText = "Debes ingresar un nombre.";
        isValid = false;
    } else {
        errorName.innerText = "";
    }

    if(!validateEmail(email)) {
        errorEmail.innerText = "Debes ingresar un email válido.";
        isValid = false;
    } else {
        errorEmail.innerText = "";
    }

    if(message === "" || message.length > 400) {
        errorMessage.innerText = "Debes ingresar un mensaje de máximo 400 caracteres.";
        isValid = false;
    } else {
        errorMessage.innerText = "";
    }

    if(isValid) {
        sendMail();
    } else {
        return;
    }
}

const sendMail = () => {
    let recipient="andru2015.7";
    let at = String.fromCharCode(64);
    let dotcom="gmail.com";
    let mail="mailto:";
    var subject = "Mensaje de cliente";
    let part1 = document.getElementById("name").value;
    let part2 = document.getElementById("email").value;
    let part3 = document.getElementById("message").value;
    var part4 = "Atentamente, "+part1+" - "+part2+". Mensaje enviado desde www.paisaoproducciones.com";
    var body = part3 + ". " + part4 + ".";

    window.open(mail+recipient+at+dotcom+"?subject="+subject+"&body="+body);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function cleanErrors(value) {
    document.getElementById(value).innerText = "";
}

