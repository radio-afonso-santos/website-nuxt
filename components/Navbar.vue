<template>
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <nuxt-link to="/" class="navbar-brand">
      <img src="/img/logotipo_branco.svg" class="d-none d-sm-block logotipo" />
      <span class="texto-brand d-sm-none">Rádio Afonso Santos</span>
    </nuxt-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">Página Inicial</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/sobre" class="nav-link">Sobre</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/pedir" class="nav-link">Pedir uma Música</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contactos" class="nav-link">Contactos</nuxt-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <h5>
            <span id="ouvintes" class="d-none d-sm-block badge badge-dark"></span>
          </h5>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
.logotipo {
  width: 350px;
}

.navbar-brand {
  padding: 0;
}

.texto-brand {
  font-size: 2.2rem !important;
  font-family: 'Bangers';
}
</style>
