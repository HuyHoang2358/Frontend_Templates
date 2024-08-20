<template>
  <VueFullCalendar defaultView="dayGridMonth"
                   :header="header"
                   :plugins="calendarPlugins"
                   :events="calendarEvents"
                   time-zone="UTC"
  />
</template>
<script>
import VueFullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
export default {
  name: 'FullCalendar',
  props: {
    // eslint-disable-next-line vue/require-valid-default-prop
    calendarEvents: { type: Array, default: [] },
    header: { type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default () {
        return {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }
      }
    }
  },
  data () {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        listPlugin
      ]
    }
  },
  components: {
    VueFullCalendar // make the <VueFullCalendar> tag available
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang='scss'>
  .fc-event, .fc-event:hover{
    color: #ffffff !important;
  }
  @import '~@fullcalendar/core/main.css';
  @import '~@fullcalendar/daygrid/main.css';
  @import '~@fullcalendar/timegrid/main.css';
  @import '~@fullcalendar/list/main.min.css';
</style>
