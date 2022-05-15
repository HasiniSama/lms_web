<template>
  <div class="container-fluid profile p-5">
    <div class="row justify-content-start">
         <div class="col-md-4 profile-picture">
            <div class="row justify-content-center">
                <div class="col">
                    <img src="../assets/profile/owl.png" alt="">
                </div>
                <div class="sub-head pt-3">
                    <h5  id="name">Tharushi Chamalsha</h5>
                    <h6  id="studentId">SE/2018/045</h6>
                </div>
            </div>
        </div>
        <div class="col-sm-8 profile-details p-4">
            <div class="row col">
                <ul class="nav nav-pills mb-3 flex-column flex-sm-row" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="flex-sm-fill nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><span>About me</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button  class="flex-sm-fill nav-link  " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><span>Grades</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="flex-sm-fill nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-edit" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><span>Edit Profile</span></button>
                    </li>
                    
                </ul>

            </div>

            <div class="row p-3 justify-content-center">
                <div class="col text-start">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active about" id="pills-about" role="tabpanel" aria-labelledby="pills-home-tab">
                            <form>
                                <fieldset disabled>
                                
                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Name</label>
                                    <input type="text" id="studentName" class="form-control" placeholder="Disabled input">
                                    </div>
                                    
                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Student ID</label>
                                    <input type="text" id="studentID" class="form-control" placeholder="Disabled input">
                                    </div>

                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Degree Program</label>
                                    <input type="text" id="degree" class="form-control" placeholder="Disabled input">
                                    </div>
                                
                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Contact Number</label>
                                    <input type="text" id="contact" class="form-control" placeholder="Disabled input">
                                    </div>

                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Country</label>
                                    <input type="text" id="country" class="form-control" placeholder="Disabled input">
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Current GPA: </label>
                                    <label for="disabledTextInput" class="form-label m-4" >3.2</label>
                            </div>
                            <!-- <div id="curve_chart"><Linechart /></div> -->
                        </div>
                        <div class="tab-pane fade" id="pills-edit" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <form>
                                <fieldset>
                                
                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Name</label>
                                    <input type="text" id="studentName" class="form-control" placeholder="Disabled input">
                                    </div>
                                    
                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Student ID</label>
                                    <input type="text" id="studentID" class="form-control" placeholder="Disabled input">
                                    </div>

                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Degree Program</label>
                                    <input type="text" id="degree" class="form-control" placeholder="Disabled input">
                                    </div>
                                
                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Contact Number</label>
                                    <input type="text" id="contact" class="form-control" placeholder="Disabled input">
                                    </div>

                                    <div class="mb-3">
                                    <label for="disabledTextInput" class="form-label">Country</label>
                                    <input type="text" id="country" class="form-control" placeholder="Disabled input">
                                    </div>

                                    <button type="submit" class="btn btn-primary">Save</button>
                                </fieldset>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-more-tab">
                            <p class="pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
    </div>
    <div class="row justify-content-center">
        
    </div>
    
    

    
  </div>
</template>

<style scoped>

.profile .sub-head h3{
    color: black;
}
.nav .nav-item button{
    background-color: transparent;
    color: #5D5D5D;
   
}
.nav .nav-item button.active{
    font-weight:bold;
    color: #946B2D;
    
}

.nav li {
  display: inline-block;
  position: relative;

}
.nav li:last-child {
  margin-right: 0;
}

.nav li:after {
  content: '';
  display: block;
  margin: auto;
  height: 3px;
  width: 0px;
  background: transparent;
  transition: width .5s ease, background-color .5s ease;
}
.nav li:hover:after {
  width: 100%;
  background: #222F5B;
}
.profile .profile-details{
  
  transition: transform 5s ease 5s;
  border-radius: 4px;
  box-shadow:
    rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px,
    rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;

  
}
</style>
<script>


export default {
  name: 'Profile',
  components: {
    
  }
}
</script>