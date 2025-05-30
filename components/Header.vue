<template>
    <div class="header">
        <h3>Logo</h3>
        <div class="nav">
            <NuxtLink to="/home">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
    </div>
</template>

<style lang="css" scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #cacaca;
    align-items: center;

    .nav {
        display: flex;
        gap: 2rem;

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
