<template>
    <section class="container-fluid">
        <div class="row" style="height: 100vh;">
            <div class="col-md-6 d-flex justify-content-center bg-light-brown">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="../assets/img/register.png" alt="signin" class="">
                </div>
            </div>
            <div class="col-sm-8 col-md-4 mx-auto d-flex align-items-center">
                <div class="w-100 mx-auto">
                    <h1>Sign up</h1>
                    <p class="text-gray">Sign up for Learning management system as a student or a lecturer.</p>
                    <div class="mt-4">
                        <form @submit.prevent="signup">
                            <label for="email_field" class="form-label">Email address</label>
                            <div class="input-group input-group-sm">
                                <input type="email" name="email" class="form-control" id="email_field" v-model="form.email" required>
                            </div>
                            <div id="emailHelp" class="form-text mb-3">We'll never share your email with anyone else.</div>
                            <label for="name_field" class="form-label">Name</label>
                            <div class="input-group input-group-sm mb-3">
                                <input type="text" name="name" class="form-control" id="name_field" v-model="form.name" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">You are a</label><br>
                                <input type="radio" name="role" class="form-check-input" id="role_field_1" value="STUDENT" v-model="form.role" required>
                                <label for="role_field_1">&nbsp;Student</label>
                                <input type="radio" name="role" class="form-check-input ms-3" id="role_field_2" value="LECTURER" v-model="form.role" required>
                                <label for="role_field_2">&nbsp;Lecturer</label>
                            </div>
                            <label for="password_field" class="form-label">Password</label>
                            <div class="input-group input-group-sm mb-3 has-validation">
                                <input type="password" name="password" class="form-control" id="password_field" v-model="form.password">
                                <div class="invalid-feedback">Password must have atleast 8 charactors!</div>
                            </div>
                            <label for="conform_password_field" class="form-label">Confirm password</label>
                            <div class="input-group input-group-sm mb-3 has-validation">
                                <input type="password" name="password" class="form-control" id="conform_password_field" v-model="form.cPassword">
                                <div class="invalid-feedback">Password did not matched!</div>
                            </div>

                            <button type="submit" class="btn btn-brown w-100">
                                Sign up
                                <i class="fa-solid fa-user-plus"></i>
                            </button>
                        </form>

                    </div>
                        <p class="text-center mt-5 bottom-text text-gray">Already have an account? <router-link to="/signin" class="nolink"><span class="text-black">Sign in</span></router-link></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Swal from 'sweetalert2'
    import userService from "../services/UserServices"

    export default {
        name: 'Signup',
        data() {
            return {
                isError: false,
                form: {
                    email: "",
                    name: "",
                    role: "",
                    password: "",
                    cPassword: ""
                }
            }
        },
        methods: {
            signup(){
                if(this.form.password.length<9){
                    document.querySelector('#password_field').classList.add('is-invalid');
                    return
                }else if(this.form.cPassword != this.form.password){
                    document.querySelector('#conform_password_field').classList.add('is-invalid');
                    document.querySelector('#password_field').classList.remove('is-invalid');
                    return
                }else{
                    document.querySelector('#password_field').classList.remove('is-invalid');
                    document.querySelector('#conform_password_field').classList.remove('is-invalid');
                }

                //call the api from the service
                userService.signup(this.form).then(res => {
                    this.isError = false
                    this.$router.push("/signin")
                }).catch(err => {
                    this.isError = true
                    if(err.response.status == 500){
                        Swal.fire(
                            'Oops!',
                            'This email is already taken!',
                            'error'
                        )
                    }
                })
            }
        }
    }
</script>

<style scoped>
    img{
        width: 70%;
        height: auto;
    }
    .btn-brown{
        background-color: #946B2D;
        color: white;
    }
    .bottom-text{
        font-size: 0.9rem;
    }
    label{
        margin-bottom: 0;
    }
    span{
        font-weight: bold;
    }
    i{
        font-size: 85%;
        margin: auto 5px;
    }
</style>