<template>
    <div class="text-center">
        <div>
            <img src="../assets/img/empty.png" alt="empty state" class="w-50">
        </div>
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
    name: 'EmptyState',
    props:{
        title: String
    }
}
</script>

<style scoped>
    img{opacity: 0.9;}
</style>