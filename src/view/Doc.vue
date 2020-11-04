<template>
<div>
    <TopNav />
    <div class="content">
        <aside v-if="asideVisible">
            <h2>文档</h2>
            <ol>
                <li>
                    <router-link to="/doc/intro">介绍</router-link>
                </li>
                <li>
                    <router-link to="/doc/install">安装</router-link>
                </li>
                <li>
                    <router-link to="/doc/get-started">开始使用</router-link>
                </li>
            </ol>
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">
                        switch 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs 组件</router-link>
                </li>
            </ol>
        </aside>
        <main>
            <router-view />
        </main>
    </div>
</div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
import {
    inject,
    Ref
} from 'vue'
export default {
    components: {
        TopNav
    },
    setup() {
        const asideVisible = inject < Ref < boolean >> ('asideVisible') //get
        return {
            asideVisible
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    > main {
        width: calc(100% - 150px);
        background-color: lightgreen;
        padding: 10px;
    }
}
aside {
    background-color: lightblue;
    width: 150px;
    padding: 16px;
    height: 100vh;

    >h2 {
        margin-bottom: 4px;
    }

    >ol>li {
        padding: 4px;
    }

    @media (max-width: 500px) {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;

    }
}
</style>
