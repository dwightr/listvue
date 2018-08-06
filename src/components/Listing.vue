<template>
    <div v-if="ready" class="assets">
        <div v-for="photo in albums" :key="photo.id">
            <router-link append :to="photo.id">
                <img :src="photo.url" alt="">
            </router-link>
            <p>{{photo.title}}</p>
            <button @click="addMe(photo)">Add</button>
            <button @click="showMe(photo)">log deets</button>
        </div>    
    </div>
    <div v-else><h1>Loading list view...</h1></div>
</template>

<script src="./listing.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
