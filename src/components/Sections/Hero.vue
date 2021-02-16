<template>
  <section id="hero">
    <b-container>
      <b-row>
        <h1>Evolua rápido como a tecnologia.</h1>
        <div class="hero-content">
          <p>
            Junte-se a milhares de devs e acelere na direção dos seus objetivos.
          </p>
          <b-button variant="primary" class="btn__primary"
            >Embarcar no foguete</b-button
          >
        </div>
        <div class="hero-shades">
          <b-img
            src="https://rocketseat.com.br/_next/image?url=%2Fimages%2Fhome%2Fheadline.png&w=2240&q=75"
            fluid
          ></b-img>
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

#hero {
  margin: 5rem 0;

  h1 {
    font-size: 64px;
    line-height: 1;
    text-align: center;
    color: $white;
    margin: 5rem 0;
    font-size: 64px;
    width: 100%;
    max-width: 615px;
    margin: 0 auto;
  }

  p {
    color: $gray;
    text-align: right;
    width: 100%;
    max-width: 320px;
    font-size: 18px;
    line-height: 156%;
  }

  .btn__primary {
    border: none;
    outline: none;
    width: 100%;
    border-radius: 5px;
    padding: 12px 32px;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    max-width: 298px;
    height: 64px;
  }

  .hero-content {
    padding: 48px 0 120px 0;
    width: 100%;
    max-width: 665px;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .hero-shades {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      -webkit-transform: translateY(-25%);
      -ms-transform: translateY(-25%);
      transform: translateY(-25%);
      width: 100%;
      height: 100%;
      z-index: -1;
      background: radial-gradient(
        50% 50% at 50% 50%,
        #8257e6 0%,
        rgba(18, 18, 20, 0) 100%
      );
      opacity: 0.4;
    }
  }
}
</style>
