<template>
    <div>
        <form method="post" @submit.prevent="assignMarks">
            <div class="input-group input-group-sm mb-3">
                <input type="number" min="0" max="100" class="form-control" :id="inputId" placeholder="Marks" v-model="marks">
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
            marks: "0"
        }
    },
    computed:{
        isMarksValid(){
            return this.marks >= 0 && this.marks <= 100
        },
        inputId(){
            return "marks-input-"+this.studentId+'-'+this.courseId
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
                this.displayTick()
            }).catch(err => {
                this.removeTick()
                console.log(err)
            })
        },
        displayTick(){
            document.querySelector('#'+this.inputId).classList.add('is-valid')
        },
        removeTick(){
            document.querySelector('#'+this.inputId).classList.remove('is-valid')
        },
    }
}
</script>

<style scoped>
</style>