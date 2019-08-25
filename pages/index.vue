<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h2 class="fonte-personalizada">Horário</h2>
        <p class="text-justify">
          <span class="badge badge-danger mr-1">Novo</span>
          A playlist que está ao vivo na rádio irá ficar selecionada, desde a sua hora de início até ao final da programação.
        </p>
        <ul id="lista-playlists" class="list-group mb-5">
          <li class="list-group-item d-flex justify-content-between align-items-center py-1" id="playlist-variada">
            Música Variada
            <span class="badge badge-primary badge-pill">6h às 24h</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center py-1" id="playlist-synthwave">
            Synthwave, Retro Electro, Popwave, Dreamwave
            <span class="badge badge-primary badge-pill">24h às 7h</span>
          </li>
        </ul>
        <p id="mensagem-dj" class="font-weight-bold text-justify">
          <i class="fas fa-exclamation-circle"></i> Como um DJ está ao vivo, não é possível determinar a playlist atual.
        </p>
      </div>
      <!-- PEDIDO DE MÚSICA -->
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h2 class="fonte-personalizada">Pedido de Música</h2>
        <p class="text-justify">
          <span class="badge badge-danger mr-1">Novo</span>
          Clica no botão abaixo para pedir que uma música da nossa biblioteca seja reproduzida (apenas as músicas da lista reprodução
          <span class="font-weight-bold">Música Variada</span> estão disponíveis para pedir).
        </p>
        <button type="button" class="btn btn-primary btn-sm btn-block" data-toggle="modal" data-target="#pedidos">
          <i class="fas fa-external-link-square-alt"></i> Abrir Formulário
        </button>
      </div>
    </div>

    <!-- POPUP DO PEDIDOS DE MÚSICA -->
    <div class="modal fade" id="pedidos">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <!-- CABEÇALHO -->
          <div class="modal-header">
            <h4 class="modal-title">Pedido de Música</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- CORPO -->
          <div class="modal-body">
            <iframe
              src="https://painel.radio-afonsosantos.tk/public/radioafonsosantos/embed-requests"
              frameborder="0"
              allowtransparency="true"
              style="width: 100%; min-height: 906px; border: 0;"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Rádio Afonso Santos - Página Inicial'
    };
  }
};
</script>
