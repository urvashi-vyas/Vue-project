<template>
   <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Ingredient</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="createIngredient">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="item.price"/>
                    </div>
                    <div class="form-group">
                        <label>Item Quantity:</label>
                        <input type="text" class="form-control" v-model="item.quantity"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from "../../../firebase";
export default {
  name: "CreateIngredient",
  mounted() {},
  methods: {
    createIngredient() {
     firebase.ingredientsCollection.add({
          name: this.item.name,
          quantity: this.item.quantity,
          price: this.item.price,
        })
        .then((docRef) => {
          this.$router.push('/shopping-list')
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },
  },
  data() {
    return {
      loggedIn: false,
      item: {
        name: "",
        quantity: "",
        price: "",
      },
    };
  },
};
</script>

<style scoped>
</style>
