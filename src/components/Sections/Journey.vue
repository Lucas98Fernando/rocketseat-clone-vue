<template>
  <section id="journey">
    <div class="journey-header">
      <div class="journey-header-content">
        <h2>Jornada de evolução contínua</h2>
        <p>
          Conheça as órbitas de aprendizado que vão impulsionar cada etapa da
          sua carreira.
        </p>
      </div>
      <div class="cards-grid">
        <div class="cards-content">
          <div><strong>Iniciante</strong><span>01</span></div>
          <header>
            <h3>Discover</h3>
            <h4>Sua jornada começa aqui.</h4>
            <p>Um curso completo de desenvolvimento web do zero.</p>
          </header>
        </div>
        <div class="cards-content">
          <div><strong>Intermediário</strong><span>02</span></div>
          <header>
            <h3>Next Level Week</h3>
            <h4>Avance para o próximo nível.</h4>
            <p>Um evento incrível para toda a comunidade evoluir junto.</p>
          </header>
        </div>
        <div class="cards-content">
          <div><strong>Intermediário</strong><span>03</span></div>
          <header>
            <h3>Ignite</h3>
            <h4>Acelere sua carreira.</h4>
            <p>Treinamentos intensivos para ficar alinhado com o mercado.</p>
          </header>
        </div>
        <div class="cards-content experts-club">
          <div><strong>Avançado</strong><span>04</span></div>
          <header>
            <h3>ExpertsClub</h3>
            <h4>Sua evolução não pode parar.</h4>
            <p>Aulas direto ao ponto em assuntos específicos.</p>
          </header>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Journey',
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

#journey {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  .journey-header {
    margin: 10rem auto;

    .journey-header-content {
      h2 {
        font-size: 54px;
        line-height: 117%;
        font-weight: bold;
        color: $white;
        width: 100%;
        max-width: 480px;
      }

      p {
        font-size: 18px;
        line-height: 156%;
        color: $gray;
        max-width: 361px;
        margin-top: 24px;
        font-weight: normal;
      }
    }

    .cards-grid {
      margin-top: 80px;
      width: 100%;
      display: grid;
      grid-auto-flow: column;
      grid-auto-rows: 1fr;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-gap: 32px;
      justify-items: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;

      .cards-content {
        width: 100%;
        height: 100%;
        max-width: 256px;
        border-radius: 5px;
        max-width: 100%;
        background: #202024;

        & > div {
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
          padding: 24px 32px;
          border-bottom: 1px solid #323238;
        }

        strong {
          font-size: 10px;
          line-height: 12px;
          background: #323238;
          border-radius: 13px;
          padding: 6px 12px;
          text-transform: uppercase;
          color: #ffffff;
        }

        span {
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          color: #41414d;
        }

        header {
          padding: 30px;

          h3 {
            font-size: 32px;
            line-height: 119%;
            font-weight: bold;
            color: $white;
          }

          h4 {
            font-weight: 500;
            font-size: 24px;
            line-height: 125%;
            color: $green;
            padding: 24px 0;
          }

          p {
            font-size: 18px;
            line-height: 156%;
            color: $gray;
          }
        }

        &.experts-club {
            position: relative;
          &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            margin: -4px;
            border-radius: inherit;
            background: linear-gradient(
              180deg,
              rgba(18, 18, 20, 0) 0%,
              #fd951f 100%
            );
          }

          &:after {
            content: "Em breve";
            width: 208px;
            height: 436px;
            background: linear-gradient(
              180deg,
              rgba(18, 18, 20, 0) 0%,
              #fd951f 100%
            );
            border-radius: 5px;
            position: absolute;
            right: -24px;
            bottom: -40px;
            z-index: -5;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
            text-transform: uppercase;
            color: #121214;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: end;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
