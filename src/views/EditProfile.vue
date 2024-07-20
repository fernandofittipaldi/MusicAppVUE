<template>
  <div class="container mt-4">
    <h1>Editar Perfil</h1>
    <form @submit.prevent="updateProfile">
      <div class="mb-3">
        <label for="name" class="form-label">Nombre:</label>
        <input v-model="form.name" id="name" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Apellido:</label>
        <input v-model="form.lastName" id="lastName" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input v-model="form.email" id="email" type="email" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Actualizar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const form = ref({
  name: '',
  lastName: '',
  email: ''
});

const router = useRouter();
const route = useRoute();

const updateProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    //console.log(token);
    const userId = route.params.id;
    //console.log(userId);
    await axios.put(`http://localhost:8080/musicians/${userId}`, form.value, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    router.push('/dashboard');
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};


</script>

<style scoped>

</style>
