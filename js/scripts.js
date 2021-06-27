document.getElementById('in').addEventListener('keyup', function(event) {
    const on = document.getElementById('on');
    on.innerText = this.value;
});
document.getElementById('bs').addEventListener('click', function(event) {
    event.preventDefault();
    const b = this;
    const n = document.getElementById('in');
    const m = document.getElementById('m');
    if (n.value == "" || m.value == "") {
        N(b, n, m);
    } else {
        R(n, m);
    }
});

const R = (n, m) => {
    if (DM()) {
        window.open("https://api.whatsapp.com/send?phone=521" + n.value + "&text=" + m.value + "&app_absent=0", "_blank");
    } else {
        window.open("https://web.whatsapp.com/send?phone=521" + n.value + "&text=" + m.value + "&app_absent=0", "_blank");
    }
    n.value = "";
    m.value = "";
}
const N = (b, n, m) => {
    b.style.animation = "shake 0.5s ease";
    n.placeholder = "Vacio"
    m.placeholder = "Vacio"
    b.firstChild.nodeValue = "¡Listo! Enviar 💔";
    b.addEventListener("animationend", () => {
        b.style.animation = "";
        n.placeholder = "# Ingresa el numero"
        m.placeholder = "Escribe tu mensaje..."
        b.firstChild.nodeValue = "¡Listo! Enviar ❤️";
    });
}

function DM() {
    const tm = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return tm.some((tmi) => {
        return navigator.userAgent.match(tmi);
    });
}