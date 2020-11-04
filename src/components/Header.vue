<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
       <router-link :to="{path: 'signup'}"> <a class="nav-link" href="#" v-if="!loggedIn">SignUp <span class="sr-only">(current)</span></a></router-link>
      </li>
      <li class="nav-item" v-if="!loggedIn">
           <router-link :to="{path: 'login'}"> <a class="nav-link" href="#" v-if="!loggedIn">Login <span class="sr-only"></span></a></router-link>
      </li>
      <li class="nav-item" v-if="loggedIn" @click="signOut">
        <a class="nav-link disabled">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
export default {
  name: "Header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
        console.log('signOut');
      firebase
        .auth()
        .signOut()
        .then(() => {
           this.$router.push('/')
        });
    },
  },
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>

<style scoped>
.bg-light {
    background: #5698e0 !important;
}
</style>
