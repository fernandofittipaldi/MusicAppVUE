<template>
  <div>
    <h1>Mis Datos</h1>
    
    <div v-if="user">
      <p>Nombre: {{ user.name }}</p>
      <p>Apellido: {{ user.lastName }}</p>
      <p>User: {{ user.email }}</p>
      
      <router-link :to="'/edit-profile/' + user.id">Editar Perfil</router-link>

      <button @click="logout">Cerrar sesión</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
//import axios from 'axios';
import api from '../../utils/api.js';
import EditProfile from './EditProfile.vue';

const isEditing = ref(false);
const user = ref(null);

const fetchUserData = async () => {
  // try {
  //   const token = localStorage.getItem('token');
  //   console.log(token);
  //   if (!token) {
  //     console.error('No token found');
  //     return;
  //   }
  try {
    const response = await api.get('/musicians/me'); 
    user.value = response.data.message.user;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });

    console.log(user.value);
  // } catch (error) {
  //   console.error('Error fetching user data:', error);
  // }
};

const logout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

onMounted(() => {
  fetchUserData();
});
</script>

<style scoped>

</style>
