<template>
  <nav>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/musicians">Músicos</router-link></li>
      <li><router-link to="/register">Registrarse</router-link></li>
    </ul>
  </nav>
</template>

<script>

</script>

<style scoped>
nav {
  background-color: #444;
  color: white;
  padding: 10px 0;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
