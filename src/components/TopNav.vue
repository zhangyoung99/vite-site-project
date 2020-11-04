<template>
<div class="topnav">
    <div class="logo">logo</div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleAside"></span>
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
    position: relative;
    padding: 10px;
    z-index: 5;
    justify-content: center;
    align-items: center;

    .logo {
        margin-right: auto;
    }

    .toggleAside {
        width: 16px;
        height: 16px;
        background-color: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }

    .menu {
        display: flex;

        >li {
            margin: 0 1em;
        }

    }

    @media (max-width: 500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        .toggleAside {
            display: inline-block;
        }
    }
}
</style>
