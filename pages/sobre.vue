<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
        <h2 class="fonte-personalizada">Sobre a Rádio</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus in delectus ullam provident eveniet adipisci voluptatum, esse asperiores
          commodi, est, dicta laborum id. Odit, dolore! Deleniti aspernatur atque quod libero dolor labore in aliquid perferendis rerum! Tempore excepturi
          consequatur aperiam dolores maxime provident ratione cupiditate tempora ipsa iusto facere error placeat doloribus id fugiat iste itaque aspernatur,
          minus fugit? <br>Omnis id libero iure eaque distinctio non ex, esse consequatur quisquam a. Molestiae voluptate officia laudantium enim sed? Mollitia,
          aperiam sapiente suscipit animi dicta laudantium pariatur nemo necessitatibus iusto nobis sequi, excepturi soluta repellat a reiciendis, repudiandae
          ut cumque cupiditate laboriosam!
        </p>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h2 class="fonte-personalizada">Equipa</h2>
        <div class="card">
          <div class="card-body">
            <div class="media">
              <img src="/img/equipa/afonso.png" alt="Afonso Santos" class="avatar mr-3" />
              <div class="media-body">
                <h5 class="card-title">Afonso Santos <span class="badge badge-danger">DJ</span></h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <hr />
            <i class="fab fa-discord fa-2x p-2"></i> <i class="fas fa-envelope-open fa-2x p-2"></i>
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
      title: 'Rádio Afonso Santos - Sobre'
    };
  }
};
</script>

<style>
.avatar {
  width: 15%;
  height: auto;
}
</style>
