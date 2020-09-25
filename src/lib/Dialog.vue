<template>
    <template v-if="visible">
        <div class="my-dialog-overlay"></div>
        <div class="my-dialog-wrapper">
            <div class="my-dialog">
                <header>
                    <slot name="title"/>
                    <i @click="close" class="close">X</i></header>
                <hr>
                <main>
                    <slot name="content"/>
                </main>
                <hr>
                <footer class="dialog-footer">
                    <Button level="primary" @click="confirm">OK</Button>
                    <Button @click="cancel">Cancel</Button>
                </footer>
            </div>
        </div>
    </template>
</template>
<script lang="ts">
import Button from './Button.vue'
export default {
    components: {
        Button
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        confirm: {
            type: Function
        },
        cancel: {
            type: Function
        }
    },
    setup(props, context) {
        const close = () => {
            context.emit('update:visible',false)
        }
        const confirm = () => {
            // props.confirm && props.confirm() !== false
            if(props.confirm?.() !== false)   {
                close()
            }
        }
        const cancel = () => {
            context.emit('cancel')
            close()
        }
        return {close,confirm,cancel}
    }
}
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.my-dialog-overlay {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #e5e5e5;
    z-index: 9;
}
.my-dialog-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;

}
.my-dialog {
    background: white;
    border-radius: $radius;
    min-width: 15em;
    width: 400px;
    position: relative;
    padding: 10px;
    > header {
        width: 90%;
    }
    .close {
        display: inline-block;
        width: 6px;
        height: 6px;
        position: absolute;
        right: 15px;
        cursor: pointer;
    }
    .dialog-footer {
        display: flex;
        justify-content: flex-end;
    }
}

</style>