<template>
  <div>
    <h1>Músicos</h1>
    <button v-on:click="searchMusicians">Buscar Músicos</button>
    <ul>
      <li v-for="musician in musicians" :key="musician.name">
        <p>Nombre: {{ musician.name }}</p>
        <p>Apellido: {{ musician.lastName }}</p>
        <p>Email: {{ musician.email }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
//import axios from 'axios';
import api from '../../utils/api.js';


const musicians = ref([]);

const searchMusicians = async () => {
  try {
    const response = await api.get('/musicians');
    musicians.value = response.data.message;
    console.log(musicians.value);
  } catch (error) {
    console.error('Error buscando músicos:', error);
  }
};

//onMounted(searchMusicians);

</script>

<style scoped>
button {
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

li {
  margin-bottom: 10px;
}

p {
  margin: 0;
}

</style>
