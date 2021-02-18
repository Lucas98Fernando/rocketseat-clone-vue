<template>
  <b-container>
    <b-navbar id="navbar" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <Logo />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Manifesto</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button variant="primary" class="btn__primary" data-aos="zoom-in">Entrar</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'Navbar',
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.navbar {
  padding-top: 32px !important;

  .btn__primary {
   order: none;
    outline: none;
    color: #fff;
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
    max-width: 118px;
  }
}
</style>
