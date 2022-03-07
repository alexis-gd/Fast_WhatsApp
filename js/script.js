// Variables
const on = document.getElementById('on');
const n = document.getElementById('in');
const m = document.getElementById('m');

// DOM
document.getElementById('in').addEventListener('keyup', function (event) {
    on.innerText = this.value;
});
document.getElementById('bs').addEventListener('click', function (event) {
    event.preventDefault();
    if (n.value == "" || n.value.length != 10) {
        N(this, n, m);
    } else {
        S(n, m, on);
    }
});

// Functions
const S = (n, m) => {
    if (DM()) {
        window.open("https://api.whatsapp.com/send?phone=521" + n.value + "&text=" + m.value + "&app_absent=0", "_blank");
    } else {
        window.open("https://web.whatsapp.com/send?phone=521" + n.value + "&text=" + m.value + "&app_absent=0", "_blank");
    }
    on.innerText = "";
}

const N = (b, n, m) => {
    b.style.animation = "shake 0.5s ease";
    n.placeholder = "Vacio"
    b.addEventListener("animationend", () => {
        b.style.animation = "";
        n.placeholder = "# Ingresa el número"
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