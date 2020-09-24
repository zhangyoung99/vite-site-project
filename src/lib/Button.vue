<template>
    <button class="my-button" :class="classes">
        <slot />
    </button>
</template>
<script>
import { computed} from 'vue'
export default {
    props: {
        theme: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: 'normal'
        },
        level: {
            type: String,
            default: 'plain'
        },
        loading: {
            type:Boolean,
            default: false
        }
    },
    setup(props) {
        const {theme,size,level} =  props
        const classes = computed(() => {
            return {
                [`my-theme-${theme}`]:theme,
                [`my-size-${size}`]:size,
                [`my-level-${level}`]:level
            }
        })
        return {classes}
    }
}
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$green: #67c23a;
$warning: #e6a23c;
$danger: #ff4d4f;
$radius: 4px;

.my-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & {
        margin-left: 8px;
    }
    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &.my-theme-link {
        border-color: transparent;
        color: $blue;
        box-shadow: none;
        &:hover, 
        &:focus {
            color:lighten($blue,10%);
        }
    }
    &.my-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }
    &.my-size-big {
        font-size: 24px;
        height:48px;
        margin-bottom: 10px;
    }
    &.my-size-small {
        font-size: 14px;
        height:24px;
    }
    &.my-levele-plain {
        background: #fff;
    }
    &.my-level-primary {
        background: $blue;
        &:hover,
        &:focus {
            color: darken($blue,10%);
        }
    }
    &.my-level-success {
        background: $green;
    }
    &.my-level-warning {
        background: $warning;
    }
    &.my-level-danger {
        background: $danger;
    }
}
</style>