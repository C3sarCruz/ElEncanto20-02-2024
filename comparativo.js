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


function muestra_CA(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CA('contenidoCA');
}

function cerrarCA() {
    document.getElementById("contenidoCA").style.display = "none";
}



function muestra_CASub(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CASub('contenidoCASub');
}

function cerrarCASub() {
    document.getElementById("contenidoCASub").style.display = "none";
}


function muestra_TI(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_TI('contenidoTI');
}

function cerrarTI() {
    document.getElementById("contenidoTI").style.display = "none";
}

function muestra_TII(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_TII('contenidoTII');
}





function muestra_CASP(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CASP('contenidoCASP');
}

function cerrarCASP() {
    document.getElementById("contenidoCASP").style.display = "none";
}


function muestra_gtotal(id) {
    if (document.getElementById) {
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        
    }
}
window.onload = function () {
    muestra_gtotal('gtotal');
}


function muestra_graficaTotal(id) {
    if (document.getElementById) {
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
}
window.onload = function () {
    muestra_gtotal('graficaTotal');
}



//--------------------------------------------CASUB CONTENIDOS--------------------------------------
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

function muestra_J(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_J('contenidoJ');
}

function cerrarJ() {
    document.getElementById("contenidoJ").style.display = "none";
}



function muestra_S(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_S('contenidoS');
}

function cerrarS() {
    document.getElementById("contenidoS").style.display = "none";
}

function muestra_BM(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_BM('contenidoBM');
}

function cerrarBM() {
    document.getElementById("contenidoBM").style.display = "none";
}
//---------------------------------------------FIN CASUB CONTENIDOS-----------------------------------------

function muestra_con(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_con('contenido-con');
}
function cerrar_con() {
    document.getElementById("contenido-con").style.display = "none";
}
/***********************************************FIN COMPARATIVO*********************************************/