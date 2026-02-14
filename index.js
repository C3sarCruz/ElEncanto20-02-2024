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

/* const container = document.querySelector("#page-container");

// Limpia el head y lo reemplaza con el head nuevo
function updateHead(newDoc) {
    const newHead = newDoc.querySelector("head");
    const oldHead = document.head;

    // Quitar CSS/JS antiguos excepto los globales
    [...oldHead.children].forEach(el => {
        if (!el.matches('[data-global]')) {
            el.remove();
        }
    });

    // Agregar los nuevos elementos del head
    [...newHead.children].forEach(el => {
        // Evitar duplicar el mismo CSS o script
        if (el.tagName === "LINK" && document.querySelector(`link[href="${el.href}"]`)) return;
        if (el.tagName === "SCRIPT" && document.querySelector(`script[src="${el.src}"]`)) return;

        // Clonar nodo y añadirlo
        oldHead.appendChild(el.cloneNode(true));
    });
}

async function loadPage(url, addToHistory = true) {
    // Animación de salida
    container.classList.add("page-exit");
    await new Promise(resolve => setTimeout(resolve, 300));

    // Fetch a la página nueva
    const response = await fetch(url);
    const html = await response.text();

    // Parsear documento completo
    const parser = new DOMParser();
    const newDoc = parser.parseFromString(html, "text/html");

    // --- ACTUALIZAR HEAD (CSS, fonts, scripts, etc) ---
    updateHead(newDoc);

    // --- Actualizar CONTENIDO ---
    const newContent = newDoc.querySelector("#page-container").innerHTML;
    container.innerHTML = newContent;

    // Animación de entrada
    container.classList.remove("page-exit");
    container.classList.add("page-enter");
    setTimeout(() => container.classList.remove("page-enter"), 300);

    // Actualizar historial
    if (addToHistory) {
        history.pushState({ url }, null, url);
    }
}

// Interceptar clicks en links
document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const url = link.getAttribute("href");

    if (!url || url.startsWith("http") || url.startsWith("#")) return;

    e.preventDefault();
    loadPage(url);
});

// Botón atrás/adelante
window.addEventListener("popstate", (e) => {
    const url = e.state?.url || "index.html";
    loadPage(url, false);
});

window.onload = () => {
    document.querySelectorAll(".animate").forEach(el => {
        el.classList.add("active");
    });
};
 */