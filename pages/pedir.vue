<template>
  <div class="container mt-4">
    <h2 class="fonte-personalizada">Pedir uma Música</h2>
    <p class="font-italic"><i class="fas fa-exclamation-circle"></i> O pedido poderá ter um intervalo de 5 minutos desde o momento em que é efetuado até ser tocado.</i></p>
    <iframe
      src="https://painel.radio-afonsosantos.tk/public/radioafonsosantos/embed-requests"
      frameborder="0"
      allowtransparency="true"
      style="width: 100%; min-height: 1000px; border: 0;"
      id="pedidos"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Rádio Afonso Santos - Pedir'
    };
  },
  load() {
    // Atualiza o frame dos pedidos quando a página for carregada, para que esteja sempre atualizado
    var iframe = document.getElementById('pedidos');
    iframe.src = src;
  }
};
</script>
