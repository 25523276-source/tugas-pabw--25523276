import { ambilProyek } from "./api.js";

import {
    state,
    isiProyek,
    pulihkan,
    muat
} from "./state.js";

import {
    tampilkanProfil,
    aturMemuat,
    tampilkanGalat
} from "./dom.js";

import {
    pasangPendengar
} from "./events.js";


async function mulai() {

    pulihkan(muat());

    pasangPendengar();

    tampilkanProfil(
        state.daftarProyek.length
    );

    aturMemuat(true);

    try {

        const data =
            await ambilProyek();

        isiProyek(data);

        tampilkanProfil(
            data.length
        );

    } catch (galat) {

        tampilkanGalat(
            "Data gagal dimuat. Periksa koneksi, lalu muat ulang."
        );

        console.error(
            "Gagal memuat:",
            galat.message
        );

    } finally {

        aturMemuat(false);
    }
}


mulai();