<template>
  <div class="container page-container">
    <h1 class="text-center my-4">MusicApp</h1>
    <h2 class="text-center mb-4">La app del músico</h2>

    <div id="musicianCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Thelonious_Monk%2C_Minton%27s_Playhouse%2C_New_York%2C_N.Y.%2C_ca._Sept._1947_%28William_P._Gottlieb_06191%29.jpg" class="d-block w-100" alt="Monk">
        </div>
        <div class="carousel-item">
          <img src="https://www.udiscovermusic.com/wp-content/uploads/2021/01/Wes-Montgomery-GettyImages-84884494.jpg" class="d-block w-100" alt="Wes">
        </div>
        <div class="carousel-item">
          <img src="https://cdn.britannica.com/27/125427-004-C7135DF7/Louis-Armstrong-1953.jpg?s=1500x700&q=85" class="d-block w-100" alt="Louis">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#musicianCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#musicianCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
}

.carousel-item img {
  height: 400px;
  object-fit: cover;
}

.text-center {
  text-align: center;
}

.my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

</style>