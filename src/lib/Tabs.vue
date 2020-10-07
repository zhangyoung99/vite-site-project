<template>
  <div class="my-tabs">
    <div class="my-tabs-nav" ref="container">
      <div
        class="my-tabs-nav-item"
        v-for="(t, index) in titles"
        @click="select(t)"
        :key="index"
        :class="{ selected: t === selected }"
        :ref="el => { if(t === selected) selectedItem = el}"
      >
        {{ t }}
      </div>
      <div class="my-tabs-nav-indicator" ref="indicator"></div>      
    </div>
    <div class="my-tabs-content">
      <component class="my-tabs-content-item" :is="current" :key="current.props.title"></component>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, onUpdated, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null)
    onMounted(() => {
        watchEffect(() => {
            const {width} = selectedItem.value?.getBoundingClientRect()
            indicator.value.style.width = width + 'px'
            const { left:left1 } = container.value.getBoundingClientRect()
            const { left:left2 } = selectedItem.value.getBoundingClientRect();
            const left = left2 - left1;
            indicator.value.style.left = left + 'px'
        })
    })

    const defaults = context.slots.default();
    defaults.forEach((el) => {
      if (el.type !== Tab) {
        throw new Error(" Tabs 子标签不是 tab ");
      }
    });

    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });

    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    const titles = defaults.map((el) => {
      return el.props.title;
    });
    return { defaults, titles, current, select, selectedItem, indicator, container };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
.my-tabs {
  background-color: #fff;
  padding: 10px;
  position: relative;
}
.my-tabs-nav {
  display: flex;
  border-bottom: 1px solid #999;
  position: relative;
    .my-tabs-nav-item {
        margin-right: 20px;
    }
    &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
    }
}
.my-tabs-content-item {
  margin-top: 10px;
}
.selected {
  color: $blue;
}
</style>
