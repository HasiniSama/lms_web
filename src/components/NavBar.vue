<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark mt-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                LMS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                    <li class="nav-item me-2">
                    <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
                    </li>
                    <li class="nav-item me-2">
                    <a class="nav-link" aria-current="page" href="#">Dashboard</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link" href="#">Courses</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item">Action</a></li>
                            <li><a class="dropdown-item">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #5D5D5D;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

.navbar{
    transition: 1s;
}

.blue{
    background: #0E1A40;
}
</style>

<script>
    document.addEventListener('DOMContentLoaded', function(){
        var nav = document.querySelector('nav')
        window.addEventListener('scroll', function(){
            if(this.window.pageYOffset > 50){
                nav.classList.add('blue','shadow')
                nav.classList.remove('mt-3')
            }else{
                nav.classList.remove('blue','shadow')
                nav.classList.add('mt-3')
            }
        })
    })
</script>