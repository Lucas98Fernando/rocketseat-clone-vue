<template>
  <div class="home">
    <Navbar />
    <Hero />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navigation/Navbar.vue';
import Hero from '@/components/Sections/Hero.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
  },
};
</script>
