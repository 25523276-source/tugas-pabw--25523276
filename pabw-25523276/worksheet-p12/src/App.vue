
<script setup>
import { onMounted, watch } from "vue"

import KepalaProfil from "../compenents/KepalaProfil.vue"
import TombolFilter from "../compenents/TombolFilter.vue"
import DaftarProyek from "../compenents/DaftarProyek.vue"
import FormKontak from "../compenents/FormKontak.vue"

import { profil } from "./data.js"
import { state, simpan, muat, pulihkan, isiProyek } from "./state.js"
import { ambilProyek } from "./api.js"

onMounted(async () => {
  pulihkan(muat())

  try {
    isiProyek(await ambilProyek())
  } catch (galat) {
    state.galat =
      "Data gagal dimuat. Periksa koneksi, lalu muat ulang."
  } finally {
    state.memuat = false
  }
})

watch(
  state,
  () => {
    simpan()
  },
  { deep: true }
)
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main>
      <TombolFilter />
      <DaftarProyek />
      <FormKontak />
    </main>
  </div>
</template>