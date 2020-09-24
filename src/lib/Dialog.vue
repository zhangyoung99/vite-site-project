<template>
    <div class="dialog-overlay"></div>
    <div class="dialog-body">
        <header>标题</header>
        <main>
            <div>内容一</div>
            <div>内容二</div>
        </main>
        <footer>
            <Button level="primary">OK</Button>
            <Button>Cancel</Button>
        </footer>
    </div>
</template>
<script lang="ts">
import Button from './Button.vue'
export default {
    components: {
        Button
    }
}
</script>