<template>
<div class="topnav">
    <div class="logo"></div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
</div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
.topnav {
    display: flex;
    align-items: center;
    background-color: pink;
}

.logo {
    width: 30px;
    height: 30px;
    background-color: red;
}

.menu {
    display: flex;
}
</style>
