<template>
  <div class="contentWrapper">
    <div class="sidebar">
      <NuxtLink to="/home">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
    <slot />
  </div>
</template>
<style lang="css" scoped>
.contentWrapper {
  display: flex;

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 20px 50px;
    background-color: #cacaca;

    a {
      color: #000;
      text-decoration: none;

      &:hover {
        color: #0022ff;
      }
    }
  }
}
</style>