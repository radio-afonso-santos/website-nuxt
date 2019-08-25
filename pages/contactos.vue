<template>
  <!-- CONTATOS & DISCORD -->
  <div class="container">
    <div class="row mt-4">
      <!-- FORMULÁRIO CONTATO-->
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
        <h2 class="fonte-personalizada mb-3">Contatos</h2>
        <form name="contatos" method="POST" data-netlify="true">
          <div class="form-group">
            <label>Nome</label>
            <input type="text" class="form-control form-control-sm" name="nome" placeholder="O seu nome" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control form-control-sm" name="email" placeholder="O seu email" required />
          </div>
          <div class="form-group">
            <label>Assunto</label>
            <input type="text" class="form-control form-control-sm" name="assunto" placeholder="Sugestão, erro no website, ..." />
          </div>
          <div class="form-group">
            <label>Mensagem</label>
            <textarea class="form-control" name="mensagem" cols="30" rows="3" placeholder="A sua mensagem" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-sm btn-block"><i class="fas fa-paper-plane"></i> Enviar</button>
        </form>
      </div>
      <!-- DISCORD-->
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h2 class="fonte-personalizada mb-3">Redes Sociais</h2>
        <div class="row">
          <div class="media p-3">
            <i class="fab fa-discord fa-3x mr-3"></i>
            <div class="media-body">
              <h4>
                <span class="badge badge-primary">
                  <a id="discord" href="https://discord.gg/dm8Ze7z">Discord</a>
                </span>
              </h4>
              <p class="text-justify">
                Entra no nosso servidor para conheceres a nossa equipa, interagires com o nosso bot e seres informado de futuros eventos ao vivo.
              </p>
            </div>
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
      title: 'Rádio Afonso Santos - Contactos'
    };
  }
};
</script>

<style></style>
