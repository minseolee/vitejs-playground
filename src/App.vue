<template>
    <div v-cloak id="app">
        <h1>Hello Vite</h1>
        <h2>{{ ver }}</h2>
    </div>
</template>

<script lang="ts">
import {reactive} from "vue";

export default {
    name: 'App',
    setup() {
        const state = reactive({
            ver: window.VITE_APP_VER
        })

        return { ver: state.ver }
    }
}
</script>
