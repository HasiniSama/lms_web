<template>
    <div class="modal fade" :id="id" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add New Announcement</h5>
                <button type="button" id="modalCloseBtn" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="post" @submit.prevent="send">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="a-title" class="form-label">Title</label>
                        <input type="text" v-model="title" class="form-control" id="a-title" placeholder="Type your subject here">
                    </div>
                    <div class="mb-3">
                        <label for="a-body" class="form-label">Description</label>
                        <textarea class="form-control" v-model="description" id="a-body" rows="4"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn py-1">Send</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import userService from '@/services/UserServices.js'
import lecturerService from '@/services/LecturerService.js'

export default {
    name: 'NewAnnouncementModal',
    props:{
        id: String,
        courseId: String,
        callback: Function
    },
    data(){
        return{
            title: "",
            description: ""
        }
    },
    methods: {
        send(e){
            lecturerService.addAnnouncement(
                {title: this.title, description: this.description},
                this.courseId,
                userService.getToken()
            ).then(res => {
                this.callback(this.title, this.description)
                this.title = ""
                this.description = ""
    
                document.getElementById('modalCloseBtn').click()
            }).catch(err => {
                console.log(err)
            })

        }
    }
}
</script>

<style scoped>
    .btn{
        border: solid 2px #946B2D;
        color: #946B2D;
        transition: 0.1s;
    }
    .btn:hover{
        background-color: #946B2D;
        color: white;
    }
</style>