const wadah = document.querySelector("#daftar-proyek");
const filter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong");
const muat = document.querySelector("#muat");

const tombolFilter = document.querySelectorAll(".filter");

const formMakanan = document.querySelector("#form-makanan");
const namaMakanan = document.querySelector("#nama-makanan");
const jenisMakanan = document.querySelector("#jenis-makanan");
const hargaMakanan = document.querySelector("#harga-makanan");

const tombolSimpan = formMakanan.querySelector(
    'button[type="submit"]'
);

const galatNama = document.querySelector("#galat-nama-makanan");
const galatJenis = document.querySelector("#galat-jenis-makanan");
const galatHarga = document.querySelector("#galat-harga-makanan");


function buatKartu(proyek) {
    const kartu = document.createElement("li");

    kartu.className = "kartu";

    kartu.textContent = `${proyek.judul} - ${proyek.tahun}`;

    return kartu;
}


export function render(daftar) {

    wadah.textContent = "";

    if (daftar.length === 0) {

        kosong.textContent =
            "Belum ada proyek pada kategori ini.";

        kosong.hidden = false;

        return;
    }

    kosong.hidden = true;

    daftar.forEach((proyek) => {

        const kartu = buatKartu(proyek);

        wadah.append(kartu);
    });
}


export function aturMemuat(status) {

    muat.hidden = !status;
}


export function tampilkanGalat(pesan) {

    kosong.textContent = pesan;

    kosong.hidden = false;
}


export function pasangFilter(daftarProyek) {

    filter.addEventListener("click", (event) => {

        const tombol = event.target.closest("button");

        if (!tombol) {
            return;
        }

        const kategori = tombol.dataset.kategori;

        const terpilih =
            kategori === "semua"
                ? daftarProyek
                : daftarProyek.filter(
                    (proyek) =>
                        proyek.kategori === kategori
                );

        tombolFilter.forEach((item) => {

            item.classList.toggle(
                "aktif",
                item === tombol
            );
        });

        render(terpilih);
    });
}


export function pasangValidasiForm() {

    formMakanan.noValidate = true;

    function validasiForm() {

        const nama = namaMakanan.value.trim();
        const jenis = jenisMakanan.value.trim();
        const harga = hargaMakanan.value.trim();

        let sah = true;


        if (nama === "") {

            namaMakanan.setAttribute(
                "aria-invalid",
                "true"
            );

            galatNama.textContent =
                "Nama makanan wajib diisi.";

            sah = false;

        } else {

            namaMakanan.setAttribute(
                "aria-invalid",
                "false"
            );

            galatNama.textContent = "";
        }


        if (jenis === "") {

            jenisMakanan.setAttribute(
                "aria-invalid",
                "true"
            );

            galatJenis.textContent =
                "Jenis makanan wajib diisi.";

            sah = false;

        } else {

            jenisMakanan.setAttribute(
                "aria-invalid",
                "false"
            );

            galatJenis.textContent = "";
        }


        const nilaiHarga = Number(harga);

        if (
            harga === "" ||
            Number.isNaN(nilaiHarga) ||
            nilaiHarga < 0
        ) {

            hargaMakanan.setAttribute(
                "aria-invalid",
                "true"
            );

            galatHarga.textContent =
                "Harga wajib diisi dan tidak boleh kurang dari 0.";

            sah = false;

        } else {

            hargaMakanan.setAttribute(
                "aria-invalid",
                "false"
            );

            galatHarga.textContent = "";
        }


        tombolSimpan.disabled = !sah;

        return sah;
    }


    namaMakanan.addEventListener(
        "input",
        validasiForm
    );

    jenisMakanan.addEventListener(
        "input",
        validasiForm
    );

    hargaMakanan.addEventListener(
        "input",
        validasiForm
    );


    formMakanan.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            const sah = validasiForm();

            if (!sah) {

                const inputSalah = [
                    namaMakanan,
                    jenisMakanan,
                    hargaMakanan
                ].find(
                    (input) =>
                        input.getAttribute(
                            "aria-invalid"
                        ) === "true"
                );

                if (inputSalah) {
                    inputSalah.focus();
                }
            }
        }
    );


    formMakanan.addEventListener(
        "reset",
        () => {

            setTimeout(() => {
                validasiForm();
            }, 0);

        }
    );


    validasiForm();
}


export function pasangFormMakanan() {

    const daftarMakananBody =
        document.querySelector(
            "#daftar-makanan-body"
        );


    formMakanan.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            const nama =
                namaMakanan.value.trim();

            const jenis =
                jenisMakanan.value.trim();

            const harga =
                Number(hargaMakanan.value);


            if (
                nama === "" ||
                jenis === "" ||
                Number.isNaN(harga) ||
                harga < 0
            ) {
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


            if (daftarMakananBody) {

                daftarMakananBody.appendChild(
                    barisBaru
                );
            }


            formMakanan.reset();
        }
    );
}