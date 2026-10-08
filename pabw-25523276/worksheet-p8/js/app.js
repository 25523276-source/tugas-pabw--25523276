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
// DATA PROFIL
// ========================================

const profil = {
    nama: "Nazla Cahyani Sofyan",

    peran: "Mahasiswa Informatika",

    keahlian: [
        "HTML",
        "CSS",
        "JavaScript"
    ],

    jumlahProyek: daftarProyek.length
};


// ========================================
// FUNGSI MURNI 1
// ========================================

function buatPerkenalan({ nama, peran }) {

    return `${nama} — ${peran}`;

}


// ========================================
// FUNGSI MURNI 2
// ========================================

function formatKeahlian(daftar) {

    return daftar.join(" · ");

}


// ========================================
// MENJALANKAN FUNGSI
// ========================================

const perkenalan =
    buatPerkenalan(profil);

const hasilKeahlian =
    formatKeahlian(profil.keahlian);

console.log(perkenalan);

console.log(hasilKeahlian);


// ========================================
// ARRAY METHOD MAP
// ========================================

const judulProyek =
    daftarProyek.map((proyek) => {

        return proyek.judul;

    });

console.log("Daftar judul proyek:");

console.table(judulProyek);


// ========================================
// ARRAY METHOD FILTER
// ========================================

const proyekSelesai =
    daftarProyek.filter((proyek) => {

        return proyek.selesai === true;

    });

console.log("Proyek yang sudah selesai:");

console.table(proyekSelesai);


// ========================================
// ARRAY METHOD FIND
// ========================================

const proyekDicari =
    daftarProyek.find((proyek) => {

        return proyek.judul ===
            "Daftar Makanan Favorite Nazla";

    });

console.log("Hasil find:");

console.log(proyekDicari);

const proyekUrut = [...daftarProyek].sort((a, b) => {
    return a.tahun - b.tahun;
});

console.log("Hasil setelah sort:");
console.table(proyekUrut);

console.log("Data asli setelah sort:");
console.table(daftarProyek);

// ========================================
// MENAMPILKAN DATA PROFIL KE HTML
// ========================================

const namaElement =
    document.querySelector("#nama-profil");

const peranElement =
    document.querySelector("#peran-profil");

const keahlianElement =
    document.querySelector("#keahlian-profil");

const jumlahProyekElement =
    document.querySelector("#jumlah-proyek");


// Nama

if (namaElement) {

    namaElement.textContent =
        profil.nama;

}


// Peran

if (peranElement) {

    peranElement.textContent =
        profil.peran;

}


// Keahlian

if (keahlianElement) {

    keahlianElement.textContent =
        hasilKeahlian;

}


// Jumlah proyek

if (jumlahProyekElement) {

    jumlahProyekElement.textContent =
        profil.jumlahProyek;

}


// ========================================
// MENAMPILKAN DAFTAR PROYEK KE HTML
// ========================================

const daftarProyekElement =
    document.querySelector("#daftar-proyek");


if (daftarProyekElement) {

    daftarProyekElement.innerHTML = "";

    daftarProyek.forEach((proyek) => {

        const item =
            document.createElement("li");

        item.textContent =
            `${proyek.judul} - ${proyek.tahun}`;

        daftarProyekElement.appendChild(item);

    });

}


// ========================================
// FORM TAMBAH MAKANAN
// ========================================

const formMakanan =
    document.querySelector("#form-makanan");

const daftarMakananBody =
    document.querySelector("#daftar-makanan-body");


if (formMakanan) {

    formMakanan.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const namaMakanan =
                document.querySelector(
                    "#nama-makanan"
                ).value;


            const jenisMakanan =
                document.querySelector(
                    "#jenis-makanan"
                ).value;


            const hargaMakanan =
                document.querySelector(
                    "#harga-makanan"
                ).value;


            // Mengubah string menjadi angka

            const harga =
                Number(hargaMakanan);


            const barisBaru =
                document.createElement("tr");


            barisBaru.innerHTML = `
                <th scope="row">
                    ${namaMakanan}
                </th>

                <td>
                    ${jenisMakanan}
                </td>

                <td>
                    Rp${harga.toLocaleString("id-ID")}
                </td>

                <td>
                    -
                </td>
            `;


            if (daftarMakananBody) {

                daftarMakananBody.appendChild(
                    barisBaru
                );

            }


            formMakanan.reset();

        }
    );

}


// ========================================
// TEMA TERANG / GELAP
// ========================================

const tema =
    document.querySelector("#tema");


// Tidak perlu menampilkan checkbox.
// Tema berubah ketika tulisan "Tema Gelap"
// ditekan.

if (tema) {

    tema.addEventListener(
        "change",
        function () {

            if (tema.checked) {

                console.log("Tema Gelap aktif");

            } else {

                console.log("Tema Terang aktif");

            }

        }
    );

}