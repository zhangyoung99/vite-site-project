<template>
    <div>
        <button class="my-switch" @click="toggle" :class="{checked:value}"><span></span></button>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return {toggle}
    }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.my-switch{
    height: $h;
    width: $h*2;
    background-color: grey;
    border-radius: $h/2;
    position: relative;
    &.checked {
        background-color: #1890ff;
    }
    &.checked > span {
        left: calc(100% - #{$h2} - 2px);
    }
    &:focus {
        outline: none;
    }
} 
span {
    position: absolute;
    top: 0;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
}
</style>