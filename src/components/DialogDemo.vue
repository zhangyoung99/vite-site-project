<template>
    <div>
        <div>dialog 示例</div>
        <h2>示例一</h2>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="visible">
            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>
            <template v-slot:content>
                <strong>内容1</strong>
                <div>内容2</div>                
            </template>
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