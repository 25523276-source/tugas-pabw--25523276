import { render } from "./dom.js";
const KUNCI = "pabw-p11";
const VERSI = 2;
export const state = {
    daftarProyek: [],
    kategoriAktif: "semua",
    favorit: [],
    daftarMakanan: []
};

export function isiProyek(daftar) {
    state.daftarProyek = daftar;
    simpan(state);
    render(state);
}

export function pilihKategori(kategori) {
    state.kategoriAktif = kategori;
    simpan(state);
    render(state);
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) {
        state.favorit = state.favorit.filter(
            (item) => item !== id
        );
    } else {
        state.favorit = [
            ...state.favorit,
            id
        ];
    }
    simpan(state);
    render(state);
}

export function tambahMakanan(makanan) {
    state.daftarMakanan = [
        ...state.daftarMakanan,
        makanan
    ];
    simpan(state);
}

export function simpan(state) {
    const data = {
        versi: VERSI,
        kategoriAktif: state.kategoriAktif,
        favorit: state.favorit,
        daftarMakanan: state.daftarMakanan
    };

    localStorage.setItem(
        KUNCI,
        JSON.stringify(data)
    );
}

export function muat() {
    try {
        const isi = JSON.parse(
            localStorage.getItem(KUNCI)
        );

        if (isi?.versi !== VERSI) {
            localStorage.removeItem(KUNCI);
            return null;
        }

        return isi;
    } catch {
        localStorage.removeItem(KUNCI);
        return null;
    }
}

export function pulihkan(isi) {
    if (!isi) {
        return;
    }

    state.kategoriAktif =
        isi.kategoriAktif ?? "semua";

    state.favorit =
        isi.favorit ?? [];

    state.daftarMakanan =
        isi.daftarMakanan ?? [];
}

export function aturUlang() {
    localStorage.removeItem(KUNCI);
    state.kategoriAktif = "semua";
    state.favorit = [];
    state.daftarMakanan = [];
    render(state);
}