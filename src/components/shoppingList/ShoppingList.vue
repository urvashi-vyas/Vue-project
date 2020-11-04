<template>
  <div>
   <router-link :to="{path: '/create-ingredient'}"> <button type="button">Add Ingredient</button></router-link>
    <table class="table" v-if="ingredients && ingredients.length">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(item, index) in ingredients" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td>{{item.name}}</td>
          <td>{{item.quantity}}</td>
          <td>{{item.price}}</td>
          <td>{{item.quantity}}</td>
                 <td>
                   <router-link :to="{name: 'EditIngredient', params: {id: item.id}}">
                   <button class="button btn btn-primary">Edit</button>
                   </router-link> 
                    </td>
                 
        </tr>
        
      </tbody>
    </table>
    <div v-else> No Data found </div>
  </div>
</template>

<script>
import * as firebase from "../../../firebase";
export default {
  name: "ShoppingList",
  mounted() {
    this.getShoppingData();
  },
  methods: {
    getShoppingData() {
      firebase.ingredientsCollection.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          let ingredient = doc.data();
          ingredient.id = doc.id;
          this.ingredients.push(ingredient);
        });
      });
    },
   
  },
  data() {
    return {
      loggedIn: false,
      ingredients: [],
    };
  },
};
</script>

<style scoped>
</style>
