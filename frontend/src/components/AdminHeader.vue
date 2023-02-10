<template>
  <v-app-bar app color="teal" elevation="0" dense>
    <v-app-bar-nav-icon
      color="white"
      @click="updateStatus"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      sidebarMenu: true,
    };
  },
  computed: {
  },
  methods: {
    updateStatus() {
      this.sidebarMenu = !this.sidebarMenu;
      this.$emit("updateDrawer", this.sidebarMenu);
    },
  },
};
</script>
