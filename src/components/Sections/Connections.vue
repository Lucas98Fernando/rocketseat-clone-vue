<template>
  <section id="connections">
    <b-container>
      <div class="connections-content">
        <div class="profiles">
          <div class="profile-image">
            <b-img src="../../assets/images/connections.png" fluid></b-img>
          </div>
        </div>
        <div class="opportunities">
          <div class="divider"></div>
          <h2>Conexão é a chave para as maiores oportunidades</h2>
          <p>
            Uma comunidade incrível e todo o ecossistema de tecnologia na mesma
            plataforma.
          </p>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Connections',
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

#connections {
  overflow: hidden;
  .connections-content {
    margin: 5rem auto;
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

    .profiles {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 580px;

      &:before {
        content: "";
        position: absolute;
        top: -64px;
        left: 0;
        width: 100%;
        height: 48px;
        background: url("../../assets/images/arrow-right.svg") center no-repeat;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -64px;
        left: 0;
        width: 100%;
        height: 48px;
        transform: rotate(180deg);
        background: url("../../assets/images/arrow-right.svg") center no-repeat;
      }
    }

    .profile-image {
      display: block;
      overflow: hidden;
      position: relative;
      box-sizing: border-box;
      margin: 0;
    }

    .opportunities {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 460px;

      .divider {
        background-color: $green;
        width: 40px;
        height: 2px;
      }

      h2 {
        font-size: 54px;
        line-height: 107%;
        color: $white;
        font-weight: 700;
        padding: 40px 0 24px 0;
        width: 100%;
      }

      p {
        font-size: 18px;
        line-height: 167%;
        color: $gray;
      }
    }
  }
}
</style>
