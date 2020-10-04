<template>
  <div class="my-tabs">
    <div class="my-tabs-nav">
      <div
        class="my-tabs-nav-item"
        v-for="(t, index) in titles"
        @click="select(t)"
        :key="index"
        :class="{ selected: t === selected }"
        :ref="el => { if(el) navItems[index] = el}"
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
import { computed, onMounted, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null)
    onMounted( () => {
        const divs = navItems.value;
        const result = divs.filter(div => 
            div.classList.contains('selected'))[0]
        console.log(result)
        const {width} = result.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
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
    return { defaults, titles, current, select, navItems,indicator };
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
    }
}
.my-tabs-content-item {
  margin-top: 10px;
}
.selected {
  color: $blue;
}
</style>
