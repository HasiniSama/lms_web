<template>
    <div>
        <form method="post" @submit.prevent="assignMarks">
            <div class="input-group input-group-sm mb-3">
                <input type="number" min="0" max="100" class="form-control" :class="isMarksAssigned" placeholder="Marks" v-model="marks">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Assign</button>
            </div>
        </form>
    </div>
</template>

<script>
import LecturerService from '@/services/LecturerService'
import userServices from '@/services/UserServices'

export default {
    name: 'CourseMarksAssignForm',
    props:{
        studentId: Number,
        courseId: Number
    },
    data(){
        return{
            marks: "0",
            isAssigned: false
        }
    },
    computed:{
        isMarksValid(){
            return this.marks >= 0 && this.marks <= 100
        },
        isMarksAssigned(){
            console.log(this.isSigned ? 'is-valid' : '');
            return this.isSigned ? 'is-valid' : ''
        }
    },
    methods:{
        assignMarks(){
            if(!this.isMarksValid){
                alert("Invalid marks!")
                return
            }

            LecturerService.assignMarks(
                this.courseId, 
                this.studentId, 
                this.marks, 
                userServices.getToken()
            ).then(res => {
                if(res.status == 200){
                    this.isAssigned = true
                }
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
</style>