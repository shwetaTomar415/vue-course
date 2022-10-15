<template>
<div class="container">
  <div class="row">
    <div class="col">
      <p class="h3">Employee</p>
      <ul class="list-group">
        <li class="list-group-item">Name : {{name}}</li>
        <li class="list-group-item">Age : {{age}}</li>
        <li class="list-group-item">Designation :  {{designation}}</li>
      </ul>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Employee",
  data(){
    return{
      name:'Rama',
      age:26,
      designation:'Software Engineer'
    }
  }
}
</script>

<style scoped>

</style>