<template>
    <button :class="buttonClass" @click="handleClick">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        buttonClass: {
            type: String,
            default: 'default-button',
        },
    },
    methods: {
        handleClick() {
            this.$emit('button-clicked');
        },
    },
};
</script>
