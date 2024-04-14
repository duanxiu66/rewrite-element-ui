<template>
    <button class="el-button" :class="[
            type ? `el-button--${type}` : '',
            plain ? 'is-plain' : '',
            round ? 'is-round' : '',
            circle ? 'is-circle' : '',
            disabled ? 'is-disabled' : '',
        ]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ElButton",
    props: {
        type: String,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        disabled: Boolean,
    },
};
</script>

<style>
</style>