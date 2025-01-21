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
function muestra_AO(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_AO('contenidoAO');
}

function cerrarAO() {
    document.getElementById("contenidoAO").style.display = "none";
}

function muestra_O(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_O('contenidoO');
}

function cerrarO() {
    document.getElementById("contenidoO").style.display = "none";
}

function muestra_A(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_A('contenidoA');
}

function cerrarA() {
    document.getElementById("contenidoA").style.display = "none";
}


 /** FUNCIONES ACTIVIDADES DE INVERSION*/

function muestra_AI(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_AI('contenidoAO');
}

function cerrarAI() {
    document.getElementById("contenidoAI").style.display = "none";
}

function muestra_O2(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_O2('contenidoO2');
}

function cerrarO2() {
    document.getElementById("contenidoO2").style.display = "none";
}

function muestra_A2(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_A2('contenidoA2');
}

function cerrarA2() {
    document.getElementById("contenidoA2").style.display = "none";
}





 /** FUNCIONES ACTIVIDADES DE FINANCIAMIENTO*/

function muestra_AF(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_AF('contenidoAF');
}

function cerrarAF() {
    document.getElementById("contenidoAF").style.display = "none";
}


function muestra_O3(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_O3('contenidoO3');
}

function cerrarO3() {
    document.getElementById("contenidoO3").style.display = "none";
}

function muestra_A3(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_A3('contenidoA3');
}

function cerrarA3() {
    document.getElementById("contenidoA3").style.display = "none";
}


 //---------------------------------------FIN FUNCIONES FLUJO----------------------------------------
