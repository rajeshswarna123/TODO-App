
<script setup lang="ts">
import { ref } from 'vue';

import LoginBadge from './LoginBadge.vue';

</script>

<template>
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox"
            width="112" height="28">
        </a>
        <div class="navbar-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/home">
            Home
          </a>
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