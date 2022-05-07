<template>
  <div class="container profile p-5">
    <div class="row justify-content-center">
          <div class="col-md-4 ">
            <img src="../assets/owl.png" alt="">
          </div>
          <div class="sub-head p-2">
            <h3  id="name">Tharushi Chamalsha</h3>
            <h4  id="studentId">SE/2018/045</h4>
          </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <ul class="nav nav-pills mb-3 flex-column flex-sm-row" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="flex-sm-fill nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">About me</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button  class="flex-sm-fill nav-link  " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Grades</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="flex-sm-fill nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Edit profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="flex-sm-fill nav-link" id="pills-more-tab" data-bs-toggle="pill" data-bs-target="#pills-more" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">More</button>
                </li>
            </ul>
        </div>
    </div>
    <div class="row p-3 justify-content-center">
        <div class="col-md-8 text-start">
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
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
                    <div id="curve_chart"></div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
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
</template>

<style scoped>

.profile .sub-head h3{
    color: black;
}

.nav .nav-item button:active{
   background-color: wheat;
    color: #946B2D;
 
}



</style>
