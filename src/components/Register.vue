<template>
    <div id="app">
  <div class="container" style="margin-left: 30%;">
    <form @submit.prevent= "submitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
           <h1>Signup</h1>
          <hr>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" class="form-control" v-model="userData.firstName">
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" class="form-control" v-model="userData.lastName">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" class="form-control" v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model="userData.password">
            </div>
          </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" type="submit">Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
  </div>
</div>

</template>

<script>
import * as firebase from '../../firebase'
export default {
  name: 'Register',
  data: function() {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      isSubmitted: false
    }
  },
  methods: {
    async submitted() {
      this.isSubmitted = true;
  try {
   
      const user = firebase.auth.createUserWithEmailAndPassword(this.userData.email, this.userData.password);
      console.log('user',user);
       this.$router.push('/login')
    
  } catch(err) {
    console.log('err', err);
  }
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
