<template>
  <b-container fluid>
    <b-row>
      <b-col lg="4">
        <iq-card class-name="iq-user-profile-block1">
          <template v-slot:body>
            <div class="user-details-block">
              <div class="user-profile text-center">
                <img src="../../assets/images/user/11.png" alt="profile-img" class="avatar-130 img-fluid">
              </div>
              <div class="text-center mt-3">
                <h4><b>Bess Willis</b></h4>
                <p>27 years, California</p>
              </div>
              <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0 mt-4 mb-0">
                <li class="text-center">
                  <h6 class="text-primary">Weight</h6>
                  <h3>60<span>kg</span></h3>
                </li>
                <li class="text-center">
                  <h6 class="text-primary">Height</h6>
                  <h3>170<span>cm</span></h3>
                </li>
                <li class="text-center">
                  <h6 class="text-primary">Goal</h6>
                  <h3 class="text-warning">55<span>kg</span></h3>
                </li>
              </ul>
            </div>
          </template>
        </iq-card>
        <iq-card body-class="patient-steps">
          <template v-slot:body>
            <div class="d-flex align-items-center justify-content-between">
              <b-col md="6">
                <div class="data-block">
                  <p class="mb-0">Walked</p>
                  <h5>4532 steps</h5>
                </div>
                <div class="data-block mt-3">
                  <p class="mb-0">My Goal</p>
                  <h5>6500 steps</h5>
                </div>
              </b-col>
              <b-col md="6">
                <div class="progress-round patient-progress mx-auto" data-value="80">
                <span class="progress-left">
                  <span class="progress-bar border-secondary"></span>
                </span>
                  <span class="progress-right">
                  <span class="progress-bar border-secondary"></span>
                </span>
                  <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center text-center">
                    <div class="h4 mb-0">4532<br> <span class="font-size-14">left</span></div>
                  </div>
                </div>
              </b-col>
            </div>
            <ul class="patient-role list-inline d-flex align-items-center p-0 mt-4 mb-0">
              <li class="text-left">
                <h6 class="text-primary">Carbs</h6>
                <div class="iq-progress-bar-linear d-inline-block w-100">
                  <div class="iq-progress-bar">
                    <span class="bg-primary" data-percent="85"></span>
                  </div>
                </div>
              </li>
              <li class="text-left">
                <h6 class="text-primary">Protein</h6>
                <div class="iq-progress-bar-linear d-inline-block w-100">
                  <div class="iq-progress-bar">
                    <span class="bg-danger" data-percent="65"></span>
                  </div>
                </div>
              </li>
              <li class="text-left">
                <h6 class="text-primary">Fat</h6>
                <div class="iq-progress-bar-linear d-inline-block w-100">
                  <div class="iq-progress-bar">
                    <span class="bg-info" data-percent="70"></span>
                  </div>
                </div>
              </li>
            </ul>
            <hr>
            <div class="patient-steps2">
              <div class="d-flex align-items-center justify-content-between">
                <b-col md="6">
                  <div class="data-block">
                    <p class="mb-0">Burned</p>
                    <h5>325 kcal</h5>
                  </div>
                  <div class="data-block mt-3">
                    <p class="mb-0">My Goal</p>
                    <h5>800 kcal</h5>
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="progress-round patient-progress mx-auto" data-value="60">
                    <span class="progress-left">
                      <span class="progress-bar border-secondary"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar border-secondary"></span>
                    </span>
                    <div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center text-center">
                      <div class="h4 mb-0 text-warning">325<br> <span class="font-size-14 text-secondary">left</span></div>
                    </div>
                  </div>
                </b-col>
              </div>
              <ul class="patient-role list-inline d-flex align-items-center p-0 mt-4 mb-0">
                <li class="text-left">
                  <h6 class="text-primary">Carbs</h6>
                  <div class="iq-progress-bar-linear d-inline-block w-100">
                    <div class="iq-progress-bar">
                      <span class="bg-primary" data-percent="50"></span>
                    </div>
                  </div>
                </li>
                <li class="text-left">
                  <h6 class="text-primary">Protein</h6>
                  <div class="iq-progress-bar-linear d-inline-block w-100">
                    <div class="iq-progress-bar">
                      <span class="bg-danger" data-percent="60"></span>
                    </div>
                  </div>
                </li>
                <li class="text-left">
                  <h6 class="text-primary">Fat</h6>
                  <div class="iq-progress-bar-linear d-inline-block w-100">
                    <div class="iq-progress-bar">
                      <span class="bg-info" data-percent="70"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card body-class="pb-0" >
          <template v-slot:body>
            <b-row>
              <b-col sm="12">
                <iq-card body-class="bg-primary rounded pt-2 pb-2 pr-2">
                  <template v-slot:body>
                    <div class="d-flex align-items-center justify-content-between">
                      <p class="mb-0">Advice! Connect your Apple Watch for better results.</p>
                      <div class="rounded iq-card-icon bg-white">
                        <img src="../../assets/images/page-img/37.png" class="img-fluid" alt="icon">
                      </div>
                    </div>
                  </template>
                </iq-card>
                <div class="iq-card">
                  <div class="iq-header-title">
                    <h4 class="card-title text-primary">Popular Training</h4>
                  </div>
                  <div class="iq-card-body pl-0 pr-0 pb-0">
                      <b-row>
                        <b-col md="4">
                          <div class="training-block d-flex align-items-center">
                            <div class="rounded-circle iq-card-icon iq-bg-primary">
                              <img src="../../assets/images/page-img/34.png" class="img-fluid" alt="icon">
                            </div>
                            <div class="ml-3">
                              <h5 class="">Power Training</h5>
                              <p class="mb-0">395 kcal / h</p>
                            </div>
                          </div>
                        </b-col>
                        <b-col md="4">
                          <div class="training-block d-flex align-items-center">
                            <div class="rounded-circle iq-card-icon iq-bg-primary">
                              <img src="../../assets/images/page-img/35.png" class="img-fluid" alt="icon">
                            </div>
                            <div class="ml-3">
                              <h5 class="">Yoga Training</h5>
                              <p class="mb-0">395 kcal / h</p>
                            </div>
                          </div>
                        </b-col>
                        <b-col md="4">
                          <div class="training-block d-flex align-items-center">
                            <div class="rounded-circle iq-card-icon iq-bg-primary">
                              <img src="../../assets/images/page-img/36.png" class="img-fluid" alt="icon">
                            </div>
                            <div class="ml-3">
                              <h5 class="">Stretching</h5>
                              <p class="mb-0">395 kcal / h</p>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                  </div>
                </div>
              </b-col>
              <b-col lg="8">
                <iq-card header-class="d-flex justify-content-between p-0 bg-white">
                  <template v-slot:headerTitle>
                    <h4 class="card-title text-primary">Activity Statistic</h4>
                  </template>
                  <template v-slot:body>
                    <ApexChart element="patient-chart-01" :chartOption="patientChart" v-if="$route.meta.dark"/>
                    <ApexChart element="patient-chart-01" :chartOption="patientChart" v-else/>
                  </template>
                </iq-card>
              </b-col>
              <b-col lg="4">
                <iq-card class-name="mb-0" body-class="p-0" header-class="d-flex justify-content-between p-0 bg-white">
                  <template v-slot:headerTitle>
                    <h4 class="card-title text-primary">My Training</h4>
                  </template>
                  <template v-slot:headerAction>
                    <b-dropdown size="lg"  variant="link iq-bg-primary iq-border-radius-10" toggle-class="text-decoration-none" no-caret>
                      <template v-slot:button-content>
                        <span class="dropdown-toggle p-0" id="dropdownMenuButton5" data-toggle="dropdown">
                          <i class="ri-add-line m-0 text-primary"></i>
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
                    <table class="table mb-0 table-borderless table-box-shadow">
                      <thead>
                      <tr>
                        <th scope="col">Training</th>
                        <th scope="col">TRX Cardio</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Burned</td>
                        <td>350 kcal</td>
                      </tr>
                      <tr>
                        <td>Spend</td>
                        <td>1hr 45m</td>
                      </tr>
                      </tbody>
                    </table>
                    <table class="table mb-0 table-borderless mt-4 table-box-shadow">
                      <thead>
                      <tr>
                        <th scope="col">Training</th>
                        <th scope="col">Stretching</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Burned</td>
                        <td>180 kcal</td>
                      </tr>
                      <tr>
                        <td>Spend</td>
                        <td>30m</td>
                      </tr>
                      </tbody>
                    </table>
                  </template>
                </iq-card>
              </b-col>
              <b-col md="6">
                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title text-primary">Heart Rate</h4>
                  </template>
                  <template v-slot:body>
                    <div class="d-flex align-items-center">
                      <div class="mr-3">
                        <h4 class="">75 bpm</h4>
                        <p class="mb-0 text-primary">Health Zone</p>
                      </div>
                      <div class="rounded-circle iq-card-icon iq-bg-primary"><i class="ri-windy-fill"></i></div>
                    </div>
                  </template>
                </iq-card>
              </b-col>
              <b-col md="6">
                <iq-card body-class="p-0" header-class="d-flex justify-content-between p-0 bg-white">
                  <template v-slot:headerTitle>
                    <h4 class="card-title text-primary">Water Balance</h4>
                  </template>
                  <template v-slot:body>
                    <div class="d-flex align-items-center">
                      <div class="mr-3 text-left">
                        <p class="mb-0">Drunk</p>
                        <h4 class="">1250 ml/ 2000 ml</h4>
                      </div>
                      <div class="rounded-circle iq-card-icon iq-bg-primary"><i class="ri-add-fill"></i></div>
                    </div>
                  </template>
                </iq-card>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import IqCard from '../../components/xray/cards/iq-card'
import { xray } from '../../config/pluginInit'
export default {
  name: 'Dashboard3',
  components: { IqCard },
  mounted () {
    xray.index()
  },
  data () {
    return {
      patientChart: {
        series: [{
          name: 'Servings',
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31]
        }],
        annotations: {
          points: [{
            x: 'Bananas',
            seriesIndex: 0,
            label: {
              borderColor: '#775DD0',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#775DD0'
              },
              text: 'Bananas are good'
            }
          }]
        },
        chart: {
          height: 350,
          type: 'bar'
        },
        colors: ['#089bab'],
        plotOptions: {
          bar: {
            columnWidth: '50%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },

        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: ['A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J'
          ],
          tickPlacement: 'on'
        },
        yaxis: {
          title: {
            text: 'Servings'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          }
        }
      }
    }
  }
}
</script>
