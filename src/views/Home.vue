<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Trust />
    <Connections />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navigation/Navbar.vue';
import Hero from '@/components/Sections/Hero.vue';
import Trust from '@/components/Sections/Trust.vue';
import Connections from '@/components/Sections/Connections.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Trust,
    Connections,
  },
};
</script>
