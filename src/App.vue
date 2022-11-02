<template>
    <div id="app">
        <h1>PROCESS</h1>
        <h2>{{ process }}</h2>
        <br />
        <h1>META</h1>
        <h2>{{ meta }}</h2>
        <h1>SOME KEY</h1>
        <h2>{{ someKey }}</h2>
    </div>
</template>

<script lang="ts">
import {reactive, toRefs} from "vue";

export default {
    name: 'App',
    setup() {
        const state = reactive({
            process: VITE_PROCESS,
            meta: VITE_META,
            someKey: VITE_SOME_KEY,
        })

        return { ...toRefs(state) }
    }
}
</script>
