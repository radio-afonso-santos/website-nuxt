<template>
  <div>
    <!-- REPRODUTOR -->
    <audio id="reprodutor" preload="none"></audio>

    <Navbar />
    <Reprodutor />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Reprodutor from '../components/Reprodutor';
import Footer from '../components/Footer';

export default {
  components: {
    Navbar,
    Reprodutor,
    Footer
  }
};
</script>

<style>
/* IMPORTAÇÃO DE FONTES */
@font-face {
  font-family: 'Bangers';
  font-style: normal;
  font-weight: 400;
  src: local('Bangers Regular'), local('Bangers-Regular'), url('~assets/bangers-v12-latin-regular.woff2') format('woff2'),
    url('~assets/bangers-v12-latin-regular.woff') format('woff');
}

/* ESTILOS GLOBAIS */
html {
  position: relative;
  min-height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fonte-personalizada {
  font-family: 'Bangers', cursive;
}

/* CORES */
.cor-1 {
  background: #303030;
}

.link-footer {
  color: #375a7f !important;
}

.link-footer:focus {
  color: #375a7f !important;
}

footer i {
  color: #ff0000;
}

.icone-social {
  color: #fff;
}

a#discord {
  color: #fff;
}

a#discord:focus {
  color: #fff;
}
</style>
