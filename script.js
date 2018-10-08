function CURP() {
    var n = document.getElementById("nombre").value;
    var a = document.getElementById("ap1").value;
    var a2 = document.getElementById("ap2").value;
    var f = document.getElementById("fecha").value;
    var e = document.getElementById("estado").value;
    var h = document.getElementById("hombre").checked;
    var m = document.getElementById("mujer").checked;
    var s;

    n = n.substring(0, 1);
    a1 = a.substring(0, 1);

    for (var i = 1; i < a.length; i++) {
        if ((a.charAt(i) == "a") || (a.charAt(i) == "e") || (a.charAt(i) == "i") || (a.charAt(i) == "o") || (a.charAt(i) == "u")) {
            a1 = a1 + a.charAt(i);
        }
    }

    a2 = a2.substring(0, 1);

    var fx = f.substring(0, 2);
    fx = fx + f.substring(3, 5);
    fx = fx + f.substring(8, 10);

    e = e.substring(0, 1);

    if (h == true) {
        s = "h";
    }
    if (m == true) {
        s = "m";
    }

    var res = a1 + a2 + n + fx + s + e;

    document.getElementById("res").innerText = res.toUpperCase();
}

function cal() {
    var cad = document.getElementById("txtCadena").value;
    var cadJ = cad.replace(" ", "");
    var loca = "";
    var vocal = 0;
    var consonante = 0;

    for (var i = 0; i < cadJ.length; i++) {
        if ((cadJ.charAt(i) == "a") || (cadJ.charAt(i) == "e") || (cadJ.charAt(i) == "i") || (cadJ.charAt(i) == "o") || (cadJ.charAt(i) == "u")) {
            vocal++;
        } else {
            consonante++;
        }
    }

    for (var i = 0; i < cad.length; i++) {
        if (i % 2 == 0) {
            loca = loca + cad.charAt(i).toUpperCase();
        } else {
            loca = loca + cad.charAt(i);
        }
    }

    document.getElementById("numVoc").innerText = vocal;
    document.getElementById("numCon").innerText = consonante;
    document.getElementById("cadLoca").innerText = loca;
}

function aparece() {
    var cad = document.getElementById("txtCadena").value;
    var letra = document.getElementById("txtNum").value;
    var con = 0;

    for (var i = 0; i < cad.length; i++) {
        if (cad.charAt(i) == letra.charAt(0)) {
            con++;
        }
    }

    document.getElementById("numVeses").innerText = con;
}

function calcular() {
    var r1 = document.getElementById("uni1").checked;
    var r2 = document.getElementById("uni2").checked;
    var r3 = document.getElementById("uni3").checked;
    var n = document.getElementById("num").value;
    var num = parseInt(n);


    if (r1 == true) {
        document.getElementById("resultado").innerText = num.toString(2);
    }
    if (r2 == true) {
        document.getElementById("resultado").innerText = num.toString(8);
    }
    if (r3 == true) {
        document.getElementById("resultado").innerText = num.toString(16);
    }
}
