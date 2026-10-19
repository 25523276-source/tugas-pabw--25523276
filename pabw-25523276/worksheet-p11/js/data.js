export const profil = {
    nama: "Nazla Cahyani Sofyan",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
    return daftar.join(" · ");
}

export function saring(daftar, kategori) {
    if (kategori === "semua") {
        return daftar;
    }

    return daftar.filter(
        (proyek) => proyek.kategori === kategori
    );
}