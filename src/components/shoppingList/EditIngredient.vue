<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Ingredient</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="editIngredient">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name" />
          </div>
          <div class="form-group">
            <label>Item Price:</label>
            <input type="text" class="form-control" v-model="item.price" />
          </div>
          <div class="form-group">
            <label>Item Quantity:</label>
            <input type="text" class="form-control" v-model="item.quantity" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Item" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "../../../firebase";
export default {
  name: "EditIngredient",
   data() {
    return {
      loggedIn: false,
      item: {
        name: "",
        quantity: "",
        price: ""
      },
      ingredientId: "",
    };
  },
  created() {
    this.ingredientId = this.$route.params.id;
    this.getIngredient(this.ingredientId);
  },
  methods: {
    async editIngredient() {
      const updatedData = firebase.ingredientsCollection.doc(this.ingredientId).set({
    name: this.item.name, quantity: this.item.quantity, price: this.item.price});
    if(updatedData) {
       this.$router.push("/shopping-list");
    }
     
    },
    getIngredient(id) {
      firebase.ingredientsCollection
        .doc(this.ingredientId)
        .get()
        .then((doc) => {
          if (doc.exists && doc.data()) {
            let data = doc.data();
            if(Object.keys(data).length) {
            this.item = data;
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  },
 
};
</script>

<style scoped>
</style>
