<template>
    <nav class="navbar fixed-top navbar-expand-lg blue shadow navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                LMS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                    <li class="nav-item me-2">
                         <router-link to="/" class="nav-link" aria-current="page"><span>Dashboard</span></router-link>
                    </li>
                    <li class="nav-item me-2">
                        <router-link to="/courses" class="nav-link" aria-current="page"><span>Courses</span></router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>Profile</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><router-link to="/profile" class="dropdown-item d-flex justify-content-between">Your Profile<i class="fa-lg my-auto fa-solid fa-circle-user"></i></router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><router-link to="/profile" class="dropdown-item d-flex justify-content-between">Logout<i class="my-auto fa-solid fa-arrow-right-from-bracket"></i></router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

nav {
  padding: 15px 20px;
}

nav a {
  font-weight: bold;
  color: #5D5D5D;
  text-decoration: none;
}

a.router-link-active span{
  color: #ffffff;
}

.navbar{
    transition: 1s;
}

.blue{
    background: #0E1A40;
}

.blue-text .navbar-nav .nav-link{
    color: #0E1A40;
    font-weight: bold;
}

ul.dropdown-menu>li>a:hover{
    color: #ffffff;
    background: #0E1A40;
}

router-link.dropdown-item{
    color: #0E1A40;
}


</style>

<!-- <script>
    export default{
        name: 'NavBar',
        created() {
            window.addEventListener("load", function(event) {
                var nav = document.querySelector('nav')
                window.addEventListener('scroll', function(){
                    if(this.window.pageYOffset > 50){
                        nav.classList.add('blue','navbar-dark','shadow')
                        nav.classList.remove('mt-3','blue-text')
                    }else{
                        nav.classList.remove('blue','navbar-dark','shadow')
                        nav.classList.add('mt-3', 'blue-text')
                    }
                })
            })
        },
    }
</script> -->