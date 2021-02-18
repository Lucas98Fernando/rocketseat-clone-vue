<template>
  <footer id="footer">
    <div class="footer-content">
      <Logo />
      <ul class="footer-links">
        <li><a href="#">Direitos autorais</a></li>
        <li><a href="#">Termos de uso</a></li>
        <li><a href="#">Políticas de privacidade</a></li>
      </ul>
      <ul class="social-icons">
        <li>
          <a href="#"><Facebook /></a>
        </li>
        <li>
          <a href="#"><Instagram /></a>
        </li>
        <li>
          <a href="#"><Twitter /></a>
        </li>
        <li>
          <a href="#"><YouTube /></a>
        </li>
      </ul>
      <a href="#" class="help">Central de ajuda</a>
      <div class="boost">
          <p>Boost youself</p>
          <a href="#navbar" class="to-top">
              <ToTop />
          </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '../Navigation/Logo.vue';
import Facebook from '../Social/Facebook.vue';
import Instagram from '../Social/Instagram.vue';
import Twitter from '../Social/Twitter.vue';
import YouTube from '../Social/YouTube.vue';
import ToTop from '../SVG/ToTop.vue';

export default {
  name: 'Footer',
  components: {
    Logo,
    Facebook,
    Instagram,
    Twitter,
    YouTube,
    ToTop,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

#footer {
  width: 100%;
  height: 100%;
  padding: 256px 0 80px 0;
  background: #0d0d0f;

  .footer-content {
    padding: 0 !important;
    display: grid;
    grid-template-columns: 184px 160px 1fr;
    justify-items: flex-end;
    row-gap: 32px;
    column-gap: 40px;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    ul {
      list-style: none;
    }

    svg {
        justify-self: flex-start;
    }

    .footer-links {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      grid-area: 1 / 3;

      li {
        margin-left: 20px;

        a {
          font-size: 14px;
          line-height: 16px;
          color: $gray;
          -webkit-text-decoration: none;
          text-decoration: none;
        }
      }
    }

    .social-icons {
      display: grid;
      grid-template-columns: repeat(4, 40px);
      grid-auto-flow: column;
      grid-gap: 8px;
      justify-self: flex-start;
      grid-area: 2 /1;
      margin: 0;
      padding: 0;

      li {
        background: #202024;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }

      a {
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
        width: 100%;
        height: 100%;
      }
    }

    .help {
        color: $primary;
        font-weight: normal;
        font-size: 16px;
        line-height: 1;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-align-self: center;
        -ms-flex-item-align: center;
        align-self: center;
        grid-area: 2 / 2;
    }

    .boost {
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
        width: 100%;
        max-width: 170px;
        grid-area: 2 / 3;

        p {
            font-size: 14px;
            line-height: 24px;
            color: $green;
            margin: 0px;
            padding: 0px;
        }

        .to-top {
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 5px;
            background: #202024;
            cursor: pointer;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
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
        }
    }
  }
}
</style>
