<template>
    <div>Button示例</div>
    <h2>示例一</h2>
    <div>
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
    <h2>示例二</h2>
    <div>
        <Button size="big">大大大</Button>
        <Button size="normal">普通</Button>
        <Button size="small">小小小</Button>
    </div>
    <div>
        <Button size="big" theme="link">大大大</Button>
        <Button size="normal" theme="link">普通</Button>
        <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
        <Button size="big" theme="text">大大大</Button>
        <Button size="normal" theme="text">普通</Button>
        <Button size="small" theme="text">小小小</Button>
    </div>
    <h2>示例三</h2>
    <div>
        <Button level="primary">主要按钮</Button>
        <Button level="plain">默认按钮</Button>
        <Button level="success">成功按钮</Button>
        <Button level="warning">警告按钮</Button>
        <Button level="danger">危险按钮</Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log('hi')
        }
        return {onClick}
    }
}
</script>