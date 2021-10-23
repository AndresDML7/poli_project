function validForm() {
    var firstName = document.getElementById("firstName").value;
    var secondName = document.getElementById("secondName").value;
    var lastName = document.getElementById("lastName").value;
    var secondLastName = document.getElementById("secondLastName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    var errorFirstName = document.getElementById("errorFirstName");
    var errorSecondName = document.getElementById("errorSecondName");
    var errorLastName = document.getElementById("errorLastName");
    var errorSecondLastName = document.getElementById("errorSecondLastName");
    var errorAge = document.getElementById("errorAge");
    var errorGender = document.getElementById("errorGender");

    var cont = 0;

    if(firstName === "" || firstName.length > 20) {
        errorFirstName.innerText = "Debes ingresar un nombre de máximo 20 caracteres.";
        cont++;
    } else {
        errorFirstName.innerText = "";
    }

    if(lastName === "" || lastName.length > 20) {
        errorLastName.innerText = "Debes ingresar un nombre de máximo 20 caracteres.";
        cont++;
    } else {
        errorLastName.innerText = "";
    }

    if(isNaN(Number(age))) {
        errorAge.innerText = "Debes ingresar unicamente números.";
        cont++;
    } else {
        errorAge.innerText = "";
    }

    if(Number(age) < 0 || Number(age) > 100) {
        errorAge.innerText = "Debes ingresar un número válido."
        cont++;
    } else {
        errorAge.innerText = "";
    }

    if(gender === "e") {
        errorGender.innerText = "Debes ingresar un género.";
        cont++;
    } else {
        errorGender.innerText = "";
    }

    if(cont > 0) {
        return;
    }
}

