<template>
<div>
    <Switch v-model:value = "check"/>
</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/switch.vue'
export default {
    components: {
        Switch
    },
    setup() {
        const check = ref(false)
        return {check}
    }
}
</script>
