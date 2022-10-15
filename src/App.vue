<template>
  <div class="container">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3">App Component</p>
          <p class="fst-italic"></p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
    <Counter />
  </div>
</template>


<script>

import Counter from "@/components/Counter";
export default {
  components: {Counter},

}
</script>
<style>
@import "./style.css";
</style>
