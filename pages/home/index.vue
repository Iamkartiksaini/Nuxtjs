<template>
  <div class="postPage">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { posts, fetchPosts } from './script.js';
onMounted(fetchPosts);
</script>