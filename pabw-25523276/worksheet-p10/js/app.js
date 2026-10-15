import { ambilProyek } from "./api.js";

import {
    render,
    aturMemuat,
    tampilkanGalat,
    pasangFilter,
    pasangValidasiForm,
    pasangFormMakanan
} from "./dom.js";


const profil = {
    nama: "Nazla Cahyani Sofyan",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 0
};

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

function formatKeahlian(daftar) {
    return daftar.join(" · ");
}

const namaElement = document.querySelector("#nama-profil");
const peranElement = document.querySelector("#peran-profil");
const keahlianElement = document.querySelector("#keahlian-profil");
const jumlahProyekElement = document.querySelector("#jumlah-proyek");


if (namaElement) {
    namaElement.textContent = profil.nama;
}

if (peranElement) {
    peranElement.textContent = profil.peran;
}

if (keahlianElement) {
    keahlianElement.textContent = formatKeahlian(profil.keahlian);
}


console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


async function muat() {
    aturMemuat(true);

    try {
        const data = await ambilProyek();
        profil.jumlahProyek = data.length;
        if (jumlahProyekElement) {
            jumlahProyekElement.textContent = profil.jumlahProyek;
        }
        render(data);
        pasangFilter(data);

    } catch (galat) {
        tampilkanGalat(
            "Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman."
        );
        console.error("Gagal memuat:", galat.message);

    } finally {
        aturMemuat(false);
    }
}


muat();
pasangValidasiForm();
pasangFormMakanan();


const tema = document.querySelector("#tema");
if (tema) {
    tema.addEventListener("change", function () {

        if (tema.checked) {
            console.log("Tema Gelap aktif");
        } else {
            console.log("Tema Terang aktif");
        }

    });
}