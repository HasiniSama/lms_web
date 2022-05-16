<template>
  <div class="row">
    <ol class="list-group list-group-flush ">
        <li class="list-group-item d-flex justify-content-between align-items-start bg-light">
            <div class="ms-2 me-auto">
            <div class="fw-bold">{{subject}}</div>
            {{announcement}}
            </div>
            
        </li>
    </ol>
  </div>
</template>

<script>
export default {
 name:"announcements",
 props:{
     subject:String,
     announcement:String
 }
}
</script>

<style>

</style>