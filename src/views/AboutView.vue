<template>
  <div class="container">
    <h1 class="text-center">User List</h1>
    <table class="table table-striped">
      <thead>
        <th>Id</th>
        <th>Student Name</th>
        <th>Student Email</th>
        <th>Student password</th>
      </thead>
      <tbody>
        <tr v-for = "user in users" v-bind:key = "user.id">
          <td {{user.id}}></td>
          <td {{user.name}}></td>
          <td {{user.email}}></td>
          <td {{user.password}}></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- <script>
import UserServices from "@/services/UserServices"

  export default {
    name: '',
    data(){
      return {
        users : []
      }
    },
    method: {
      getUsers(){
        UserServices.getStudent().then((response) =>{
          this.users = response.data;
        })
      }
    },
    created(){
      this.getUsers()
    }
  }
</script> -->

