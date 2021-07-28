var cuentas = new Array(["dagme12", "1234", "Dereck Gaitán", "Doctor", "16 Años", "¡Se Feliz cada día!", "Cada día que pasa pudo entender que tú eres una bendición en mi vida, que sin importar distancias tu amistad has estado siempre."], ["Pochito13", "4567", "Amir Alveo", "Programador", "16 Años", "¡Sueña en grande, cree en tí!", "Nunca pidas más de lo que tú das y no aceptes menos de lo que mereces."], ["Sofia26", "4321", "Paola Chirú", "Ambientalista", "16 Años", "Siempre serás el amor de mi vida", "Gracias por existir, gracias por ser tan buena amiga, gracias por todos tus consejos y gracias por ser la amiga más alegre y divertida que puede existir."]);
var intentos = 1;

function login() {
    var usuario = document.getElementById("usu").value;
    var contraseña = document.getElementById("contraseña").value;

    for (var i = 0; i <= cuentas.length - 1; i++) {
        if (usuario == cuentas[i][0] && contraseña == cuentas[i][1]) {
            swal("Bienvenido", "Joven " + cuentas[i][2], "success");
            document.getElementById("usuario").innerHTML = cuentas[i][2];
            document.getElementById("profe").innerHTML = cuentas[i][3];
            document.getElementById("años").innerHTML = cuentas[i][4];
            document.getElementById("texto").innerHTML = cuentas[i][5];
            document.getElementById("info").innerHTML = cuentas[i][6];
            break;
        } else {
            if (intentos <= 3) {
                swal("Contraseña Incorrecta", "Cantidad de intentos " + intentos, "error");
            } else if (intentos == 4) {
                document.getElementById("nose").disabled = true;
            }
        }
    }
    intentos++;
}

