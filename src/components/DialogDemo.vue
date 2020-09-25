<template>
    <div>
        <div>dialog 示例</div>
        <h2>示例一</h2>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="visible">
          <div>内容1</div>
          <div>内容2</div>
        </Dialog>
    </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
    components: {Dialog, Button},
    setup() {
        const visible = ref(false);
        const toggle = () => {
            visible.value = !visible.value
        }
        return {visible,toggle}
    }
}
</script>