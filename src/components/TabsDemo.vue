<template>
    <div class="tabs">
        Tabs示例
        <h1>示例1</h1>
    </div>
    <Tabs selected="导航1">
        <Tab title="导航1">内容一</Tab>
        <Tab title="导航2">内容二</Tab>
    </Tabs>    

</template>
<script>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
    components: {
        Tabs,
        Tab
    }
}
</script>
<style lang="scss">
</style>
