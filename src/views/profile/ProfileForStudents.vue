<template>
  <div class="container-fluid profile p-5">
    <div class="row justify-content-center">
      <div class="col-md-4 profile-picture">
        <div class="row d-grid">
          <div class="d-flex">
            <img
              src="@/assets/profile/undergraduate.png"
              alt=""
              class="mx-auto"
            />
          </div>
          <div class="sub-head text-center pt-3">
            <h5 id="name">{{ student.name }}</h5>
            <h6 id="studentId">Student Id: {{ student.id }}</h6>
          </div>
        </div>
      </div>
      <div class="col-sm-8 profile-details p-4">
        <div class="row col">
          <ul
            class="nav nav-pills mb-3 flex-column flex-sm-row"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="flex-sm-fill nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-about"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <span>About me</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="flex-sm-fill nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <span>Grades</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="flex-sm-fill nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-edit"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <span>Edit Profile</span>
              </button>
            </li>
          </ul>
        </div>

        <div class="row p-3 justify-content-center">
          <div class="col text-start">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active about"
                id="pills-about"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <form>
                  <fieldset disabled>
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label"
                        >Name : &emsp; &emsp; {{ student.name }}</label
                      >
                    </div>
                    <hr />
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label"
                        >Student ID : &emsp; {{ student.id }}</label
                      >
                    </div>
                    <hr />
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label"
                        >Email : &emsp; &emsp; {{ student.email }}</label
                      >
                    </div>
                    <hr />
                  </fieldset>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <CourseItem
                  v-for="enrolledCourse in enrolledCourses"
                  :key="enrolledCourse.course_id"
									:id="enrolledCourse.course_id"
                  :courseCode="enrolledCourse.course_code"
                  :name="enrolledCourse.name"
                  :showMarks="true"
									class="mb-1"
                />
                <!-- <div id="curve_chart"><Linechart /></div> -->
              </div>
              <div
                class="tab-pane fade"
                id="pills-edit"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <form @submit.prevent="updateUserDetails">
                  <fieldset>
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label"
                        >Name :
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        class="form-control"
                        v-model="student.name"
                      />
                    </div>

                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label"
                        >Student ID :</label
                      >
                      <input
                        type="text"
                        id="studentID"
                        class="form-control"
                        :placeholder="student.id"
                        readonly
                      />
                    </div>

                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label"
                        >Email :</label
                      >
                      <input
                        type="text"
                        id="degree"
                        class="form-control"
                        v-model="student.email"
                        readonly
                      />
                    </div>

                    <button type="submit" class="btn btn-primary">Save</button>
                  </fieldset>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-more-tab"
              >
                <p class="pt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center"></div>
  </div>
</template>

<style scoped>
.profile .sub-head h3 {
  color: black;
}
.nav .nav-item button {
  background-color: transparent;
  color: #5d5d5d;
}
.nav .nav-item button.active {
  font-weight: bold;
  color: #946b2d;
}

.nav li {
  display: inline-block;
  position: relative;
}
.nav li:last-child {
  margin-right: 0;
}

.nav li:after {
  content: "";
  display: block;
  margin: auto;
  height: 3px;
  width: 0px;
  background: transparent;
  transition: width 0.5s ease, background-color 0.5s ease;
}
.nav li:hover:after {
  width: 100%;
  background: #222f5b;
}
.profile .profile-details {
  transition: transform 5s ease 5s;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;
}
</style>
<script>
import userService from "@/services/UserServices";
import studentService from "@/services/StudentService";
import CourseItem from "@/components/CourseItem.vue";

export default {
  name: "Profile",
  components: {
    CourseItem,
  },
  data() {
    return {
      student: {
        id: "",
        name: "",
        email: "",
      },
      enrolledCourses: [],
    };
  },
  methods: {
    intitProfile() {
      //getting user details
      userService.getStudentDetails(
          userService.getUserDetails().id,
          userService.getToken()
        )
        .then((res) => {
          // console.log(res);
          this.student = res;
        })
        .catch((err) => {
          console.log(err);
        });
      //getting enrolled courses

      userService.getEnrolledCourses(
          userService.getUserDetails().id,
          userService.getToken()
        )
        .then((res) => {
          this.enrolledCourses = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updateUserDetails() {
      console.log(this.student);
      //todo: update fuction
    },

    getMarks() {
      studentService.getMarks(userService.getUserDetails().id, 4, userService.getToken())
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
	computed: {
		async getMarks(courseId){
			return userService.getMarks(
				userService.getUserDetails().id,
				courseId
			).then(res => {
				return res.data
			}).catch(err => {
				console.log(err)
			})
		}
	},
  created() {
    this.intitProfile();
  },
};
</script>