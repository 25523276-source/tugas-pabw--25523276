<script setup>
import {
    state,
    pilihKategori,
    aturUlang
} from "../state.js"

const kategori = [
    "semua",
    "web",
    "javascript",
    "mobile"
]
</script>

<template>
    <section>
        <div id="filter">
            <button
                v-for="item in kategori"
                :key="item"
                class="filter"
                :class="{ aktif: state.kategoriAktif === item }"
                @click="pilihKategori(item)"
            >
                {{ item }}
            </button>
        </div>

        <button
            id="atur-ulang"
            @click="aturUlang"
        >
            Atur Ulang
        </button>
    </section>
</template>