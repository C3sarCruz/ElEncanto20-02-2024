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


function muestraP(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_P('contenidoP');
}

function muestraI(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraI('contenidoI');
}
function cerrarI() {
    document.getElementById("contenidoI").style.display = "none";
}


function muestraG(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraG('contenidoG');
}
function cerrarG() {
    document.getElementById("contenidoG").style.display = "none";
}


function muestraGA(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraGA('contenidoGA');
}
function cerrarGA() {
    document.getElementById("contenidoGA").style.display = "none";
}

function muestraGM(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraGM('contenidoGM');
}
function cerrarGM() {
    document.getElementById("contenidoGM").style.display = "none";
}
function muestraME(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraME('contenidoME');
}
function cerrarME() {
    document.getElementById("contenidoME").style.display = "none";
}

function muestraA(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraA('contenidoA');
}
function cerrarA() {
    document.getElementById("contenidoA").style.display = "none";
}

function muestraJ(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraJ('contenidoJ');
}
function cerrarJ() {
    document.getElementById("contenidoJ").style.display = "none";
}

function muestraS(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraS('contenidoS');
}
function cerrarS() {
    document.getElementById("contenidoS").style.display = "none";
}
function muestraE(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraE('contenidoE');
}
function cerrarE() {
    document.getElementById("contenidoE").style.display = "none";
}


function muestraPremisas(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestraE('contenidoPremisas');
}

function cerrarPremisas() {
    document.getElementById("contenidoPremisas").style.display = "none";
}
