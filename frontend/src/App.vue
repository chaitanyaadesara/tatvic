<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
const default_layout = "app-layout";
export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout || default_layout;
    },
  },
};
</script>
