<template>
  <main class="page__calendar" :class="{'page__calendar--change-footer': showBookings}">
     <calendar-picker></calendar-picker>
     <calendar-bookings v-if="showBookings" :data-select="dataSelect"></calendar-bookings>
  </main>
</template>

<script>
  import CalendarPicker from '@/components/calendar/CalendarPicker.vue'
  import CalendarBookings from '@/components/calendar/CalendarBookings.vue'

  export default {
    data () {
      return {
        showBookings: false,
        dataSelect: null
      }
    },
    created () {
      this.$on('showBookings', function (obj) {
        this.showBookings = obj.show
        this.dataSelect = obj.date
      })
    },
    components: {
      CalendarPicker,
      CalendarBookings
    }
  }
</script>

<style lang="sass">
  @media (min-height: 68.125em)
    .page__calendar
      &:not(.page__calendar--change-footer)
        padding-bottom: 14em
        & + .page__footer
          position: absolute
          bottom: 0
          left: 0
          width: 100%

</style>
