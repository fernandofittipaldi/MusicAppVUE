<template>
  <div class="container mt-4">
    <h1>Músicos</h1>
    <button @click="searchMusicians" class="btn btn-primary mb-3">Buscar Músicos</button>
    <div v-if="musicians.length > 0">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Experiencia</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="musician in musicians" :key="musician.name">
            <td>{{ musician.name }}</td>
            <td>{{ musician.lastName }}</td>
            <td>{{ musician.city }}</td>
            <td>{{ musician.experience }}</td>
            <td>{{ musician.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No se encontraron músicos.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import api from '../../utils/api.js';


const musicians = ref([]);

const searchMusicians = async () => {
  try {
    const response = await api.get('/musicians');
    musicians.value = response.data.message;
    //console.log(musicians.value);
  } catch (error) {
    console.error('Error buscando músicos:', error);
  }
};

//onMounted(searchMusicians);

</script>

<style scoped>


</style>
