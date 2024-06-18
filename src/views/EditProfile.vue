<template>
  <div class="edit-profile-container">
    <h1>Editar Perfil</h1>
    <form @submit.prevent="updateProfile">
      <div>
        <label for="name">Nombre:</label>
        <input v-model="form.name" id="name" type="text" />
      </div>
      <div>
        <label for="lastName">Apellido:</label>
        <input v-model="form.lastName" id="lastName" type="text" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="form.email" id="email" type="email" />
      </div>
      <button type="submit">Actualizar</button>
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
    console.log(token);
    const userId = route.params.id;
    console.log(userId);
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
