<template>
    <div class="counter-container">
        <h1 class="heading">{{ myName }}</h1>
        <div class="buttons">
            <MyButton @button-clicked="increment" label="+" class="btn"></MyButton>
            <h1 class="count">{{ count }}</h1>
            <button @click="decrement" class="btn">-</button>
        </div>
    </div>
</template>

<script>
import "./style.css"
import MyButton from "@/components/Button.vue";
export default {
    components: {
        MyButton
    },
    data() {
        return {
            count: 0,
            myName: "Counter Page"
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
};
</script>
