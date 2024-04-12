<script setup>


</script>

<template>
  <div class="container">
    <div>
      <nav>
        <ul class="nav-title nav-ul">
          <li><img src="" alt="Image"></li>
          <li>Weirmoon Dev</li>
          <li>Current Route: {{$route.fullPath}}</li>
        </ul>
        <div class="spacer"></div>
        <ul class="nav-list nav-ul">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/astrophoto">Astrophotography</RouterLink></li>
          <li><RouterLink to="/Developer">Developer</RouterLink></li>
          <li><RouterLink to="/UE5Projects">UE5 Projects</RouterLink></li>
          <li><RouterLink to="/CurrentGames">Current Games</RouterLink></li>
          <li><RouterLink to="/anime">Anime</RouterLink></li>
          <li><RouterLink to="/reading">Reading</RouterLink></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>



</style>