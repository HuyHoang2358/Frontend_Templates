<template>
  <div class="iq-card-body iq-global-search">
    <h5 class="card-title">Page</h5>
    <ul class="pl-1 mb-0">
      <template v-if="filteredList.length > 0">
        <li v-for="(item,index) in filteredList" :key="index" class="iq-bg-primary-hover">
          <template v-if="!item.is_heading && !item.children" >
            <router-link :to="item.link" v-if="!item.is_heading" class="iq-waves-effect pr-4 list-group-item bg-transparent border-0 iq-bg-primary-hover">
              <i :class="item.icon" v-if="item.is_icon_class"/>
              <template v-else v-html="item.icon">
              </template>
              <span>{{ item.title }}</span>
              <i v-if="item.children" class="ri-arrow-right-s-line iq-arrow-right" />
            </router-link>
          </template>
        </li>
      </template>
      <template v-else>
        <li class="nav-link">Search Not Found</li>
      </template>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GlobalSearch',
  props: {
    search: { type: String, default: '' }
  },
  computed: {
    ...mapGetters({
      sidebar: 'Setting/globalSearchState'
    }),
    filteredList () {
      return this.sidebar.filter(item => {
        return item.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  mounted () {
  },
  data () {
    return {
      globalSearch: '',
      show: true
    }
  },
  methods: {
  }
}
</script>
