<!-- eslint-disable max-len -->
<template>
  <section id="betterDevs">
    <b-container>
      <div class="content">
        <div class="image">
          <div class="devs-image">
            <b-img src="../../assets/images/community.png" fluid data-aos="fade-right" data-aos-delay="200"></b-img>
          </div>
        </div>
        <div class="description devs">
          <div class="divider"></div>
          <h2 data-aos="fade-left" data-aos-delay="200">Devs melhores, aplicações melhores, um mundo melhor</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Uma experiência com propósito para impulsionar sua carreira e
            transformar o mundo.
          </p>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'BetterDevs',
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

#betterDevs {
  .image {
    &:before,
    &:after {
      background: none !important;
    }

    .devs-image {
      max-width: 472px !important;
    }
  }
}
</style>
