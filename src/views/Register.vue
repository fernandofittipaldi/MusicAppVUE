<template>
  <div>
    <h1>Registrarse</h1>
    <form @submit.prevent="registerMusician">
      <div>
        <label for="name">Nombre:</label>
        <input id="name" v-model="musician.name" type="text" required />
      </div>
      <div>
        <label for="lastName">Apellido:</label>
        <input id="lastName" v-model="musician.lastName" type="text" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="musician.password" type="password" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="musician.email" type="email" required />
      </div>
      <div>
        <label for="city">Ciudad:</label>
        <input id="city" v-model="musician.city" type="city" required />
      </div>
      <div>
        <label for="experience">Experiencia:</label>
        <input id="experience" v-model="musician.experience" type="number" required />
      </div>
      <button type="submit">Registrar</button>
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

form {
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
}

input, select {
  padding: 8px;
  width: 200px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}


</style>