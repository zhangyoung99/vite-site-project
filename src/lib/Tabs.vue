<template>
    <div class="my-tabs">
        <div class="my-tabs-nav">
            <div class="my-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>            
        </div>
        <div class="my-tabs-content">
            <component v-for="(c,index) in defaults" :is="c" :key="index"></component>            
        </div>

    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
export default {
    setup(props,context) {
        const defaults = context.slots.default()
        defaults.forEach(el => {
            if(el.type !== Tab) {
                throw new Error(' Tabs 子标签不是 tab ')
            }
        });

        const titles = defaults.map((el) => {
           return el.props.title
        })
        return {defaults, titles}
    }
}
</script>
<style lang="scss" scoped>
.my-tabs {
    background-color: #fff;
    padding: 10px;
}
.my-tabs-nav {
    display: flex;
    border-bottom: 1px solid #999;
    .my-tabs-nav-item{
        margin-right: 20px;

    }
}
</style>