
<script setup lang="ts">
import { ref } from 'vue';

import LoginBadge from './LoginBadge.vue';

</script>

<template>
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox"
            width="112" height="28">
        </router-link>
        <div class="navbar-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/home">
            Home
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <login-badge />
          </div>
        </div>
      </div>
    </nav>
</template>


<style scoped>

</style>