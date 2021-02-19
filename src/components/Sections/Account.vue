<!-- eslint-disable max-len -->
<template>
  <div class="bg-divider">
    <section class="card-account">
      <div class="card-account-header">
        <h2 data-aos="fade-right" data-aos-delay="200">Mais de <b>200 mil devs</b> <br> já se conectaram.</h2>
      </div>
      <div class="card-account-description">
        <p data-aos="fade-up" data-aos-delay="200">
          Embarque nesse foguete e comece a avançar agora mesmo na direção dos
          seus objetivos.
        </p>
        <a href="#" class="btn-create-account" data-aos="zoom-in" data-aos-delay="200">Criar minha conta</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Account',
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.bg-divider {
  position: relative;
  margin-top: 415px;

  .card-account {
    background: #202024;
    width: 100%;
    border-radius: 5px;
    padding: 80px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    a {
        width: 100%;
        height: 64px;
        max-width: 271px;
        position: relative;
        font-size: 16px;
        line-height: 26px;
        font-weight: bold;
        cursor: pointer;
    }

    .card-account-header {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-align-items: flex-end;
      -webkit-box-align: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
      padding-bottom: 24px;

      h2 {
        font-weight: bold;
        font-size: 54px;
        line-height: 56px;
        width: 100%;
        color: $white;

        b {
            color: $green;
        }
      }
    }
  }

  .card-account-description {
    width: 100%;
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

    p {
        font-size: 18px;
        line-height: 156%;
        color: $gray;
        max-width: 430px;
    }

    .btn-create-account {
        border: none;
        outline: none;
        color: #fff;
        background: $primary;
        width: 100%;
        border-radius: 5px;
        padding: 12px 32px;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        -webkit-text-decoration: none;
        text-decoration: none;
        cursor: pointer;
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
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
  }
}
</style>
