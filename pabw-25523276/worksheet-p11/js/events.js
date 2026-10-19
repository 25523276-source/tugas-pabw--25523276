import {
    pilihKategori,
    tambahFavorit,
    aturUlang
} from "./state.js";

import {
    tampilkanTema
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


    if (tombolReset) {
        tombolReset.addEventListener(
            "click",
            () => {
                aturUlang();
            }
        );
    }


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
}