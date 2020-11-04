<template>
    <div id="app">
  <div class="container" style="margin-left: 30%;">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
           <h1>Login</h1>
          <hr>
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
          <button class="btn btn-primary" @click.prevent="submitted">Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <!-- <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ userData.firstName }} {{ userData.lastName }}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ storeData }}</p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</div>

</template>

<script>
import * as firebase from '../../firebase'
export default {
  name: 'Login',
  data: function() {
    return {
      userData: {
        email: '',
        password: ''
      },
      isSubmitted: false
    }
  }, 
  methods: {
    submitted() {
      this.isSubmitted = true; 
        firebase.auth.signInWithEmailAndPassword(this.userData.email, this.userData.password).then(data => {
          console.log(data);
          this.$router.push('/shopping-list')
        })
        .catch(error => {
          this.error = error;
        });
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
