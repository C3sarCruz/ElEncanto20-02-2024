function launchFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}
// Lanza en pantalla completa en navegadores que lo soporten
function cancelFullScreen() {
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}

function muestra_TIB(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_TIB('contenidoTIB');
}

function cerrarTIB() {
    document.getElementById("contenidoTIB").style.display = "none";
}

 function muestra_TGP(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_TGP('contenidoTGP');
}

function cerrarTGP() {
    document.getElementById("contenidoTGP").style.display = "none";
}



 //-------------------------------------------FUNCIONES ESTADO DE RESULTADOS----------------------------
 function muestra_ICM(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_ICM('contenidoICM');
}

function cerrarICM() {
    document.getElementById("contenidoICM").style.display = "none";
}

function muestra_OIB(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_OIB('contenidoOIB');
}

function cerrarOIB() {
    document.getElementById("contenidoOIB").style.display = "none";
}


//---------------------------------------------

function muestra_GA(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GA('contenidoGA');
}

function cerrarGA() {
    document.getElementById("contenidoGA").style.display = "none";
}


function muestra_GM(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GM('contenidoGM');
}

function cerrarGM() {
    document.getElementById("contenidoGM").style.display = "none";
}


function muestra_ME(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_ME('contenidoME');
}

function cerrarME() {
    document.getElementById("contenidoME").style.display = "none";
}



function muestra_MA(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_MA('contenidoMA');
}

function cerrarMA() {
    document.getElementById("contenidoMA").style.display = "none";
}


function muestra_GJ(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GJ('contenidoGJ');
}

function cerrarGJ() {
    document.getElementById("contenidoGJ").style.display = "none";
}

function muestra_GS(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GS('contenidoGS');
}

function cerrarGS() {
    document.getElementById("contenidoGS").style.display = "none";
}


 //-----------------------------------------FIN FUNCIONES ESTADO DE RESULTADOS----------------------------


function muestra_GT(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GS('contenidoGT');
}
function cerrarGT() {
    document.getElementById("contenidoGT").style.display = "none";
}

function muestra_GP(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GS('contenidoGP');
}

function muestra_AP(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GS('contenidoAP');
}

function muestra_EE(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GS('contenidoEE');
}

function muestra_M(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GS('contenidoM');
}

function muestra_TD(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GS('contenidoTD');
}
function muestra_GV(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GS('contenidoGV');
}