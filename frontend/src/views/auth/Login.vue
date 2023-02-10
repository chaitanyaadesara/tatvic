<template>
  <v-col cols="12" class="teal lighten-4">
    <v-container fill-height class="d-flex justify-center align-center">
      <v-col cols="12" sm="8" md="7" lg="6" xl="4">
        <v-form ref="loginform" id="check-login-form">
          <v-card class="pa-5">
            <v-card-title class="d-flex justify-center">
              <v-img src="@/assets/logo.png" max-height="60" max-width="60"></v-img>
              <h1>Tatvic-Test</h1>
            </v-card-title>
            <v-row>
              <v-col cols="12">
                <v-btn block type="submit" @click="submit()" form="check-login-form" depressed
                  color="white--text teal darken-1">Google
                  Login</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-form>
      </v-col>
    </v-container>
  </v-col>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      params: {
        client_id: "721820110809-fpiu2hd1arf3f4lboqgih12fuq68b6e9.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      try {
        window.open('http://localhost:3000/auth/google');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
