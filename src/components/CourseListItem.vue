<template>
    <router-link :to="'/course/'+id">
        <div class="card p-2 mb-2">
            <span class="title"><strong>{{name}}</strong></span>
            <span class="text text-gray">{{code}}</span>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'CourseListItem',
    props: {
        id: String,
        name: String,
        code: String
    }
}
</script>

<style scoped>
*{
    text-decoration: none;
}
.card{
    transition: 0.1s;
}
.card:hover{
    /* background-color: rgb(250, 250, 250); */
    box-shadow: 1px 1px 20px #2c3e503b;
}
.title{
    color: #2c3e50;
}
.text{
    font-size: 0.8rem;
}
</style>