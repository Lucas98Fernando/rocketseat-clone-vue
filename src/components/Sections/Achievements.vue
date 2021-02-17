<template>
  <section id="achievements">
    <b-container>
      <div class="content">
        <div class="description">
          <div class="divider"></div>
          <h2>Conquiste novas habilidades e seja reconhecido</h2>
          <p>
            Uma jornada de aprendizado contínuo, desafios e recompensas que vão
            te levar para o próximo nível.
          </p>
        </div>
        <div class="image">
          <div class="gamification-image">
            <b-img src="../../assets/images/gamification.png" fluid></b-img>
          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<style lang="scss">
@import "../../assets/scss/style.scss";

#achievements {
  .image {
    &:before, &:after {
      background: none !important;
    }
  }
}
</style>
