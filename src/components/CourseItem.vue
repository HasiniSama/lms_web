<template>
  <div class="row">
      <ul class="list-group list-gorup-flush">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">{{course.name}}</div>
            {{course.id}}
            </div>
            <span class="badge bg-primary rounded-pill">{{course.enrolledStudents}}</span>
        </li>
        
    </ul>
  </div>
</template>

<script>
export default {
    name:"CourseItem",
    props:{
        course:{
            id:Number,
            name:String,
            enrolledSTudents:Number
        }
    }
}
</script>

<style>

</style>