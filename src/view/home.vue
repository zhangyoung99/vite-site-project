<template>
<div class="topnav-banner">
    <TopNav />
    <div class="banner">
        <h1>轱辘UI</h1>
        <h2> 一个厉害的 UI 框架 </h2>
        <p class="actions">
            <a href="https://github.com">Github</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue"
export default {
    components: {
        TopNav
    }
}
</script>
<style lang="scss" scoped>
    .topnav-banner {
        background: linear-gradient(145deg,rgba(227,255,253,1) 0%,rgba(183,233,230,1) 100%);
    }
    .banner {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
            display: inline-block;
            width: 80px;
            height: 30px;
            line-height: 30px;
            margin-left: 10px;
            // border: 1px solid #e5e5e5;
            border-radius: 5px;
            text-align: center;
            background-color: #fff;
        }

    }
</style>
