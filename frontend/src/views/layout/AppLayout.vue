<template>
  <v-app>
    <Header @updateDrawer="updateSidebarMenu"></Header>

    <Sidebar :sidebar="sidebarMenu"></Sidebar>

    <v-main class="grey lighten-4" app>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Header from "../../components/AdminHeader";
import Sidebar from "../../components/AdminSidebar";

export default {
  components: { Header, Sidebar },
  name: "AppLayout",
  component: {
    Header,
  },
  data() {
    return {
      sidebarMenu: true,
    };
  },
  methods: {
    updateSidebarMenu(value) {
      this.sidebarMenu = value;
    },
  },
};
</script>
