<template>
<div class="topnav">
    <div class="logo" @click="toggleAside"></div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    setup() {
        const asideVisible = inject < Ref < boolean >> ('asideVisible') //get
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value
        }
        return {
            toggleAside
        }
    }
}
</script>

<style lang="scss" scoped>
.topnav {
    display: flex;
    align-items: center;
    background-color: pink;
    position: relative;
    z-index: 10;
}

.logo {
    width: 30px;
    height: 30px;
    background-color: red;
}

.menu {
    display: flex;

    >li {
        margin: 0 1em;
    }
}
</style>
