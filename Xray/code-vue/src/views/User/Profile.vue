<template>
  <b-container fluid>
    <b-row>
      <b-col lg="4">
        <iq-card body-class="iq-card-body pl-0 pr-0 pt-0">
          <template v-slot:body>
            <div class="docter-details-block">
              <div class="doc-profile-bg bg-primary" style="height:150px;">
              </div>
              <div class="docter-profile text-center">
                <b-img :src="doctor.profile" alt="profile-img" class="avatar-130 img-fluid" />
              </div>
              <div class="text-center mt-3 pl-3 pr-3">
                <h4><b>Bini Jets</b></h4>
                <p>Doctor</p>
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repudiandae eveniet harum.</p>
              </div>
              <hr>
              <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0 m-0">
                <li class="text-center">
                  <h3 class="counter">4500</h3>
                  <span>Operations</span>
                </li>
                <li class="text-center">
                  <h3 class="counter">100</h3>
                  <span>Hospital</span>
                </li>
                <li class="text-center">
                  <h3 class="counter">10000</h3>
                  <span>Patients</span>
                </li>
              </ul>
            </div>
          </template>
        </iq-card>
        <iq-card body-class="iq-card-body">
          <template v-slot:body>
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Personal Information</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="about-info m-0 p-0">
                <div class="row">
                  <div class="col-4">First Name:</div>
                  <div class="col-8">Bini</div>
                  <div class="col-4">Last Name:</div>
                  <div class="col-8">Jets</div>
                  <div class="col-4">Age:</div>
                  <div class="col-8">27</div>
                  <div class="col-4">Position:</div>
                  <div class="col-8">Senior Docter</div>
                  <div class="col-4">Email:</div>
                  <div class="col-8"><a href="mailto:biniJets24@demo.com"> biniJets24@demo.com </a></div>
                  <div class="col-4">Phone:</div>
                  <div class="col-8"><a href="tel:001-2351-25612">001 2351 256 12</a></div>
                  <div class="col-4">Location:</div>
                  <div class="col-8">USA</div>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
        <iq-card body-class="iq-card-body">
          <template v-slot:body>
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Photos</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <ul class="profile-img-gallary d-flex flex-wrap p-0 m-0">
                <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../assets/images/login/1.png" alt="gallary-image" class="img-fluid"></a></li>
                <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../assets/images/login/2.png" alt="gallary-image" class="img-fluid"></a></li>
                <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../assets/images/login/3.png" alt="gallary-image" class="img-fluid"></a></li>
                <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../assets/images/login/1.png" alt="gallary-image" class="img-fluid"></a></li>
                <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../assets/images/login/2.png" alt="gallary-image" class="img-fluid"></a></li>
                <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../assets/images/login/3.png" alt="gallary-image" class="img-fluid"></a></li>
                <li class="col-md-4 col-6 pb-0"><a href="javascript:void(0);"><img src="../../assets/images/login/1.png" alt="gallary-image" class="img-fluid"></a></li>
                <li class="col-md-4 col-6 pb-0"><a href="javascript:void(0);"><img src="../../assets/images/login/2.png" alt="gallary-image" class="img-fluid"></a></li>
                <li class="col-md-4 col-6 pb-0"><a href="javascript:void(0);"><img src="../../assets/images/login/3.png" alt="gallary-image" class="img-fluid"></a></li>
              </ul>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <b-row>
          <b-col md="6">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Speciality</h4>
              </template>
              <template v-slot:body>
                <ul class="speciality-list m-0 p-0">
                  <li class="d-flex mb-4 align-items-center">
                    <div class="user-img img-fluid"><a href="#" class="iq-bg-primary"><i class="ri-award-fill"></i></a></div>
                    <div class="media-support-info ml-3">
                      <h6>professional</h6>
                      <p class="mb-0">Certified Skin Treatment</p>
                    </div>
                  </li>
                  <li class="d-flex mb-4 align-items-center">
                    <div class="user-img img-fluid"><a href="#" class="iq-bg-warning"><i class="ri-award-fill"></i></a></div>
                    <div class="media-support-info ml-3">
                      <h6>Certified</h6>
                      <p class="mb-0">Cold Laser Operation</p>
                    </div>
                  </li>
                  <li class="d-flex mb-4 align-items-center">
                    <div class="user-img img-fluid"><a href="#" class="iq-bg-info"><i class="ri-award-fill"></i></a></div>
                    <div class="media-support-info ml-3">
                      <h6>Medication Laser</h6>
                      <p class="mb-0">Hair Lose Product</p>
                    </div>
                  </li>
                </ul>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Notifications</h4>
              </template>
              <template v-slot:body>
                <ul class="iq-timeline">
                  <li>
                    <div class="timeline-dots border-success"></div>
                    <h6 class="">Dr. Joy Send you Photo</h6>
                    <small class="mt-1">23 November 2019</small>
                  </li>
                  <li>
                    <div class="timeline-dots border-danger"></div>
                    <h6 class="">Reminder : Opertion Time!</h6>
                    <small class="mt-1">20 November 2019</small>
                  </li>
                  <li>
                    <div class="timeline-dots border-primary"></div>
                    <h6 class="mb-1">Patient Call</h6>
                    <small class="mt-1">19 November 2019</small>
                  </li>
                </ul>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Schedule</h4>
              </template>
              <template v-slot:body>
                <ul class="list-inline m-0 p-0">
                  <li>
                    <h6 class="float-left mb-1">Ruby saul (Blood Check)</h6>
                    <small class="float-right mt-1">Today</small>
                    <div class="d-inline-block w-100">
                      <p class="badge badge-primary">09:00 AM </p>
                    </div>
                  </li>
                  <li>
                    <h6 class="float-left mb-1">  Anna Mull (Fever)</h6>
                    <small class="float-right mt-1">Today</small>
                    <div class="d-inline-block w-100">
                      <p class="badge badge-danger">09:15 AM </p>
                    </div>
                  </li>
                  <li>
                    <h6 class="float-left mb-1">Petey Cruiser (X-ray)</h6>
                    <small class="float-right mt-1">Today</small>
                    <div class="d-inline-block w-100">
                      <p class="badge badge-warning">10:00 AM </p>
                    </div>
                  </li>
                  <li>
                    <h6 class="float-left mb-1">Anna Sthesia (Full body Check up)</h6>
                    <small class="float-right mt-1">Today</small>
                    <div class="d-inline-block w-100">
                      <p class="badge badge-info">01:00 PM </p>
                    </div>
                  </li>
                  <li>
                    <h6 class="float-left mb-1">Paul Molive (Operation)</h6>
                    <small class="float-right mt-1">Tomorrow</small>
                    <div class="d-inline-block w-100">
                      <p class="badge badge-success">09:00 AM </p>
                    </div>
                  </li>

                </ul>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Patients Notes</h4>
              </template>
              <template v-slot:body>
                <ul class="list-inline m-0 p-0">
                  <li class="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6>Treatment was good!</h6>
                      <p class="mb-0">Eye Test </p>
                    </div>
                    <div><a href="#" class="btn iq-bg-primary">Open</a></div>
                  </li>
                  <li class="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6>My Helth in better Now</h6>
                      <p class="mb-0">Fever Test</p>
                    </div>
                    <div><a href="#" class="btn iq-bg-primary">Open</a></div>
                  </li>
                  <li class="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6>No Effacted</h6>
                      <p class="mb-0">Thyroid Test</p>
                    </div>
                    <div><a href="#" class="btn iq-bg-danger">Close</a></div>
                  </li>
                  <li class="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6>Operation Successfull</h6>
                      <p class="mb-0">Orthopaedic</p>
                    </div>
                    <div><a href="#" class="btn iq-bg-primary">Open</a></div>
                  </li>
                  <li class="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h6>Mediacal Care is just a click away</h6>
                      <p class="mb-0">Join Pain </p>
                    </div>
                    <div><a href="#" class="btn iq-bg-danger">Close</a></div>
                  </li>
                  <li class="d-flex align-items-center justify-content-between">
                    <div>
                      <h6>Treatment is good</h6>
                      <p class="mb-0">Skin Treatment </p>
                    </div>
                    <div><a href="#" class="btn iq-bg-primary">Open</a></div>
                  </li>
                </ul>
              </template>
            </iq-card>
          </b-col>
          <b-col md="12">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Education</h4>
              </template>
              <template v-slot:body>
                <table class="table mb-0 table-borderless">
                  <thead>
                  <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Institute</th>
                    <th scope="col">Result</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>2010</td>
                    <td>MBBS, M.D</td>
                    <td>University of Wyoming</td>
                    <td><span class="badge badge-success">Distinction</span></td>
                  </tr>
                  <tr>
                    <td>2014</td>
                    <td>M.D. of Medicine</td>
                    <td>Netherland Medical College</td>
                    <td><span class="badge badge-success">Distinction</span></td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </iq-card>
          </b-col>
          <b-col md="12">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Experience</h4>
              </template>
              <template v-slot:body>
                <table class="table mb-0 table-borderless">
                  <thead>
                  <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Department</th>
                    <th scope="col">Position</th>
                    <th scope="col">Hospital</th>
                    <th scope="col">Feedback</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>2014 - 2018</td>
                    <td>MBBS, M.D</td>
                    <td>Senior Docter</td>
                    <td>Midtown Medical Clinic</td>
                    <td><span class="badge badge-primary">Good</span></td>
                  </tr>
                  <tr>
                    <td>2018 - 2020</td>
                    <td>M.D. of Medicine</td>
                    <td>Associate Prof.</td>
                    <td>Netherland Medical College</td>
                    <td><span class="badge badge-success">excellence</span></td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { xray } from '../../config/pluginInit'
export default {
  name: 'Profile',
  mounted () {
    xray.index()
  },
  data () {
    return {
      doctor: {
        profile: require('../../assets/images/user/1.jpg')
      },
      user: {
        background: require('../../assets/images/page-img/profile-bg.jpg'),
        profile: require('../../assets/images/user/11.png'),
        name: 'Nik Jone',
        role: ' - Web designer',
        about: 'Lorem ipsum dolor sit amet, contur adipiscing elit.',
        email: 'nikjone@demoo.com',
        phone: '001 2351 256 12',
        location: 'USA',
        careated_date: '07 Jan 2020'
      },
      galary: [
        { image: require('../../assets/images/page-img/g1.jpg'), href: 'javascript:void(0);' },
        { image: require('../../assets/images/page-img/g2.jpg'), href: 'javascript:void(0);' },
        { image: require('../../assets/images/page-img/g3.jpg'), href: 'javascript:void(0);' },
        { image: require('../../assets/images/page-img/g4.jpg'), href: 'javascript:void(0);' },
        { image: require('../../assets/images/page-img/g5.jpg'), href: 'javascript:void(0);' },
        { image: require('../../assets/images/page-img/g6.jpg'), href: 'javascript:void(0);' },
        { image: require('../../assets/images/page-img/g7.jpg'), href: 'javascript:void(0);' },
        { image: require('../../assets/images/page-img/g8.jpg'), href: 'javascript:void(0);' },
        { image: require('../../assets/images/page-img/g9.jpg'), href: 'javascript:void(0);' }
      ],
      timelineItems: [
        {
          color: 'primary',
          title: 'Client Login',
          right: '24 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'success',
          title: 'Scheduled Maintenance',
          right: '23 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'danger',
          title: 'Dev Meetup',
          right: '20 November 2019',
          description: 'Bonbon macaroon jelly <b-link href="">beans gummi</b-link> bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
              require('../../assets/images/user/05.jpg'),
              require('../../assets/images/user/06.jpg'),
              require('../../assets/images/user/07.jpg'),
              require('../../assets/images/user/08.jpg'),
              require('../../assets/images/user/09.jpg'),
              require('../../assets/images/user/10.jpg')
            ]
          }
        },
        {
          color: 'primary',
          title: 'Client Call',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        },
        {
          color: 'warning',
          title: 'Mega Event',
          right: '15 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
            ]
          }
        }
      ],
      friends: [
        { name: 'Paul Molive', role: 'Web Designer', image: require('../../assets/images/user/01.jpg') },
        { name: 'Paul Molive', role: 'trainee', image: require('../../assets/images/user/01.jpg') },
        { name: 'Anna Mull', role: 'Web Developer', image: require('../../assets/images/user/02.jpg') },
        { name: 'Paige Turner', role: 'trainee', image: require('../../assets/images/user/03.jpg') },
        { name: 'Barb Ackue', role: 'Web Designer', image: require('../../assets/images/user/04.jpg') },
        { name: 'Greta Life', role: 'Tester', image: require('../../assets/images/user/05.jpg') },
        { name: 'Ira Membrit', role: 'Android Developer', image: require('../../assets/images/user/06.jpg') },
        { name: 'Pete Sariya', role: 'Web Designer', image: require('../../assets/images/user/07.jpg') }
      ],
      userBio: [
        { title: 'Joined', description: 'November 15, 2012' },
        { title: 'Lives', description: 'United States of America' },
        { title: 'Email', description: '<a href="mailto:nikjone@gmail.com"> nikjone@gmail.com</a>' },
        { title: 'Url', description: '<a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank"> www.bootstrap.com </a>' },
        { title: 'Contact', description: '<a href="tel:001 4544 565 456">(001) 4544 565 456</a>' }
      ],
      story: [
        { title: 'Web Design', time: '1 hour ago', image: require('../../assets/images/page-img/s1.jpg'), class: 'mb-4', isActive: 'active' },
        { title: 'App Design', time: '4 hour ago', image: require('../../assets/images/page-img/s2.jpg'), class: 'mb-4', isActive: '' },
        { title: 'Abstract Design', time: '9 hour ago', image: require('../../assets/images/page-img/s3.jpg'), class: '', isActive: '' }
      ],
      suggestions: [
        { name: 'Paul Molive', mutual_friend: '4 mutual friends', image: require('../../assets/images/user/01.jpg') },
        { name: 'Paul Molive', mutual_friend: '4 mutual friends', image: require('../../assets/images/user/01.jpg') },
        { name: 'Anna Mull', mutual_friend: '6 mutual friends', image: require('../../assets/images/user/02.jpg') },
        { name: 'Paige Turner', mutual_friend: '8 mutual friends', image: require('../../assets/images/user/03.jpg') },
        { name: 'Barb Ackue', mutual_friend: '1 mutual friends', image: require('../../assets/images/user/04.jpg') },
        { name: 'Greta Life', mutual_friend: '3 mutual friends', image: require('../../assets/images/user/05.jpg') },
        { name: 'Ira Membrit', mutual_friend: '12 mutual friends', image: require('../../assets/images/user/06.jpg') },
        { name: 'Pete Sariya', mutual_friend: '2 mutual friends', image: require('../../assets/images/user/07.jpg') }
      ],
      news: [
        { description: 'there is a meetup in your city on friday at 19:00.<a href="#">see details</a>' },
        { description: '20% off coupon on selected items at pharmaprix' }
      ],
      twitterFeed: [
        {
          image: require('../../assets/images/user/01.jpg'),
          name: 'Anna Sthesia',
          username: '@anna59',
          isVerify: true,
          tags: [
            {
              link: '#',
              text: 'Html'
            },
            {
              link: '#',
              text: 'Bootstrap'
            }
          ],
          date: '07 Jan 2020',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          image: require('../../assets/images/user/02.jpg'),
          name: 'Paige Turner',
          username: '@paige30',
          isVerify: true,
          tags: [
            {
              link: '#',
              text: 'Js'
            },
            {
              link: '#',
              text: 'Bootstrap'
            }
          ],
          date: '07 Jan 2020',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        },
        {
          image: require('../../assets/images/user/03.jpg'),
          name: 'Greta Life',
          username: '@greta07',
          isVerify: false,
          tags: [
            {
              link: '#',
              text: 'Html'
            },
            {
              link: '#',
              text: 'CSS'
            }
          ],
          date: '07 Jan 2020',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        }
      ]
    }
  }
}
</script>
