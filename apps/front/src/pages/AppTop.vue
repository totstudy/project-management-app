<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { getCheck } from '../services/auth/getCheck';

const tokenChack = getCheck;
console.log("tokenChack:",tokenChack)
</script>
<template>
    <h1>TOP</h1>
    <nav id="breadcrumbs">
        <ul>
            <li>TOP</li>
        </ul>
    </nav>
    <section>
        <p>
            <RouterLink :to="{name: 'projectList'}">
            案件管理はこちら
            </RouterLink>
        </p>
    </section>
</template>

<style scoped>
ul {
    padding-left:0;
}
li {
    list-style: none;
}
</style>

