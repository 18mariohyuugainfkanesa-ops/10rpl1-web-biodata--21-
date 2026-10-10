// =========================
// TIMER
// =========================

let waktu = 4 * 60 + 41;

function jalankanTimer() {

    let menit = Math.floor(waktu / 60);
    let detik = waktu % 60;

    let tampilan =
        String(menit).padStart(2, "0") +
        ":" +
        String(detik).padStart(2, "0");

    const timer = document.getElementById("timer");

    if (timer) {
        timer.textContent = tampilan;
    }

    if (waktu > 0) {
        waktu--;
    }
}

jalankanTimer();

setInterval(jalankanTimer, 1000);


// =========================
// MODE TERANG / GELAP
// =========================

const themeButton = document.getElementById("themeButton");


// Ambil tema yang tersimpan
const temaTersimpan = localStorage.getItem("tema");


// Jika tema sebelumnya adalah terang
if (temaTersimpan === "light") {

    document.body.classList.add("light");

    themeButton.textContent = "🌙";

} else {

    document.body.classList.remove("light");

    themeButton.textContent = "☀️";
}


// =========================
// GANTI TEMA
// =========================

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        // Mode terang
        themeButton.textContent = "🌙";

        localStorage.setItem("tema", "light");

    } else {

        // Mode gelap
        themeButton.textContent = "☀️";

        localStorage.setItem("tema", "dark");

    }

});