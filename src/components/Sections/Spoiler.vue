<template>
    <div class="outside">
        <section id="spoiler">
            <Alert />
            <b-container class="container-alert">
                <h2 data-aos="zoom-in" data-aos-delay="200">Spoiler alert!</h2>
                <p data-aos="fade-right" data-aos-delay="200">
                    As funcionalidades serão liberadas ao longo dos próximos meses.
                    Embarque porque o foguete está decolando.
                </p>
                <strong data-aos="fade-left" data-aos-delay="200">Novidades a caminho</strong>
            </b-container>
        </section>
    </div>
</template>

<script>
import Alert from '../SVG/Alert.vue';

export default {
  name: 'Spoiler',
  components: {
    Alert,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.outside {
    margin: 5rem auto 0;

    #spoiler {
        position: relative;
        padding-top: 50px;
        width: 100%;
        height: 100%;
        background-size: contain;
        background: url('../../assets/images/bg-alert.svg') top center no-repeat;
        padding: 40px;

        .container-alert {
            width: 100%;
            max-width: 1120px;
            margin: 0 auto;
            padding: 0 !important;
        }

        h2 {
            font-size: 54px;
            line-height: 58px;
            text-align: center;
            font-weight: bold;
            color: $white;
            padding-top: 40px;
        }

        p {
            font-size: 18px;
            line-height: 28px;
            text-align: center;
            color: $gray;
            padding-top: 24px;
            width: 100%;
            max-width: 510px;
            margin: 0 auto;
        }

        strong {
            display: block;
            font-size: 14px;
            line-height: 24px;
            text-align: center;
            -webkit-letter-spacing: 0.08em;
            -moz-letter-spacing: 0.08em;
            -ms-letter-spacing: 0.08em;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: $orange;
            padding-top: 40px;
        }
    }
}
</style>
