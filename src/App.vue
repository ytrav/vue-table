<template>
  <table-login class="login" v-if="!isLoggedIn" />
  <table-main v-else />
</template>

<script>
import Main from "./tableMain.vue";
import Login from "./components/login/tableLogin.vue";


export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
    };
  },
  components: {
    "table-main": Main,
    "table-login": Login,
  },
  methods: {},
};
</script>
