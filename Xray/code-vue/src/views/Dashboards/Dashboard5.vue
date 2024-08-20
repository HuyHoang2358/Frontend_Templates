<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <b-row>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch">
              <template v-slot:body>
               <div class="d-flex align-items-center justify-content-between">
                    <div class="text-left">
                        <h4 class="mb-2 mt-2">Confirm</h4>
                        <h3 class="mb-0 line-height">{{ info.cases ? info.cases : 183325}}</h3>
                    </div>
                    <div class="rounded-circle iq-card-icon bg-primary"><i class="ri-task-line"></i></div>
                </div>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch">
              <template v-slot:body >
                <div class="d-flex align-items-center justify-content-between">
                    <div class="text-left">
                        <h4 class="mb-2 mt-2">Recovered</h4>
                        <h3 class="mb-0 line-height">{{info.recovered ? info.recovered : 79908}}</h3>
                    </div>
                    <div class="rounded-circle iq-card-icon bg-warning"><i class="ri-hospital-line"></i></div>
                  </div>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card iq-card-block iq-card-stretch">
              <template v-slot:body >
                 <div class="d-flex align-items-center justify-content-between">
                    <div class="text-left">
                        <h4 class="mb-2 mt-2">Death</h4>
                        <h3 class="mb-0 line-height">{{info.deaths ? info.deaths : 7177}}</h3>
                    </div>
                    <div class="rounded-circle iq-card-icon bg-danger"><i class="ri-gradienter-line"></i></div>
                  </div>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch">
              <div class="iq-card-body P-0 rounded" :style="`background: url(${require('../../assets/images/page-img/44.jpg')}) no-repeat scroll center center; background-size: contain; min-height: 127px;`"></div>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm="12">
        <iq-card>
          <template v-slot:body>
            <MapAmChart element="world-map" styles="height: 400px; position: relative;" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card class-name="iq-card iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Global record</h4>
          </template>
          <template v-slot:body class="iq-card-body">
             <div class="table-responsive">
                <table class="table mb-0 table-borderless">
                  <thead>
                      <tr>
                        <th scope="col">Country</th>
                        <th scope="col">Confirm</th>
                        <th scope="col">Recover</th>
                        <th scope="col">Death</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td><img src="../../assets/images/small/china.png" class="img-fluid" alt="country-flag"> China</td>
                        <td>80,967</td>
                        <td>972</td>
                        <td>3248</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/france.png" class="img-fluid" alt="country-flag"> France</td>
                        <td>10,995</td>
                        <td>245</td>
                        <td>372</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/germany.png" class="img-fluid" alt="country-flag"> Germany</td>
                        <td>15,320</td>
                        <td>242</td>
                        <td>44</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/iran.png" class="img-fluid" alt="country-flag"> Iran</td>
                        <td>18,407</td>
                        <td>520</td>
                        <td>1284</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/italy.png" class="img-fluid" alt="country-flag"> Italy</td>
                        <td>41,035</td>
                        <td>10,600</td>
                        <td>3405</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/netherlands.png" class="img-fluid" alt="country-flag"> Netherlands</td>
                        <td>2460</td>
                        <td>24</td>
                        <td>76</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/norway.png" class="img-fluid" alt="country-flag"> Norway</td>
                        <td>789</td>
                        <td>135</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/south-koria.png" class="img-fluid" alt="country-flag"> South Korea</td>
                        <td>1200</td>
                        <td>500</td>
                        <td>600</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/spain.png" class="img-fluid" alt="country-flag"> Spain</td>
                        <td>18,077</td>
                        <td>150</td>
                        <td>831</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/sweden.png" class="img-fluid" alt="country-flag"> Sweden</td>
                        <td>800</td>
                        <td>250</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/switzerlands.png" class="img-fluid" alt="country-flag"> SwizerLand</td>
                        <td>4222</td>
                        <td>125</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/usa.png" class="img-fluid" alt="country-flag"> United States</td>
                        <td>14354</td>
                        <td>150</td>
                        <td>277</td>
                      </tr>
                      <tr>
                        <td><img src="../../assets/images/small/india.png" class="img-fluid" alt="country-flag"> India</td>
                        <td>197</td>
                        <td>50</td>
                        <td>4</td>
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
            <h4 class="card-title">How Avoid Virus infection</h4>
          </template>
          <template v-slot:body class="iq-card-body">
            <div class="media mb-4">
              <img src="../../assets/images/page-img/45.png" class="align-self-start mr-3 avatar-80" alt="blog-img">
              <div class="media-body">
                  <h5 class="mt-0">Wash your hands frequently</h5>
                  <p class="mb-0">Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</p>
              </div>
            </div>
             <div class="media mb-4">
                <img src="../../assets/images/page-img/46.png" class="align-self-start mr-3 avatar-80" alt="blog-img">
                <div class="media-body">
                    <h5 class="mt-0">Maintain social distancing</h5>
                    <p class="mb-0">Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</p>
                </div>
             </div>
              <div class="media mb-4">
                <img src="../../assets/images/page-img/47.png" class="align-self-start mr-3 avatar-80" alt="blog-img">
                <div class="media-body">
                    <h5 class="mt-0">Avoid touching eyes, nose and mouth</h5>
                    <p class="mb-0">Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.</p>
                </div>
              </div>
              <div class="media">
                <img src="../../assets/images/page-img/48.png" class="align-self-start mr-3 avatar-80" alt="blog-img">
                <div class="media-body">
                    <h5 class="mt-0">Practice respiratory hygiene </h5>
                    <p class="mb-0">Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.</p>
                </div>
              </div>
          </template>
        </iq-card>
      </b-col>
      <b-col sm="12">
        <div id="contact-slider" class="row">
          <b-col sm="6" md="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
            <template v-slot:body class="iq-card-body">
              <img class="arrow-img w-auto mb-3" src="../../assets/images/small/china.png" alt="iconflag">
              <h5 class="contact-number">
                    <i aria-hidden="true" class="ion ion-android-call"></i>
                    + 1 800 324 2323
              </h5><p class="mb-0">Help line China</p>
            </template>
           </iq-card>
          </b-col>
          <b-col sm="6" md="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
            <template v-slot:body class="iq-card-body">
              <img class="arrow-img w-auto mb-3" src="../../assets/images/small/france.png" alt="iconflag">
              <h5 class="contact-number">
                    <i aria-hidden="true" class="ion ion-android-call"></i>
                    + 1 800 324 2323
              </h5><p class="mb-0">Help line France</p>
            </template>
           </iq-card>
          </b-col>
          <b-col sm="6" md="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
            <template v-slot:body class="iq-card-body">
              <img class="arrow-img w-auto mb-3" src="../../assets/images/small/iran.png" alt="iconflag">
              <h5 class="contact-number">
                    <i aria-hidden="true" class="ion ion-android-call"></i>
                    + 1 800 324 2323
              </h5><p class="mb-0">Help line Iran</p>
            </template>
           </iq-card>
          </b-col>
          <b-col sm="6" md="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
            <template v-slot:body class="iq-card-body">
              <img class="arrow-img w-auto mb-3" src="../../assets/images/small/germany.png" alt="iconflag">
              <h5 class="contact-number">
                    <i aria-hidden="true" class="ion ion-android-call"></i>
                    + 1 800 324 2323
              </h5><p class="mb-0">Help line Germany</p>
            </template>
           </iq-card>
          </b-col>
        </div>
      </b-col>
      <b-col sm="12">
        <div id="blog-slider" class="row">
          <b-col sm="4">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
            <template v-slot:body class="iq-card-body">
              <div class="image-block">
                <img src="../../assets/images/page-img/40.png" class="img-fluid w-100" alt="blog-img">
              </div>
              <div class="blog-description">
                  <div class="blog-meta"><a href="#">March 21, 2020</a></div>
                  <h4 class="mb-2">Containing coronavirus spread comes</h4>
                  <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity, no matter whether social distancing and reduced mobility are voluntary or enforced."</p>
                  <a href="#">Read More <i class="ri-arrow-right-s-line"></i></a>
              </div>
            </template>
           </iq-card>
          </b-col>
          <b-col sm="4">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
             <template v-slot:body class="iq-card-body">
              <div class="image-block">
                <img src="../../assets/images/page-img/40.png" class="img-fluid w-100" alt="blog-img">
              </div>
              <div class="blog-description">
                  <div class="blog-meta"><a href="#">March 21, 2020</a></div>
                  <h4 class="mb-2">Containing coronavirus spread comes</h4>
                  <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity, no matter whether social distancing and reduced mobility are voluntary or enforced."</p>
                  <a href="#">Read More <i class="ri-arrow-right-s-line"></i></a>
              </div>
            </template>
           </iq-card>
          </b-col>
          <b-col sm="4">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
            <template v-slot:body class="iq-card-body">
              <div class="image-block">
                <img src="../../assets/images/page-img/40.png" class="img-fluid w-100" alt="blog-img">
              </div>
              <div class="blog-description">
                  <div class="blog-meta"><a href="#">March 21, 2020</a></div>
                  <h4 class="mb-2">Containing coronavirus spread comes</h4>
                  <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity, no matter whether social distancing and reduced mobility are voluntary or enforced."</p>
                  <a href="#">Read More <i class="ri-arrow-right-s-line"></i></a>
              </div>
            </template>
           </iq-card>
          </b-col>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from 'axios'
import IqCard from '../../components/xray/cards/iq-card'
import { xray } from '../../config/pluginInit'
import MapAmChart from '../../components/xray/charts/MapAmChart'
const body = document.getElementsByTagName('body')
export default {
  name: 'Dashboard5',
  props: ['element', 'styles'],
  components: { MapAmChart, IqCard },
  data () {
    return {
      config: {
        dateFormat: 'Y-m-d',
        inline: true
      },
      info: {
        cases: 0,
        recovered: 0,
        deaths: 0
      },
      state: []
    }
  },
  mounted () {
    xray.index()
    body[0].classList.remove('sidebar-main-menu')
    axios.get('https://corona.lmao.ninja/all').then(response => {
      this.info = response.data
    })
    axios.get('https://corona.lmao.ninja/states').then(response => {
      this.state = response.data
    })
  },
  destroyed () {
    body[0].classList.remove('sidebar-main-menu')
  }
}
</script>
