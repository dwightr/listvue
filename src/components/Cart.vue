<template>
  <div v-if="ready" class="dwight">
    <div v-for="item in cart" :key="item.id">
      <img :src="item.url" alt="item.url">
    </div>
  </div>
  <div v-else>
    <h1>Loading cart view....</h1>
  </div>
</template>

<script src="./cart.js"></script>