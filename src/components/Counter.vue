<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{count}}</p>
              <button class="btn btn-success m-1" @click="increment">Increment</button>
              <button class="btn btn-warning m-1" @click="decrement">Decrement</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data(){
    return{
      count:0,
    }
  },
  methods:{
    increment(){
      this.count++;
    },
    decrement(){
      this.count--;
    }
  }

}
</script>

<style scoped>

</style>