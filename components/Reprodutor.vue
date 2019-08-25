<template>
  <!-- INFORMAÇÕES DA TRANSMISSÃO -->
  <div class="cor-1">
    <div class="container">
      <!-- LINHA -->
      <div class="row py-5">
        <!-- A TOCAR -->
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div class="media">
            <!-- CAPA -->
            <div class="overlay">
              <a href="" id="imagem_link" data-fancybox="imagem">
                <img src="" width="110px" id="imagem" class="imagem mr-3 rounded align-self-start img-fluid" />
              </a>
              <i id="icone" class="icon-reprodutor fas fa-3x"></i>
            </div>
            <!-- METADADOS-->
            <div class="media-body">
              <h4>
                <!-- STATUS-->
                <span id="status" class="status badge"></span>
              </h4>
              <h4 id="musica" class="font-weight-bold"></h4>
              <h5 id="artista"></h5>
              <span id="nome-dj" class="badge badge-primary"></span>
            </div>
          </div>
        </div>
        <!-- VAI TOCAR -->
        <!-- CAPA -->
        <div id="coluna-seguinte" class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div class="media">
            <a href="" id="imagem_seguinte_link" data-fancybox="imagem_seguinte">
              <img src="" width="110px" id="imagem-seguinte" class="imagem mr-3 rounded align-self-start img-fluid" />
            </a>
            <!-- METADADOS -->
            <div class="media-body">
              <h4>
                <span class="badge badge-danger">Vai Tocar</span>
              </h4>
              <h4 id="musica-seguinte" class="font-weight-bold"></h4>
              <h5 id="artista-seguinte"></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reprodutor',
  head() {
    script: [{ src: '/js/NchanSubscriber.js' }, { src: '/js/nowplaying.js' }, { src: '/js/player.js' }];
  }
};
</script>

<style scoped>
.overlay {
  position: relative;
}

.overlay i {
  position: absolute;
  top: 47%;
  left: 44%;
  transform: translate(-45%, -45%);
  display: none;
}

.overlay:hover img {
  opacity: 0.5;
}

.overlay:hover i {
  display: block;
  z-index: 500;
}

.icon-reprodutor {
  cursor: pointer;
}
</style>
