import {
    pilihKategori,
    tambahFavorit,
    aturUlang
} from "./state.js";

import {
    tampilkanTema,
    validasiForm,
    tambahBarisMakanan
} from "./dom.js";


export function pasangPendengar() {

    const filter =
        document.querySelector("#filter");

    const daftarProyek =
        document.querySelector("#daftar-proyek");

    const tombolReset =
        document.querySelector("#atur-ulang");

    const tema =
        document.querySelector("#tema");

    const formMakanan =
        document.querySelector("#form-makanan");

    const namaMakanan =
        document.querySelector("#nama-makanan");

    const jenisMakanan =
        document.querySelector("#jenis-makanan");

    const hargaMakanan =
        document.querySelector("#harga-makanan");


    // Filter kategori
    if (filter) {
        filter.addEventListener(
            "click",
            (event) => {

                const tombol =
                    event.target.closest(".filter");

                if (!tombol) {
                    return;
                }

                pilihKategori(
                    tombol.dataset.kategori
                );
            }
        );
    }


    // Tombol favorit
    if (daftarProyek) {
        daftarProyek.addEventListener(
            "click",
            (event) => {

                const tombol =
                    event.target.closest(".favorit");

                if (!tombol) {
                    return;
                }

                tambahFavorit(
                    Number(tombol.dataset.id)
                );
            }
        );
    }


    // Tombol Atur Ulang
    if (tombolReset) {
        tombolReset.addEventListener(
            "click",
            () => {
                aturUlang();
            }
        );
    }


    // Tema
    if (tema) {
        tema.addEventListener(
            "change",
            () => {

                if (tema.checked) {
                    tampilkanTema(
                        "Tema Terang"
                    );
                } else {
                    tampilkanTema(
                        "Tema Gelap"
                    );
                }
            }
        );
    }


    // Form makanan
    if (!formMakanan) {
        return;
    }

    formMakanan.noValidate = true;


    if (namaMakanan) {
        namaMakanan.addEventListener(
            "input",
            validasiForm
        );
    }


    if (jenisMakanan) {
        jenisMakanan.addEventListener(
            "input",
            validasiForm
        );
    }


    if (hargaMakanan) {
        hargaMakanan.addEventListener(
            "input",
            validasiForm
        );
    }


    // Submit form
    formMakanan.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            if (!validasiForm()) {
                return;
            }

            const nama =
                namaMakanan.value.trim();

            const jenis =
                jenisMakanan.value.trim();

            const harga =
                Number(hargaMakanan.value);

            tambahBarisMakanan(
                nama,
                jenis,
                harga
            );

            formMakanan.reset();

            validasiForm();
        }
    );


    // Reset form
    formMakanan.addEventListener(
        "reset",
        () => {
            setTimeout(() => {
                validasiForm();
            }, 0);
        }
    );


    // Validasi awal
    validasiForm();
}