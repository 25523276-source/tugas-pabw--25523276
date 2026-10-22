import {
    profil,
    formatKeahlian,
    saring
} from "./data.js";

const wadah = document.querySelector("#daftar-proyek");
const kosong = document.querySelector("#kosong");
const muat = document.querySelector("#muat");

const namaElement =
    document.querySelector("#nama-profil");
const peranElement =
    document.querySelector("#peran-profil");
const keahlianElement =
    document.querySelector("#keahlian-profil");
const jumlahProyekElement =
    document.querySelector("#jumlah-proyek");
const tombolFilter =
    document.querySelectorAll(".filter");
const formMakanan =
    document.querySelector("#form-makanan");
const namaMakanan =
    document.querySelector("#nama-makanan");
const jenisMakanan =
    document.querySelector("#jenis-makanan");
const hargaMakanan =
    document.querySelector("#harga-makanan");
const tombolSimpan =
    formMakanan
        ? formMakanan.querySelector(
            'button[type="submit"]'
        )
        : null;

const galatNama =
    document.querySelector("#galat-nama-makanan");

const galatJenis =
    document.querySelector("#galat-jenis-makanan");

const galatHarga =
    document.querySelector("#galat-harga-makanan");


export function tampilkanProfil(jumlah) {
    if (namaElement) {
        namaElement.textContent = profil.nama;
    }

    if (peranElement) {
        peranElement.textContent = profil.peran;
    }

    if (keahlianElement) {
        keahlianElement.textContent =
            formatKeahlian(profil.keahlian);
    }

    if (jumlahProyekElement) {
        jumlahProyekElement.textContent = jumlah;
    }
}


function buatKartu(proyek, favorit) {
    const kartu =
        document.createElement("li");

    kartu.className = "kartu";

    const isi =
        document.createElement("span");

    isi.textContent =
        `${proyek.judul} - ${proyek.tahun}`;

    const tombol =
        document.createElement("button");

    tombol.type = "button";
    tombol.className = "favorit";
    tombol.dataset.id = proyek.id;
    tombol.textContent =
        favorit ? "★" : "☆";

    kartu.append(isi, tombol);

    return kartu;
}


export function render(state) {
    if (!wadah || !kosong) {
        return;
    }

    wadah.textContent = "";

    const daftar =
        saring(
            state.daftarProyek,
            state.kategoriAktif
        );

    tandaiTombolAktif(state);

    if (daftar.length === 0) {
        kosong.textContent =
            "Belum ada proyek pada kategori ini.";

        kosong.hidden = false;
        return;
    }

    kosong.hidden = true;

    daftar.forEach((proyek) => {
        const favorit =
            state.favorit.includes(proyek.id);

        const kartu =
            buatKartu(proyek, favorit);

        wadah.append(kartu);
    });
}


export function tandaiTombolAktif(state) {
    tombolFilter.forEach((tombol) => {
        tombol.classList.toggle(
            "aktif",
            tombol.dataset.kategori ===
            state.kategoriAktif
        );
    });
}


export function aturMemuat(status) {
    if (muat) {
        muat.hidden = !status;
    }
}


export function tampilkanGalat(pesan) {
    if (kosong) {
        kosong.textContent = pesan;
        kosong.hidden = false;
    }
}


export function tampilkanTema(teks) {
    const teksTema =
        document.querySelector("#teks-tema");

    if (teksTema) {
        teksTema.textContent = teks;
    }
}


export function validasiForm() {
    if (
        !namaMakanan ||
        !jenisMakanan ||
        !hargaMakanan ||
        !tombolSimpan
    ) {
        return false;
    }

    const nama =
        namaMakanan.value.trim();

    const jenis =
        jenisMakanan.value.trim();

    const harga =
        hargaMakanan.value.trim();

    let sah = true;


    if (nama === "") {
        namaMakanan.setAttribute(
            "aria-invalid",
            "true"
        );

        if (galatNama) {
            galatNama.textContent =
                "Nama makanan wajib diisi.";
        }

        sah = false;
    } else {
        namaMakanan.setAttribute(
            "aria-invalid",
            "false"
        );

        if (galatNama) {
            galatNama.textContent = "";
        }
    }


    if (jenis === "") {
        jenisMakanan.setAttribute(
            "aria-invalid",
            "true"
        );

        if (galatJenis) {
            galatJenis.textContent =
                "Jenis makanan wajib diisi.";
        }

        sah = false;
    } else {
        jenisMakanan.setAttribute(
            "aria-invalid",
            "false"
        );

        if (galatJenis) {
            galatJenis.textContent = "";
        }
    }


    const nilaiHarga =
        Number(harga);

    if (
        harga === "" ||
        Number.isNaN(nilaiHarga) ||
        nilaiHarga < 0
    ) {
        hargaMakanan.setAttribute(
            "aria-invalid",
            "true"
        );

        if (galatHarga) {
            galatHarga.textContent =
                "Harga wajib diisi dan tidak boleh kurang dari 0.";
        }

        sah = false;
    } else {
        hargaMakanan.setAttribute(
            "aria-invalid",
            "false"
        );

        if (galatHarga) {
            galatHarga.textContent = "";
        }
    }

    tombolSimpan.disabled = !sah;

    return sah;
}


export function tambahBarisMakanan(
    nama,
    jenis,
    harga
) {
    const daftarMakananBody =
        document.querySelector(
            "#daftar-makanan-body"
        );

    if (!daftarMakananBody) {
        return;
    }

    const barisBaru =
        document.createElement("tr");
    const kolomNama =
        document.createElement("th");
    kolomNama.scope = "row";
    kolomNama.textContent = nama;
    const kolomJenis =
        document.createElement("td");
    kolomJenis.textContent = jenis;
    const kolomHarga =
        document.createElement("td");
    kolomHarga.textContent =
        `Rp${harga.toLocaleString("id-ID")}`;
    const kolomRating =
        document.createElement("td");
    kolomRating.textContent = "-";

    barisBaru.append(
        kolomNama,
        kolomJenis,
        kolomHarga,
        kolomRating
    );

    daftarMakananBody.appendChild(
        barisBaru
    );
}


export function tampilkanSemuaMakanan(daftar) {
    if (!daftar) {
        return;
    }

    daftar.forEach((makanan) => {
        tambahBarisMakanan(
            makanan.nama,
            makanan.jenis,
            makanan.harga
        );
    });
}