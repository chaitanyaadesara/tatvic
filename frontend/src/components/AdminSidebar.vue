<template>
  <v-navigation-drawer app v-model="sidebarMenu" color="white lighten-1">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <v-img width="35" :src="title" class="mx-auto"></v-img>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        active-class="teal--text teal lighten-5"
        :to="{ name: item.link }"
      >
        <v-list-item-icon>
          <v-icon class="teal--text">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="teal--text" v-text="item.title" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex"
import SidebarList from "../helper/sidebar";
export default {
  props: {
    sidebar: Boolean,
  },
  watch: {
    sidebar: function (value) {
      if (['xs','sm','md'].includes(this.$vuetify.breakpoint.name)) {
        this.sidebarMenu = true;
      } else {
        this.sidebarMenu = value;
      }
    },
  },
  data() {
    return {
      sidebarMenu: null,
      title: require("@/assets/logo.png"),
      items: []
    };
  },
  computed: {
    ...mapGetters(['StateUserPermissions'])
  },
  mounted() {

    this.items = SidebarList.filter(item => item.menu=='sidebar');
    if (['xs','sm','md'].includes(this.$vuetify.breakpoint.name)) {
      this.sidebarMenu = false;
    } else {
      this.sidebarMenu = true;
    }
  },
};
</script>
