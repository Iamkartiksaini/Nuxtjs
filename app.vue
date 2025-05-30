<template>
  <div>
    <Header />
    <div class="pages">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style lang="css">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .pages {
    margin-top: 1rem;
    border: 3px solid #cacaca;
  }
}
</style>