<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12">
        <b-row>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="iq-bg-primary rounded">
              <template v-slot:body>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="rounded-circle iq-card-icon bg-primary"><i class="ri-user-fill"></i></div>
                  <div class="text-right">
                    <h2 class="mb-0"><span class="counter">5600</span></h2>
                    <h5 class="">Doctors</h5>
                  </div>
                </div>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="iq-bg-warning rounded">
              <template v-slot:body >
                <div class="d-flex align-items-center justify-content-between">
                  <div class="rounded-circle iq-card-icon bg-warning"><i class="ri-women-fill"></i></div>
                  <div class="text-right">
                    <h2 class="mb-0"><span class="counter">3450</span></h2>
                    <h5 class="">Nurses</h5>
                  </div>
                </div>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="iq-bg-danger rounded">
              <template v-slot:body >
                <div class="d-flex align-items-center justify-content-between">
                  <div class="rounded-circle iq-card-icon bg-danger"><i class="ri-group-fill"></i></div>
                  <div class="text-right">
                    <h2 class="mb-0"><span class="counter">3500</span></h2>
                    <h5 class="">Patients</h5>
                  </div>
                </div>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="iq-bg-info rounded">
              <template v-slot:body >
                <div class="d-flex align-items-center justify-content-between">
                  <div class="rounded-circle iq-card-icon bg-info"><i class="ri-hospital-line"></i></div>
                  <div class="text-right">
                    <h2 class="mb-0"><span class="counter">4500</span></h2>
                    <h5 class="">Pharmacists</h5>
                  </div>
                </div>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="12">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Hospital Survey</h4>
          </template>
          <template v-slot:body>
            <div class="iq-card-body pb-0 mt-3">
              <div class="row text-center">
                <div class="col-sm-3 col-6">
                  <h4 class="margin-0">$ 305 </h4>
                  <p class="text-muted"> Today's Income</p>
                </div>
                <div class="col-sm-3 col-6">
                  <h4 class="margin-0">$ 999 </h4>
                  <p class="text-muted">This Week's Income</p>
                </div>
                <div class="col-sm-3 col-6">
                  <h4 class="margin-0">$ 4999 </h4>
                  <p class="text-muted">This Month's Income</p>
                </div>
                <div class="col-sm-3 col-6">
                  <h4 class="margin-0">$ 90,000 </h4>
                  <p class="text-muted">This Year's Income</p>
                </div>
              </div>
            </div>
            <div id="home-servey-chart"></div>
            <ApexChart element="home-chart-09" :chartOption="homesurvey" v-if="$route.meta.dark"/>
            <ApexChart element="home-chart-09" :chartOption="chart9" v-else/>
          </template>
        </iq-card>
      </b-col>
      <b-col sm="12">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Hospital Staff</h4>
          </template>
          <template v-slot:body class="d-flex flex-wrap align-items-center p-0 slick-initialized slick-slider">
              <Slick :option="slickOptions" id="doster-list-slide">
                  <div class="docter-list-item-inner rounded text-center" v-for="doctors in doctorList" :key="doctors.id">
                    <div class="donter-profile">
                      <img :src="doctors.img" class="img-fluid rounded-circle" alt="user-img">
                    </div>
                    <div class="doctor-detail mt-3">
                      <h5>{{doctors.name}}</h5>
                      <h6>{{doctors.position}}</h6>
                    </div>
                    <hr>
                    <div class="doctor-description">
                      <p class="mb-0 text-center pl-2 pr-2">{{doctors.worksAt}}</p>
                    </div>
                  </div>
              </Slick>
          </template>
        </iq-card>
      </b-col>
      <b-col md="12" lg="8">
        <b-row>
          <b-col sm="12">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="">
              <template v-slot:headerTitle>
                <h4 class="card-title">Operations</h4>
              </template>
              <template v-slot:headerAction>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                    <template v-slot:button-content>
                      <i class="ri-more-fill"></i>
                    </template>
                    <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                  </b-dropdown>
                </div>
              </template>
              <template v-slot:body>
                <div class="table-responsive">
                  <table class="table mb-0 table-borderless">
                    <thead>
                    <tr>
                      <th scope="col">Patient</th>
                      <th scope="col">Patient Name </th>
                      <th scope="col">Doctors Team</th>
                      <th scope="col">Date Of Operation</th>
                      <th scope="col"> Report</th>
                      <th scope="col">Diseases</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="text-center"><img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/01.jpg" alt="profile"></td>
                      <td>Petey Cruiser</td>
                      <td>
                        <div class="iq-media-group">
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/05.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/06.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/07.jpg" alt="">
                          </a>
                        </div>
                      </td>
                      <td>12-02-2020</td>
                      <td><i class="ri-file-pdf-line font-size-16 text-danger"></i></td>
                      <td>Fracture</td>
                    </tr>
                    <tr>
                      <td class="text-center"><img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/02.jpg" alt="profile"></td>
                      <td>Anna Sthesia</td>
                      <td>
                        <div class="iq-media-group">
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/05.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/06.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/07.jpg" alt="">
                          </a>
                        </div>
                      </td>
                      <td>14-02-2020</td>
                      <td><i class="ri-file-pdf-line font-size-16 text-danger"></i></td>
                      <td>Cataract surgery</td>
                    </tr>
                    <tr>
                      <td class="text-center"><img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/03.jpg" alt="profile"></td>
                      <td>Paul Molive</td>
                      <td>
                        <div class="iq-media-group">
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/05.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/06.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/07.jpg" alt="">
                          </a>
                        </div>
                      </td>
                      <td>14-02-2020</td>
                      <td><i class="ri-file-pdf-line font-size-16 text-danger"></i></td>
                      <td>Cancer</td>

                    </tr>
                    <tr>
                      <td class="text-center"><img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/04.jpg" alt="profile"></td>
                      <td>Anna Mull</td>
                      <td>
                        <div class="iq-media-group">
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/05.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/06.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/07.jpg" alt="">
                          </a>
                        </div>
                      </td>
                      <td>16-02-2020</td>
                      <td><i class="ri-file-pdf-line font-size-16 text-danger"></i></td>
                      <td>Hysterectomy</td>
                    </tr>
                    <tr>
                      <td class="text-center"><img class="rounded-circle img-fluid avatar-40" src="../../assets/images/user/05.jpg" alt="profile"></td>
                      <td>Ruby saul</td>
                      <td>
                        <div class="iq-media-group">
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/05.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/06.jpg" alt="">
                          </a>
                          <a href="#" class="iq-media">
                            <img class="img-fluid avatar-40 rounded-circle" src="../../assets/images/user/07.jpg" alt="">
                          </a>
                        </div>
                      </td>
                      <td>18-02-2020</td>
                      <td><i class="ri-file-pdf-line font-size-16 text-danger"></i></td>
                      <td>Cancer</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </template>
            </iq-card>
          </b-col>
          <b-col md="12" lg="6">
            <b-row>
              <b-col md="6" lg="12">
                <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
                  <template v-slot:body>
                    <div class="iq-info-box d-flex align-items-center p-3">
                      <div class="info-image mr-3">
                        <img src="../../assets/images/page-img/30.png" class="img-fluid" alt="image-box">
                      </div>
                      <div class="info-text">
                        <h3>120</h3>
                        <span>Total Appointments</span>
                      </div>
                    </div>
                  </template>
                </iq-card>
              </b-col>
              <b-col md="6" lg="12">
                <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
                  <template v-slot:body>
                    <div class="iq-info-box d-flex align-items-center p-3">
                      <div class="info-image mr-3">
                        <img src="../../assets/images/page-img/31.png" class="img-fluid" alt="image-box">
                      </div>
                      <div class="info-text">
                        <h3>5000</h3>
                        <span>Completed Appointments</span>
                      </div>
                    </div>
                  </template>
                </iq-card>
              </b-col>
              <b-col md="6" lg="12">
                <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
                  <template v-slot:body>
                    <div class="iq-info-box d-flex align-items-center p-3">
                      <div class="info-image mr-3">
                        <img src="../../assets/images/page-img/32.png" class="img-fluid" alt="image-box">
                      </div>
                      <div class="info-text">
                        <h3>1500</h3>
                        <span>Cancelled Appointments</span>
                      </div>
                    </div>
                  </template>
                </iq-card>
              </b-col>
              <b-col md="6" lg="12">
                <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
                  <template v-slot:body>
                    <div class="iq-info-box d-flex align-items-center p-3">
                      <div class="info-image mr-3">
                        <img src="../../assets/images/page-img/33.png" class="img-fluid" alt="image-box">
                      </div>
                      <div class="info-text">
                        <h3>500</h3>
                        <span>Followup Appointments</span>
                      </div>
                    </div>
                  </template>
                </iq-card>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="12" lg="6">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Recent Activity</h4>
              </template>
              <template v-slot:headerAction>
                <div class="dropdown">
                  <span class="dropdown-toggle text-primary" id="dropdownMenuButton4" data-toggle="dropdown">
                    View All
                  </span>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4">
                    <a class="dropdown-item" href="#"><i class="ri-eye-fill mr-2"></i>View</a>
                    <a class="dropdown-item" href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                    <a class="dropdown-item" href="#"><i class="ri-pencil-fill mr-2"></i>Edit</a>
                    <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                  </div>
                </div>
              </template>
              <template v-slot:body>
                <ul class="iq-timeline">
                  <li>
                    <div class="timeline-dots-fill"></div>
                    <h6 class="float-left mb-2 text-dark"><i class="ri-user-fill"></i> 5 min ago</h6>
                    <small class="float-right mt-1">Active</small>
                    <div class="d-inline-block w-100">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque </p>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-dots-fill bg-success"></div>
                    <h6 class="float-left mb-2 text-dark"><i class="ri-user-fill"></i> 6 min ago</h6>
                    <small class="float-right mt-1">Away</small>
                    <div class="d-inline-block w-100">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque</p>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-dots-fill bg-info"></div>
                    <h6 class="float-left mb-2 text-dark"><i class="ri-user-fill"></i> 10 min ago</h6>
                    <small class="float-right mt-1">Active</small>
                    <div class="d-inline-block w-100">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque</p>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-dots-fill bg-warning"></div>
                    <h6 class="float-left mb-2 text-dark"><i class="ri-user-fill"></i> 15 min ago</h6>
                    <small class="float-right mt-1">Offline</small>
                    <div class="d-inline-block w-100">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque</p>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-dots-fill bg-danger"></div>
                    <h6 class="float-left mb-2 text-dark"><i class="ri-user-fill"></i> 18 min ago</h6>
                    <small class="float-right mt-1">Away</small>
                    <div class="d-inline-block w-100">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque</p>
                    </div>
                  </li>
                </ul>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="12" lg="4">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Total Accident Report</h4>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col sm="6">
                <h3>$40K</h3>
              </b-col>
              <ApexChart element="home-wave-chart" :chartOption="chart7" />
              <b-col class="row text-center mt-3">
                <b-col sm="6">
                  <h6 class="text-truncate d-block">Last Month</h6>
                  <p class="m-0">358</p>
                </b-col>
                <b-col sm="6">
                  <h6 class="text-truncate d-block">Current Month</h6>
                  <p class="m-0">194</p>
                </b-col>
              </b-col>
            </b-row>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Total Death Report</h4>
          </template>
          <template v-slot:body>
            <div class="row">
              <div class="col-sm-6">
                <h3>$20K</h3>
              </div>
            </div>
            <ApexChart element="home-wave-chart-8" :chartOption="chart8" />
            <div class="row text-center mt-3">
              <div class="col-sm-6">
                <h6 class="text-truncate d-block">Last Month</h6>
                <p class="m-0">220</p>
              </div>
              <div class="col-sm-6">
                <h6 class="text-truncate d-block">Current Month</h6>
                <p class="m-0">120</p>
              </div>
            </div>
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Overall Progress</h4>
          </template>
          <template v-slot:body>
            <ApexChart element="home-radial-chart" :chartOption="radialbar" v-if="$route.meta.dark"/>
            <ApexChart element="home-radial-chart" :chartOption="chart10" v-else/>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { xray } from '../../config/pluginInit'
import IqCard from '../../components/xray/cards/iq-card'
export default {
  name: 'Dashboard1',
  components: { IqCard },
  mounted () {
    xray.index()
  },
  data () {
    return {
      slickOptions: {
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [{
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30',
            slidesToShow: 3
          }
        }, {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '15',
            slidesToShow: 1
          }
        }],
        nextArrow: '<a href="#" class="ri-arrow-left-s-line left"></a>',
        prevArrow: '<a href="#" class="ri-arrow-right-s-line right"></a>'
      },
      items: [
        { client: 'Ira Membrit', date: '18/10/2019', invoice: '20156', amount: '1500', status: { name: 'paid', color: 'success' }, action: 'Copy' },
        { client: 'Pete Sariya', date: '26/10/2019', invoice: '7859', amount: '2000', status: { name: 'paid', color: 'success' }, action: 'Send email' },
        { client: 'Cliff Hanger', date: '18/11/2019', invoice: '6396', amount: '2500', status: { name: 'past due', color: 'danger' }, action: 'Before Date' },
        { client: 'Terry Aki', date: '14/12/2019', invoice: '7854', amount: '5000', status: { name: 'paid', color: 'success' }, action: 'Copy' },
        { client: 'Anna Mull', date: '24/12/2019', invoice: '568569', amount: '10000', status: { name: 'paid', color: 'success' }, action: 'Send email' }
      ],
      doctorList: [
        { name: 'Dr.Paul Molive', img: require('../../assets/images/user/05.jpg'), position: 'doctor', worksAt: 'California Hospital Medical Center' },
        { name: 'Dr.Paul Molive', img: require('../../assets/images/user/06.jpg'), position: 'Surgeon', worksAt: 'California Hospital Medical Center' },
        { name: 'Dr.Paul Molive', img: require('../../assets/images/user/07.jpg'), position: 'OT Assistant', worksAt: 'California Hospital Medical Center' },
        { name: 'Dr.Paul Molive', img: require('../../assets/images/user/08.jpg'), position: 'doctor', worksAt: 'California Hospital Medical Center' },
        { name: 'Dr.Paul Molive', img: require('../../assets/images/user/09.jpg'), position: 'Nurse', worksAt: 'California Hospital Medical Center' },
        { name: 'Dr.Paul Molive', img: require('../../assets/images/user/10.jpg'), position: 'Surgeon', worksAt: 'California Hospital Medical Center' }
      ],
      monthlyInvocie: [
        { title: 'Camelun ios', color: 'success', amount: '12,434.00', paid_month: '17', total_month: '23' },
        { title: 'React', color: 'warning', amount: '12,434.00', paid_month: '17', total_month: '23' },
        { title: 'Camelun ios', color: 'success', amount: '12,434.00', paid_month: '17', total_month: '23' },
        { title: 'Camelun ios', color: 'danger', amount: '12,434.00', paid_month: '17', total_month: '23' }
      ],
      paymentHistory: [
        { title: 'Deposit from ATL', amount: '- 1,470', icon: 'ri-refresh-line', color: 'secondary', date: '5 march, 18:33', currency: 'USD' },
        { title: 'Deposit PayPal', amount: '+ 2,220', icon: 'ri-paypal-line', color: 'primary', date: '5 march, 18:33', currency: 'USD' },
        { title: 'Deposit from ATL', amount: '+ 250', icon: 'ri-check-line', color: 'primary', date: '5 march, 18:33', currency: 'USD' },
        { title: 'Cancelled', amount: '0', icon: 'ri-close-line', color: 'info', date: '5 march, 18:33', currency: 'USD' },
        { title: 'Refund', amount: '- 500', icon: 'ri-arrow-go-back-fill', color: 'info', date: '5 march, 18:33', currency: 'USD' },
        { title: 'Deposit from ATL', amount: '- 1,470', icon: 'ri-refresh-line', color: 'secondary', date: '5 march, 18:33', currency: 'USD' }
      ],
      homesurvey: {
        series: [{
          name: 'Cash Flow',
          data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
            5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
          ]
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -100,
                to: -46,
                color: '#e64141'
              }, {
                from: -45,
                to: 0,
                color: '#089bab'
              }, {
                from: 0,
                to: 20,
                color: '#FC9F5B'
              }]
            },
            columnWidth: '80%'
          }
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          title: {
            text: 'Growth'
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + '%'
            }
          }
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
          ],
          labels: {
            rotate: -90
          }
        }
      },
      radialbar: {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px'
              },
              value: {
                fontSize: '16px'
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        series: [44, 55, 67, 83],
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: ['#089bab', '#FC9F5B', '#75DDDD', '#ffb57e']

      },
      chart10: {
        chart: {
          height: 350,
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '22px'
              },
              value: {
                fontSize: '16px'
              },
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249
                }
              }
            }
          }
        },
        series: [44, 55, 67, 83],
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: ['#089bab', '#FC9F5B', '#75DDDD', '#ffb57e']

      },
      chart9: {
        series: [{
          name: 'Cash Flow',
          data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
            5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
          ]
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: -100,
                to: -46,
                color: '#e64141'
              }, {
                from: -45,
                to: 0,
                color: '#089bab'
              }, {
                from: 0,
                to: 20,
                color: '#FC9F5B'
              }]
            },
            columnWidth: '80%'
          }
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          title: {
            text: 'Growth'
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + '%'
            }
          }
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
          ],
          labels: {
            rotate: -90
          }
        }
      },
      chart1: {
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        chart: {
          type: 'bar',
          height: 350
        },
        colors: ['#827af3', '#6ce6f4'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        yaxis: {
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      darkChart1: {
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        chart: {
          type: 'bar',
          foreColor: '#8c91b6',
          height: 350
        },
        colors: ['#827af3', '#6ce6f4'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        yaxis: {
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      chart2: {
        series: [{
          name: 'Desktops',
          data: [5, 10, 8, 15]
        }],
        chart: {
          height: 150,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        colors: ['#827af3'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr']
        }
      },
      darkChart2: {
        series: [{
          name: 'Desktops',
          data: [5, 10, 8, 15]
        }],
        chart: {
          height: 150,
          type: 'line',
          foreColor: '#8c91b6',
          zoom: {
            enabled: false
          }
        },
        colors: ['#827af3'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr']
        }
      },
      chart3: {
        series: [44, 55, 13, 33],
        chart: {
          width: 380,
          height: 180,
          type: 'donut'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#827af3', '#6ce6f4', '#a09e9e', '#fbc647'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 150
        }
      },
      darkChart3: {
        series: [44, 55, 13, 33],
        chart: {
          width: 380,
          height: 180,
          foreColor: '#8c91b6',
          type: 'donut'
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#827af3', '#6ce6f4', '#a09e9e', '#fbc647'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 150
        }
      },
      chart7: {
        chart: {
          height: 150,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        colors: ['#099fb0'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 3
        },
        series: [{
          data: [80, 90, 60, 90, 44, 50, 98, 80, 90]
        }],
        markers: {
          size: 4
        },
        yaxis: {
          max: 100
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          }
        },
        legend: {
          show: false
        }
      },
      chart8: {
        chart: {
          height: 150,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        colors: ['#fc9f5b'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 3
        },
        series: [{
          data: [50, 60, 45, 90, 44, 50, 98, 75, 50]
        }],
        markers: {
          size: 4
        },
        yaxis: {
          max: 100
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          }
        },
        legend: {
          show: false
        }
      }
    }
  }
}
</script>

<style>
.iq-card-body{
  flex: unset;
}
</style>
