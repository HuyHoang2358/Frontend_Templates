<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12" md="3" v-for="doctor in doctors" :key="doctor.message">
          <iq-card body-class="text-center">
            <template v-slot:body>
              <div class="doc-profile">
                <img class="rounded-circle img-fluid avatar-80" :src="doctor.image" alt="profile">
              </div>
              <div class="iq-doc-info mt-3">
                <h4> {{doctor.name}}</h4>
                <p class="mb-0" >{{doctor.specialist}}</p>
                <a href="javascript:void(0);">{{doctor.website}}</a>
              </div>
              <div class="iq-doc-description mt-2">
                <p class="mb-0">{{doctor.description}}</p>
              </div>
              <div class="iq-doc-social-info mt-3 mb-3">
                <ul class="m-0 p-0 list-inline">
                  <li><a href="#"><i class="ri-facebook-fill"></i></a></li>
                  <li><a href="#"><i class="ri-twitter-fill"></i></a> </li>
                  <li><a href="#"><i class="ri-google-fill"></i></a></li>
                </ul>
              </div>
              <a href="#" class="btn btn-primary">View Profile</a>
            </template>
          </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { xray } from '../../config/pluginInit'

export default {
  name: 'UserList',
  data () {
    return {
      doctors: [
        { name: 'Dr. Anna Mull', specialist: 'Cardiologists', image: require('../../assets/images/user/1.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Bunny Joy', specialist: 'Gynaecology', image: require('../../assets/images/user/01.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Shonda Leer', specialist: 'Orthopedics Special', image: require('../../assets/images/user/02.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Ira Membrit', specialist: 'MD', image: require('../../assets/images/user/03.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Paul Molive', specialist: 'Medicine Specialists', image: require('../../assets/images/user/04.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Dr. Terry Aki', specialist: 'Heart Surgeons', image: require('../../assets/images/user/05.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Poppa Cherry', specialist: 'Family Physicians', image: require('../../assets/images/user/06.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Dr. Saul T. Balls', specialist: 'Gynaecology', image: require('../../assets/images/user/07.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Hal Appeno', specialist: 'MD', image: require('../../assets/images/user/08.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Polly Tech', specialist: 'Eye Special', image: require('../../assets/images/user/09.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Pat Agonia', specialist: 'Therapy Special', image: require('../../assets/images/user/10.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Barry Cade', specialist: 'Heart Surgeons', image: require('../../assets/images/user/12.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr.Jimmy Changa', specialist: 'Cardiologists', image: require('../../assets/images/user/12.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Sue Vaneer', specialist: 'Orthopedics Special', image: require('../../assets/images/user/13.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Monty Carlo', specialist: 'Anesthesiologists', image: require('../../assets/images/user/14.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Rick O\'Shea', specialist: 'General', image: require('../../assets/images/user/15.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' }

      ]
    }
  },
  mounted () {
    xray.index()
  },
  firestore () {
    return {
    }
  },
  components: {
  },
  beforeMount () {
  },
  method: {
  },
  computed: {
  }
}
</script>
