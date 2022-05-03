<template>
  <tr>
    <span
      @click="toggleAccordion()"
      class="flex items-center space-x-3"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <slot name="title" />
    </span>

    <div v-show="isOpen" :id="`collapse${_uid}`" style="max-width: 12rem;">
      <slot name="content" />
    </div>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>