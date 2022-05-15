<template>
  <div class="row">
      <ul class="list-group list-gorup-flush">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">{{name}}</div>
            {{id}}
            </div>
            <span class="badge bg-primary rounded-pill">{{numberTexts}}</span>
        </li>
        
    </ul>
  </div>
</template>

<script>
export default {
    name:"CourseItem",


    props:{
       
    id:Number,
    name:String,
    numberTexts:String
        
    }
}
</script>

<style>

</style>