// ========================================
// DATA PROFIL
// ========================================

const profil = {
    nama: "Nazla Cahyani Sofyan",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 3
};


// ========================================
// DATA PROYEK
// ========================================

const daftarProyek = [
    {
        judul: "Halaman Profil P6",
        tahun: 2026,
        selesai: true
    },
    {
        judul: "Daftar Makanan Favorite Nazla",
        tahun: 2026,
        selesai: true
    },
    {
        judul: "Latihan JavaScript P8",
        tahun: 2026,
        selesai: false
    }
];


// ========================================
// FUNGSI MURNI
// ========================================

// Fungsi 1
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}


// Fungsi 2
function formatKeahlian(daftar) {
    return daftar.join(" · ");
}


// ========================================
// MENGGUNAKAN FUNGSI
// ========================================

const perkenalan = buatPerkenalan(profil);
const hasilKeahlian = formatKeahlian(profil.keahlian);

console.log(perkenalan);
console.log(hasilKeahlian);


// ========================================
// ARRAY METHOD: MAP
// ========================================

const judulProyek = daftarProyek.map((proyek) => {
    return proyek.judul;
});

console.log("Daftar judul proyek:");
console.table(judulProyek);


// ========================================
// ARRAY METHOD: FILTER
// ========================================

const proyekSelesai = daftarProyek.filter((proyek) => {
    return proyek.selesai === true;
});

console.log("Proyek yang sudah selesai:");
console.table(proyekSelesai);


// ========================================
// ARRAY METHOD: FIND
// ========================================

const proyekDicari = daftarProyek.find((proyek) => {
    return proyek.judul === "Daftar Makanan Favorite Nazla";
});

console.log("Hasil find:");
console.log(proyekDicari);


// ========================================
// MENAMPILKAN DATA PROFIL KE HTML
// ========================================

const namaElement = document.querySelector("#nama-profil");
const peranElement = document.querySelector("#peran-profil");
const keahlianElement = document.querySelector("#keahlian-profil");
const jumlahProyekElement = document.querySelector("#jumlah-proyek");


// Nama
if (namaElement) {
    namaElement.textContent = profil.nama;
}


// Peran
if (peranElement) {
    peranElement.textContent = profil.peran;
}


// Keahlian
if (keahlianElement) {
    keahlianElement.textContent = hasilKeahlian;
}


// Jumlah proyek
if (jumlahProyekElement) {
    jumlahProyekElement.textContent = profil.jumlahProyek;
}


// ========================================
// FORM TAMBAH MAKANAN
// ========================================

const formMakanan = document.querySelector("#form-makanan");
const daftarMakananBody = document.querySelector("#daftar-makanan-body");

if (formMakanan) {

    formMakanan.addEventListener("submit", function (event) {

        event.preventDefault();

        const namaMakanan =
            document.querySelector("#nama-makanan").value;

        const jenisMakanan =
            document.querySelector("#jenis-makanan").value;

        const hargaMakanan =
            document.querySelector("#harga-makanan").value;


        const harga = Number(hargaMakanan);


        const barisBaru = document.createElement("tr");

        barisBaru.innerHTML = `
            <td>${namaMakanan}</td>
            <td>${jenisMakanan}</td>
            <td>Rp${harga.toLocaleString("id-ID")}</td>
            <td>-</td>
        `;


        if (daftarMakananBody) {
            daftarMakananBody.appendChild(barisBaru);
        }


        formMakanan.reset();
    });
}


// ========================================
// TEMA TERANG / GELAP
// ========================================

const tema = document.querySelector("#tema");
const teksTema = document.querySelector("#teks-tema");

if (tema && teksTema) {

    tema.addEventListener("change", function () {

        if (tema.checked) {
            teksTema.textContent = "Tema Gelap";
        } else {
            teksTema.textContent = "Tema Terang";
        }

    });

}