<template>
    <section class="container-fluid">
        <div class="row" style="height: 100vh;">
            <div class="col-md-6 d-flex justify-content-center bg-light-brown">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="../assets/img/signin.png" alt="signin" class="">
                </div>
            </div>
            <div class="col-sm-8 col-md-4 mx-auto d-flex align-items-center">
                <div class="w-100 mx-auto">
                    <h1>Sign in</h1>
                    <p class="text-gray">Sign in for Learning management system.</p>
                    <div class="mt-4">
                        <form action="" method="POST" @submit.prevent="signin">
                            <label for="email_field" class="form-label">Email address</label>
                            <div class="input-group input-group-sm">
                                <input type="email" name="email" class="form-control" id="email_field" v-model="form.email" required>
                            </div>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            <label for="password_field" class="form-label mt-3">Password</label>
                            <div class="input-group input-group-sm mb-3">
                                <input type="password" name="password" class="form-control" id="password_field" required>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="form.rememberMe">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-brown w-100">
                                Sign in
                                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                                </button>
                        </form>
                    </div>
                        <p class="text-center mt-5 bottom-text text-gray">
                            Don't have an account? <router-link to="/signup" class="nolink"><span class="text-black">Sign up</span></router-link>
                        </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'Signin',
        data() {
            return {
                form: {
                    email: "",
                    password: "",
                    rememberMe: false
                }
            }
        },
        methods: {
            rememberMe(){
                localStorage.setItem('email', this.form.email)
                localStorage.setItem('rememberMe', this.form.rememberMe)
                console.log('saved');
            },
            clearData(){
                localStorage.removeItem('email')
                localStorage.removeItem('rememberMe')
                console.log('cleared');
            },
            async signin(){
                if(this.form.rememberMe){
                    this.rememberMe()
                }else{
                    this.clearData()
                }

                const response = await axios.post('login', {
                    email: this.form.email,
                    password: this.form.password
                })
                console.log(response);
            }
        },
        mounted(){
            var email = localStorage.getItem('email')
            var rememberMe = localStorage.getItem('rememberMe')
            if(email)
            this.form.email = localStorage.getItem('email')
            if(rememberMe)
            this.form.rememberMe = localStorage.getItem('rememberMe')
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
        font-family: 'sf-pro';
        /* font-weight: bolder; */
    }
    i{
        font-size: 85%;
        margin: auto 5px;
    }
</style>