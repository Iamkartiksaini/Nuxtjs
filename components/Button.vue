<template>
    <button v-bind="restProps">
        <slot>{{ label }}</slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    computed: {
        restProps() {
            const { label, ...rest } = this.$props;
            return rest;
        }
    }
}
</script>
