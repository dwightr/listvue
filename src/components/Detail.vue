<template>
  <div v-if="ready" class="dwight">
    <small>{{album.id}}</small><img :src="album.url" alt="album.title">
    <h1>{{album.title}}</h1>
    <button @click="addMe(album)">Add</button>
    <button @click="showMe(album)">log deets</button>
  </div>
  <div v-else>
    <h1>Loading detail view....</h1>
  </div>
</template>

<script src="./detail.js"></script>