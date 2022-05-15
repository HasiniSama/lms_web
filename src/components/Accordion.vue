<template>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse-'+id" aria-expanded="true" aria-controls="collapseOne">
            {{title}}
        </button>
        </h2>
        <div :id="'collapse-'+id" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            {{description}}
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Accordion',
    props: {
        id: String,
        title: String,
        description: String
    }
}
</script>

<style scoped>

</style>