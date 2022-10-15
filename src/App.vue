<template>
  <div class="container">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
    <Customer name="Rajan" age=25 designation="Software Engineer" />

    <Employee />
  </div>
</template>


<script>
import Customer from "@/components/Customer";
import Employee from "@/components/Employee";
export default {
  components: {Employee, Customer}
}
</script>
<style>
@import "./style.css";
</style>
