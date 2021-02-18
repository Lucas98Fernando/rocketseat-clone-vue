<template>
  <section id="betterDevs">
    <b-container>
      <div class="content">
        <div class="image">
          <div class="devs-image">
            <b-img src="../../assets/images/community.png" fluid></b-img>
          </div>
        </div>
        <div class="description devs">
          <div class="divider"></div>
          <h2>Devs melhores, aplicações melhores, um mundo melhor</h2>
          <p>
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
