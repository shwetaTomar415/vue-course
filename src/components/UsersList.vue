<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold">User List</p>
        <p>
          Lorem Ipsum is simply dummy text en the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="row">
        <div class="col">
          <table class="table table-hover text-center table-striped">
            <thead class="bg-success text-white ">
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Website</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users_data_from_api_call" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.company.name}}</td>
                <td>{{user.website}}</td>
                <td>{{user.address.city}}</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {UserService} from "@/services/UserService";

export default {
  name: "UsersList",
  data(){
    return{
      loading:false,
      error_message:null,
      users:UserService.getAllUsers(),
      users_data_from_api_call:[],
    }
  },
  async created() {
    try{
      this.loading=true;
      let response=await UserService.getUsersfromApiCall();
      this.loading=false;
      this.users_data_from_api_call=response.data;

      console.log(response.data);
    }
    catch (error){
      console.log(error);
    }
  }
}
</script>

<style scoped>

</style>