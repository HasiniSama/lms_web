<template>
  <div class="row">
      <ul class="list-group list-gorup-flush">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{name}}</div>
              {{courseCode}}
            </div>
            <span class="badge bg-primary rounded-pill">{{numberTexts}}</span>
        </li>
        
    </ul>
  </div>
</template>

<script>
  import userService from "@/services/UserServices";

  export default {
    name:"CourseItem",
    props:{
      id: Number,
      courseCode: Number,
      name: String,
      showMarks: Boolean
    },
    data(){
      return{
        numberTexts: ""
      }
    },
    created(){
      if(this.showMarks)
      userService.getMarks(
        userService.getUserDetails().id,
        this.id
      ).then(res => {
        if(res.data == ""){
          this.numberTexts = "..."
        }else{
          this.numberTexts = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style>

</style>