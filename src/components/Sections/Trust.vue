<template>
  <section id="trust">
    <b-container>
        <h2>Empresas que confiam no nosso trabalho</h2>
        <div class="companies">
          <div data-aos="zoom-in" data-aos-delay="200"><Globo /></div>
          <div data-aos="zoom-in" data-aos-delay="400"><Zup /></div>
          <div data-aos="zoom-in" data-aos-delay="600"><Neon /></div>
          <div data-aos="zoom-in" data-aos-delay="800"><VanHack /></div>
          <div data-aos="zoom-in" data-aos-delay="1000"><Zenvia /></div>
        </div>
    </b-container>
  </section>
</template>

<script>
import Globo from '@/components/Companies/Globo.vue';
import Zup from '@/components/Companies/Zup.vue';
import Neon from '@/components/Companies/Neon.vue';
import VanHack from '@/components/Companies/VanHack.vue';
import Zenvia from '@/components/Companies/Zenvia.vue';

export default {
  name: 'Trust',
  components: {
    Globo,
    Zup,
    Neon,
    VanHack,
    Zenvia,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

#trust {
  margin: 10rem auto;
  max-width: 876px;

  h2 {
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: $white;
    font-weight: 700;
    width: 100%;
    margin: 0 auto;
    max-width: 400px;
  }

  .companies {
    display: grid;
    grid-auto-flow: column;
    grid-row-gap: 64px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    justify-items: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 80px;

    div {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 65px;
      width: 100%;
    }
  }
}
</style>
