<script setup>
const props = defineProps({
    profil: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <header>
        <h1>{{ props.profil.nama }}</h1>
        <p>{{ props.profil.peran }}</p>

        <p>
            {{ props.profil.keahlian.join(" · ") }}
        </p>
    </header>
</template>