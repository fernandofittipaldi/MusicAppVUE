<template>
  <div class="container mt-4">
    <h1>Registrarse</h1>
    <form @submit.prevent="registerMusician" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="name" class="form-label">Nombre:</label>
        <input id="name" v-model="musician.name" type="text" class="form-control" required />
        <div class="invalid-feedback">Por favor, ingrese su nombre.</div>
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Apellido:</label>
        <input id="lastName" v-model="musician.lastName" type="text" class="form-control" required />
        <div class="invalid-feedback">Por favor, ingrese su apellido.</div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input id="email" v-model="musician.email" type="email" class="form-control" required />
        <div class="invalid-feedback">Por favor, ingrese un email válido.</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input id="password" v-model="musician.password" type="password" class="form-control" required />
        <div class="invalid-feedback">Por favor, ingrese una contraseña.</div>
      </div>
      <div class="mb-3">
        <label for="city" class="form-label">Ciudad:</label>
        <input id="city" v-model="musician.city" type="text" class="form-control" required />
        <div class="invalid-feedback">Por favor, ingrese su ciudad.</div>
      </div>
      <div class="mb-3">
        <label for="experience" class="form-label">Experiencia:</label>
        <input id="experience" v-model="musician.experience" type="number" class="form-control" required />
        <div class="invalid-feedback">Por favor, ingrese su experiencia.</div>
      </div>
      <button type="submit" class="btn btn-primary">Registrar</button>
    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';

const musician = ref({
  name: '',
  lastName: '',
  password: '',
  email: '',
  city: '',
  experience: '',

});

const registerMusician = async () => {
  try {
    const response = await axios.post('http://localhost:8080/musicians', musician.value);
    if (response.data.success) {
      alert('Músico registrado exitosamente');
      musician.value = { name: '', lastName: '', password: '', email: '', city: '', experience: '' };
    } else {
      alert('Error registrando el músico: ' + response.data.message);
    }
  } catch (error) {
    console.error('Error registrando músico:', error);
    alert('Ocurrió un error al registrar el músico');
  }
};

</script>

<style scoped>

</style>