<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Trust />
    <Connections />
    <Achievements />
    <BetterDevs />
    <Spoiler />
    <Journey />
    <Account />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navigation/Navbar.vue';
import Hero from '@/components/Sections/Hero.vue';
import Trust from '@/components/Sections/Trust.vue';
import Connections from '@/components/Sections/Connections.vue';
import Achievements from '@/components/Sections/Achievements.vue';
import BetterDevs from '@/components/Sections/BetterDevs.vue';
import Spoiler from '@/components/Sections/Spoiler.vue';
import Journey from '@/components/Sections/Journey.vue';
import Account from '@/components/Sections/Account.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Trust,
    Connections,
    Achievements,
    BetterDevs,
    Spoiler,
    Journey,
    Account,
    Footer,
  },
};
</script>
