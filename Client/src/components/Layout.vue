
<script setup lang="ts">
import { ref } from 'vue'


    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
      function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }

      function toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
</script>
<template>
  <q-layout view="hHh lpR fFf">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <ul>
        <li>Hello</li>
        <li>World</li>
        <li>Example</li>
      </ul>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" elevated>
      <!-- drawer content -->
      <ul>
        <li>Hello</li>
        <li>World</li>
        <li>Example</li>
      </ul>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
