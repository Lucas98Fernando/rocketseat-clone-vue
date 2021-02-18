<!-- eslint-disable max-len -->
<template>
  <section id="achievements">
    <b-container>
      <div class="content">
        <div class="description">
          <div class="divider"></div>
          <h2 data-aos="fade-right" data-aos-delay="200">Conquiste novas habilidades e seja reconhecido</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Uma jornada de aprendizado contínuo, desafios e recompensas que vão
            te levar para o próximo nível.
          </p>
        </div>
        <div class="image">
          <div class="gamification-image">
            <b-img src="../../assets/images/gamification.png" fluid data-aos="fade-left" data-aos-delay="200"></b-img>
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
