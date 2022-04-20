
<script setup lang="ts">
import { ref } from 'vue';

import LoginBadge from './LoginBadge.vue';

</script>

<template>
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <div class="navbar-burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
          <router-link class="navbar-item" to="/tasks">
            Tasks
          </router-link>
          <router-link class="navbar-item" to="/created-tasks">
            Created Tasks
          </router-link>
          <router-link class="navbar-item" to="/assigned-tasks">
            Assigned Tasks
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
.navbar-start a{
  margin: 0 2px;
}
</style>