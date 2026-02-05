
 function muestra_GP(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_GS('contenidoGP');
}
function cerrarGP() {
    document.getElementById("contenidoGP").style.display = "none";
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
function cerrarAP() {
    document.getElementById("contenidoAP").style.display = "none";
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
function cerrarEE() {
    document.getElementById("contenidoEE").style.display = "none";
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
function cerrarM() {
    document.getElementById("contenidoM").style.display = "none";
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
function cerrarTD() {
    document.getElementById("contenidoTD").style.display = "none";
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
function cerrarGV() {
    document.getElementById("contenidoGV").style.display = "none";
}

/* 
    
const canvas = document.getElementById("pieChart");
const ctx = canvas.getContext("2d");

// Datos
const data = [10, 20, 25, 25, 30, 20, 25, 25];
const colors = ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0","#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"];

const total = data.reduce((a, b) => a + b, 0);

let currentAngle = 0;
let targetAngle = 0;
let sliceIndex = 0;

function drawSlice(angle) {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 150, currentAngle, currentAngle + angle);
    ctx.closePath();
    ctx.fillStyle = colors[sliceIndex];
    ctx.fill();
}

function animate() {
    if (sliceIndex >= data.length) return;

    const sliceAngle = (data[sliceIndex] / total) * Math.PI * 4;
    const step = 1; // velocidad de animación

    if (targetAngle < sliceAngle) {
        targetAngle += step;
        drawSlice(step);
    } else {
        currentAngle += sliceAngle;
        sliceIndex++;
        targetAngle = 0;
    }

    requestAnimationFrame(animate);
}

animate(); */