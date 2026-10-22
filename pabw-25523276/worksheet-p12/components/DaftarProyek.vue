<script setup>
import { computed } from "vue"

import { state, tambahFavorit } from "../state.js"
import { saring } from "../data.js"

const tampil = computed(() => {
    return saring(
        state.daftarProyek,
        state.kategoriAktif
    )
})
</script>

<template>
    <section>
        <p v-if="state.memuat">
            Memuat data...
        </p>

        <p v-else-if="state.galat">
            {{ state.galat }}
        </p>

        <p v-else-if="tampil.length === 0">
            Belum ada data.
        </p>

        <ul
            v-else
            id="daftar-proyek"
        >
            <li
                v-for="proyek in tampil"
                :key="proyek.id"
                class="kartu"
            >
                <h3>{{ proyek.judul }}</h3>
                <p>{{ proyek.tahun }}</p>
                <p>{{ proyek.kategori }}</p>

                <button
                    class="favorit"
                    @click="tambahFavorit(proyek.id)"
                >
                    {{
                        state.favorit.includes(proyek.id)
                            ? "★"
                            : "☆"
                    }}
                </button>
            </li>
        </ul>
    </section>
</template>