<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:8080/musicians/login', {
      email: email.value,
      password: password.value,
    });
    if (response.data.success) {
      const token = response.data.token;
      console.log(token);
      localStorage.setItem('token', token);
      router.push('/dashboard');
    } else {
      errorMessage.value = 'Login failed';
    }
  } catch (error) {
    console.error('Login failed:', error);
    errorMessage.value = 'Login failed';
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
}

form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.25s;
}

button:hover {
  background-color: #555;
}

.error {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
</style>
