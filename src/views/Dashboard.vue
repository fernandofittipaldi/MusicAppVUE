<template>
  <div>
    <h1>Mis Datos</h1>
    
    <div v-if="user">
      <p>Nombre: {{ user.name }}</p>
      <p>Apellido: {{ user.lastName }}</p>
      <p>User: {{ user.email }}</p>
      
      <router-link :to="'/edit-profile/' + user.id">Editar Perfil</router-link>
      <button class="delete-button" @click="showDeleteModal">Eliminar Cuenta</button>

      <button @click="logout">Cerrar sesión</button>
    </div>
  </div>

  <div v-if="isDeleteModalVisible" class="modal-overlay">
    <div class="modal">
      <p>¿Está seguro de que desea eliminar su cuenta?</p>
      <button @click="deleteProfile" class="confirm-button">Sí</button>
      <button @click="hideDeleteModal" class="cancel-button">No</button>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
//import axios from 'axios';
import api from '../../utils/api.js';
import EditProfile from './EditProfile.vue';

const isEditing = ref(false);
const user = ref(null);
const router = useRouter();
const isDeleteModalVisible = ref(false);

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

const showDeleteModal = () => {
  isDeleteModalVisible.value = true;
};

const hideDeleteModal = () => {
  isDeleteModalVisible.value = false;
};

const deleteProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }
    await api.delete(`/musicians/${user.value.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    logout();
  } catch (error) {
    console.error('Error deleting profile:', error);
  }
  hideDeleteModal();
};

onMounted(() => {
  fetchUserData();
});
</script>

<style scoped>

.delete-button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: darkred;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.confirm-button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.confirm-button:hover {
  background-color: darkred;
}

.cancel-button {
  background-color: gray;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: darkgray;
}

</style>
