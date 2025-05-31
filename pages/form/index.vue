<template>
    <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" v-model="form.name" required
                    class="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 transition duration-200" />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" v-model="form.email" required
                    class="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 transition duration-200" />
            </div>
            <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" v-model="form.message" required
                    class="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300 transition duration-200"
                    rows="4"></textarea>
            </div>
            <button type="submit"
                class="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-200">
                Send Message
            </button>
        </form>
        <p v-if="successMessage" class="mt-4 text-green-600 font-medium">{{ successMessage }}</p>
    </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

const successMessage = ref(null);

const initForm = {
    name: '',
    email: '',
    message: '',
};

const form = reactive({ ...initForm });

function submitForm() {
    console.log(form);
    successMessage.value = "Form submitted successfully!";
    resetForm();
}

const handleMessageChange = (newVal, preValue) => {
    console.log('Message changed to:', newVal, preValue);
};

console.log("Component re render")

watch(() => form.name, handleMessageChange);

function resetForm() {
    Object.assign(form, initForm);
}
</script>
