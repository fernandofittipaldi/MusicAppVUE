<template>
  <div class="container mt-4">
    <h1>Mis Datos</h1>
    
    <div v-if="user">
      <p><strong>Nombre:</strong> {{ user.name }}</p>
      <p><strong>Apellido:</strong> {{ user.lastName }}</p>
      <p><strong>User:</strong> {{ user.email }}</p>
      
      <router-link :to="'/edit-profile/' + user.id" class="btn btn-secondary mb-3">Editar Perfil</router-link>
      <button class="btn btn-danger mb-3" @click="showDeleteModal">Eliminar Cuenta</button>
      <button class="btn btn-warning mb-3" @click="logout">Cerrar sesión</button>
    </div>
  </div>

  <div v-if="isDeleteModalVisible" class="modal fade show" tabindex="-1" role="dialog" style="display: block;" aria-modal="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmación</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="hideDeleteModal"></button>
        </div>
        <div class="modal-body">
          <p>¿Está seguro de que desea eliminar su cuenta?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="deleteProfile">Sí</button>
          <button type="button" class="btn btn-secondary" @click="hideDeleteModal">No</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
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

  // console.log(user.value);
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

.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

</style>
