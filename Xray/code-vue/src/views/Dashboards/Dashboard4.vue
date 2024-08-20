<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <b-row>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="iq-progress-bar progress-bar-vertical iq-bg-primary">
                  <span class="bg-primary" data-percent="70"></span>
                </div>
                <span class="line-height-4">10 feb, 2020</span>
                <h4 class="mb-2 mt-2">Hypertensive Crisis</h4>
                <p class="mb-0 text-secondary line-height">Ongoing treatment</p>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="iq-progress-bar progress-bar-vertical iq-bg-danger">
                  <span class="bg-danger" data-percent="50"></span>
                </div>
                <span class="line-height-4">12 Jan, 2020</span>
                <h4 class="mb-2 mt-2">Osteoporosis</h4>
                <p class="mb-0 text-secondary line-height">Incurable</p>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="iq-progress-bar progress-bar-vertical iq-bg-warning">
                  <span class="bg-warning" data-percent="80"></span>
                </div>
                <span class="line-height-4">15 feb, 2020</span>
                <h4 class="mb-2 mt-2">Hypertensive Crisis</h4>
                <p class="mb-0 text-secondary line-height">Examination</p>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" nobody>
              <div class="iq-card-body p-0 rounded" :style="`background: url(${require('../../assets/images/page-img/38.jpg')}) no-repeat scroll center center; background-size: contain;  min-height: 146px;`">
              </div>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height iq-user-profile-block">
          <template v-slot:body>
            <div class="user-details-block">
              <div class="user-profile text-center">
                <img src="../../assets/images/user/11.png" alt="profile-img" class="avatar-130 img-fluid">
              </div>
              <div class="text-center mt-3">
                <h4><b>Bini Jets</b></h4>
                <p>Doctor</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                <a href="#" class="btn btn-primary">Assign</a>
              </div>
              <hr>
              <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0">
                <li class="text-center">
                  <h3 class="counter">4500</h3>
                  <span>Operations</span>
                </li>
                <li class="text-center">
                  <h3 class="counter">3.9</h3>
                  <span>Medical Rating</span>
                </li>
              </ul>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card class-name=iq-card-block iq-card-stretch iq-card-height>
          <template v-slot:headerTitle>
            <h4 class="card-title">Health Curve</h4>
          </template>
          <template v-slot:body>
            <ApexChart element="home-chart-06" :chartOption="darkChart1" v-if="$route.meta.dark"/>
            <ApexChart element="home-chart-06" :chartOption="chart1" v-else/>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="smaill-calender-home">
          <template v-slot:headerTitle>
            <h4 class="card-title">Nearest Treatment</h4>
          </template>
          <template v-slot:body>
            <flat-pickr :config="config" value="" class="d-none" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height-half" nobody>
          <div class="iq-card-body">
              <h6>APPOINTMENTS</h6>
              <h3><b>5075</b></h3>
          </div>
            <ApexChart element="wave-chart-7" :chartOption="chart7" :isLive="true"/>
        </iq-card>
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height-half" nobody>
          <div class="iq-card-body">
              <h6>NEW PATIENTS</h6>
              <h3><b>1200</b></h3>
          </div>
            <ApexChart element="wave-chart-8" :chartOption="chart8" :isLive="true"/>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="hospital-mgt">
          <template v-slot:headerTitle>
            <h4 class="card-title">Hospital Management</h4>
          </template>
          <template v-slot:body>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 20%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">OPD</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 30%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Treatment</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 60%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Laboratory Test</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">85%</div>
            </div>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 40%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">New Patient</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
            <div class="progress mb-3" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 35%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Doctors</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 65%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
            <div class="progress" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 28%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Discharge</div>
              <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">35%</div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Patient Progress</h4>
          </template>
          <template v-slot:body>
            <ul class="patient-progress m-0 p-0">
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Bud Jet</h6>
                </div>
                <span class="badge badge-primary">30%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Barney Cull</h6>
                </div>
                <span class="badge badge-success">70%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Eric Shun</h6>
                </div>
                <span class="badge badge-danger">15%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Rick Shaw</h6>
                </div>
                <span class="badge badge-warning">55%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Ben Effit</h6>
                </div>
                <span class="badge badge-info">45%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Rick Shaw</h6>
                </div>
                <span class="badge badge-warning">55%</span>
              </li>
              <li class="d-flex mb-3 align-items-center">
                <div class="media-support-info">
                  <h6>Marge Arita</h6>
                </div>
                <span class="badge badge-primary">65%</span>
              </li>
              <li class="d-flex align-items-center">
                <div class="media-support-info">
                  <h6>Barry Cudat</h6>
                </div>
                <span class="badge badge-danger">15%</span>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" body-class="pl-0 pr-0">
          <template v-slot:headerTitle>
            <h4 class="card-title">Patient overview</h4>
          </template>
          <template v-slot:body>
            <AmChart element="home-chart-03" :type=radialChat.type :option=radialChat.data  :height=radialChat.height />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Visits From Countries </h4>
          </template>
          <template v-slot:body>
            <div class="iq-details">
              <span class="title text-dark">United States</span>
              <div class="percentage float-right text-primary">95 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <div class="iq-progress-bar">
                  <span class="bg-primary" data-percent="95"></span>
                </div>
              </div>
            </div>
            <div class="iq-details mt-4">
              <span class="title text-dark">India</span>
              <div class="percentage float-right text-warning">75 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <div class="iq-progress-bar">
                  <span class="bg-warning" data-percent="75"></span>
                </div>
              </div>
            </div>
            <div class="iq-details mt-4">
              <span class="title text-dark">Australia</span>
              <div class="percentage float-right text-success">55 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <div class="iq-progress-bar">
                  <span class="bg-success" data-percent="55"></span>
                </div>
              </div>
            </div>
            <div class="iq-details mt-4">
              <span class="title text-dark">Brazil</span>
              <div class="percentage float-right text-danger">25 <span>%</span></div>
              <div class="iq-progress-bar-linear d-inline-block w-100">
                <div class="iq-progress-bar">
                  <span class="bg-danger" data-percent="25"></span>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="8">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">New Appointments </h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown size="lg p-0"  variant="link" toggle-class="text-decoration-none" no-caret>
              <template v-slot:button-content>
                    <span class="dropdown-toggle p-0" id="dropdownMenuButton5" data-toggle="dropdown">
                      <i class="ri-more-fill m-0 text-primary"></i>
                    </span>
              </template>
              <b-dropdown-item href="#"><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <div class="table-responsive">
              <table class="table mb-0 table-borderless">
                <thead>
                <tr>
                  <th scope="col">Patient</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Date</th>
                  <th scope="col">Timing</th>
                  <th scope="col">Contact</th>

                </tr>
                </thead>
                <tbody v-for="appointment in appointments" :key="appointment.id">
                <tr>
                  <td>{{appointment.patient}}</td>
                  <td>{{appointment.doctor}}</td>
                  <td>{{appointment.date}}</td>
                  <td>{{appointment.timing}}</td>
                  <td>{{appointment.contact}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Doctors Lists</h4>
          </template>
          <template v-slot:body>
            <ul class="doctors-lists m-0 p-0">
              <li class="d-flex mb-4 align-items-center" v-for="doctor in doctors" :key="doctor.name">
                <div class="user-img img-fluid"><img :src="doctor.img" alt="story-img" class="rounded-circle avatar-40"></div>
                <div class="media-support-info ml-3">
                  <h6>{{doctor.name}}</h6>
                  <p class="mb-0 font-size-12">{{doctor.degree}}</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <b-dropdown size="lg"  variant="link" toggle-class="p-0 text-decoration-none" no-caret>
                    <template v-slot:button-content class="p-0">
                    <span class="dropdown-toggle p-0" id="dropdownMenuButton6" data-toggle="dropdown">
                      <i class="ri-more-2-line"></i>
                    </span>
                    </template>
                    <b-dropdown-item href="#"><i class="ri-eye-line mr-2"></i>View</b-dropdown-item>
                    <b-dropdown-item href="#"><i class="ri-bookmark-line mr-2"></i>Appointment</b-dropdown-item>
                  </b-dropdown>
                </div>
              </li>
            </ul>
            <a href="javascript:void(0);" class="btn btn-primary d-block mt-3"><i class="ri-add-line"></i> View All Doctors </a>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import IqCard from '../../components/xray/cards/iq-card'
import { xray } from '../../config/pluginInit'
const body = document.getElementsByTagName('body')
export default {
  name: 'Dashboard4',
  components: { IqCard },
  data () {
    return {
      config: {
        dateFormat: 'Y-m-d',
        inline: true
      },
      doctors: [
        { name: 'Dr. Paul Molive', img: require('../../assets/images/user/01.jpg'), degree: 'MBBS, MD' },
        { name: 'Dr. Barb Dwyer', img: require('../../assets/images/user/02.jpg'), degree: 'MD' },
        { name: 'Dr. Terry Aki', img: require('../../assets/images/user/03.jpg'), degree: 'MBBS' },
        { name: 'Dr. Robin Banks', img: require('../../assets/images/user/04.jpg'), degree: 'MBBS, MD' },
        { name: 'Dr. Barry Wine', img: require('../../assets/images/user/05.jpg'), degree: 'BAMS' },
        { name: 'Dr. Zack Lee', img: require('../../assets/images/user/06.jpg'), degree: 'MS, MD' },
        { name: 'Dr. Otto Matic', img: require('../../assets/images/user/07.jpg'), degree: 'MBBS, MD' },
        { name: 'Dr. Moe Fugga', img: require('../../assets/images/user/08.jpg'), degree: 'MD' },
        { name: 'Dr. Bud Wiser', img: require('../../assets/images/user/09.jpg'), degree: 'MBBS' },
        { name: 'Dr. Barry Cade', img: require('../../assets/images/user/10.jpg'), degree: 'MBBS, MD' }

      ],
      appointments: [
        { patient: 'Petey Cruiser', doctor: 'Dr.Monty Carlo', date: '20/02/2020', timing: '8:00 AM', contact: '+1-202-555-0146' },
        { patient: 'Anna Sthesia', doctor: 'Dr.Pete Sariya', date: '25/02/2020', timing: '8:30 AM', contact: '+1-202-555-0164' },
        { patient: 'Paul Molive', doctor: 'Dr.Brock Lee', date: '20/02/2020', timing: '9:45 AM', contact: '+1-202-555-0153' },
        { patient: 'Anna Mull', doctor: 'Dr.Barb Ackue', date: '27/02/2020', timing: '11:30 AM', contact: '+1-202-555-0154' },
        { patient: 'Paige Turner', doctor: 'Dr.Walter Melon', date: '28/02/2020', timing: '3:30 AM', contact: '+1-202-555-0101' },
        { patient: 'Don Stairs', doctor: 'Dr.Arty Ficial', date: '28/02/2020', timing: '4:30 PM', contact: '+1-202-555-0176' },
        { patient: 'Pat Agonia', doctor: 'Dr.Barb Ackue', date: '29/02/2020', timing: '5:00 AM', contact: '+1-202-555-0194' }
      ],
      chart1: {
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
        chart: {
          height: 350,
          type: 'area'
        },
        colors: ['#089bab'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      darkChart1: {
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
        chart: {
          height: 350,
          type: 'area'
        },
        colors: ['#089bab'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart7: {
        chart: {
          height: 112,
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
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          data: []
        }],
        colors: ['#089bab'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      chart8: {
        chart: {
          height: 112,
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
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [{
          data: []
        }],
        colors: ['#fc9f5b'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      radialChat: {
        type: 'radial-pie',
        height: 280,
        data: [
          {
            country: 'USA',
            value: 401
          },
          {
            country: 'India',
            value: 300
          },
          {
            country: 'Australia',
            value: 200
          },
          {
            country: 'Brazil',
            value: 100
          }
        ]
      }
    }
  },
  mounted () {
    xray.index()
    body[0].classList.add('sidebar-main-menu')
  },
  destroyed () {
    body[0].classList.remove('sidebar-main-menu')
  }
}
</script>
