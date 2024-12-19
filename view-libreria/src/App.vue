<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Libros</RouterLink>
        <RouterLink to="/nuevo-libro">Nuevo Libro</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        background-color: #007bff;
        color: white;
    }
    .wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    a{
        text-decoration: none;
        color: white;
        margin: 0 10px;
    }
</style>
