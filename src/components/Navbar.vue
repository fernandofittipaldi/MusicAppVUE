<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">MusicApp</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/musicians">Músicos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Registrarse</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
.navbar {
  background-color: #444 !important;
}

.navbar-nav .nav-link {
  color: white !important;
}

.navbar-nav .nav-link:hover {
  color: gray !important;
}
</style>
