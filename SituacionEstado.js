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


function muestra_ActCir(id) {
        if (document.getElementById) { 
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
        }
    }
    window.onload = function () {
        muestra_ActCir('contenidoAC');
}

function cerrarAC() {
    document.getElementById("contenidoAC").style.display = "none";
}

    function muestra_PasCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_PasCir('contenidoPC');
}

function cerrarPC() {
    document.getElementById("contenidoPC").style.display = "none";
}


    function muestra_ActNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_ActNoCir('contenidoANC');
    }

function cerrarANC() {
    document.getElementById("contenidoANC").style.display = "none";
}




    function muestra_PasNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_PasNoCir('contenidoPNC');
}


function cerrarPNC() {
    document.getElementById("contenidoPNC").style.display = "none";
}


    function muestra_oActNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_oActNoCir('contenidoOANC');
}


function cerrarOANC() {
    document.getElementById("contenidoOANC").style.display = "none";
}


        function muestra_P(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_P('contenidoP');
}

function cerrarP() {
    document.getElementById("contenidoP").style.display = "none";
}

function muestra_CB(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CB('contenidoCB');
}

function cerrarCB() {
    document.getElementById("contenidoCB").style.display = "none";
}

function muestra_CBB1(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CBB1('contenidoCBB1');
}

function cerrarCBB1() {
    document.getElementById("contenidoCBB1").style.display = "none";
}


function muestra_CBB2(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CBB2('contenidoCBB2');
}

function cerrarCBB2() {
    document.getElementById("contenidoCBB2").style.display = "none";
} 
function muestra_TPasNC(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_TPasNC('contenidoTPasNC');
}

function cerrarTPasNC() {
    document.getElementById("contenidoTPasNC").style.display = "none";
}

function muestra_PG(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_PG('contenidoPG');
}

function cerrarPG() {
    document.getElementById("contenidoPG").style.display = "none";
}



/* const openModalAC = document.querySelector('.desplegar');
const modalAC = document.querySelector('.modalAC');
const closeModalAC = document.querySelector('.cerrar');

openModalAC.addEventListener('click', (e)=>{
    e.preventDefault();
    modalAC.classList.add('modal--show');
});

closeModalAC.addEventListener('click', (e)=>{
    e.preventDefault();
    modalAC.classList.remove('modal--show');
});
 */



