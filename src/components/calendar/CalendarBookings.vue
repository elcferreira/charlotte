<template>
  <transition name="showBookingsAnim" appear>
    <section v-if="dataBookings.complete" class="calendar__bookings">
      <h2 class="calendar__bookings-title tac fz__16 fz__22--48em font__montserrat">Best choices between <span v-html="dataSelect.start"></span> and <span v-html="dataSelect.end"></span></h2>
      <aside class="calendar__bookings-filters">
        <span class="bookings-filters__title fz__16 fz__22--48em font__montserrat">Filters</span>
        <div class="bookings-filters__price">
          <span class="fz__12 c__c1c1c1">Price Range</span>
          <vue-slider v-model="valueFilter" v-bind="sliderOptions"></vue-slider>
          <div class="bookings-filters__range-options">
            <div class="bookings-filters__range-option">
              <span class="range-option__text fz__14 c__c1c1c1">Min</span>
              <span class="range-option__value fz__16 fz__22--48em c__e49320 bold">${{valueFilter[0]}}</span>
            </div>
            <div class="bookings-filters__range-option">
              <span class="range-option__text fz__14 c__c1c1c1">Max</span>
              <span class="range-option__value fz__16 fz__22--48em c__e49320 bold">${{valueFilter[1]}}</span>
            </div>
          </div>
        </div>
        <div class="bookings-filters__stars">
          <span class="fz__12 c__c1c1c1">Stars</span>
          <div class="bookings-filters__stars-options">
            <label v-for="initStars in 5" :key="initStars" class="stars-options__label">
              <input type="radio" v-model="starInput" :value="initStars" class="stars-options__input">
              <span v-html="initStars > starInput ? starOutline : starFilled" class="stars-options__svg"></span>
            </label>
          </div>
        </div>
      </aside>
      <ul class="calendar__bookings-list">
        <calendar-hotel v-for="(hotelItem, i) in dataBookings.content.hotels" :data-hotel="hotelItem" :key="i" v-if="verifyFilter(hotelItem.rate, hotelItem.price)"></calendar-hotel>
      </ul>
    </section>
  </transition>
</template>

<script>
import CalendarHotel from '@/components/calendar/CalendarHotel.vue'
import vueSlider from 'vue-slider-component'

export default {
  data () {
    return {
      starFilled: require('@/assets/images/icon/icon_star-filled.svg'),
      starOutline: require('@/assets/images/icon/icon_star-outline.svg'),
      starInput: '',
      initStars: 1,
      valueFilter: [
        100,
        600
      ],
      sliderOptions: {
        min: 100,
        max: 600,
        width: '100%',
        tooltip: false,
        dotSize: 24,
        class: 'bookings__range-style',
        processStyle: {
          'backgroundColor': '#de801e'
        }
      }
    }
  },
  props: [
    'dataSelect'
  ],
  methods: {
    verifyFilter (_star, _value) {
      if (this.starInput) {
        return parseInt(this.starInput) === _star && (_value > this.valueFilter[0] && _value < this.valueFilter[1])
      } else {
        return _value > this.valueFilter[0] && _value < this.valueFilter[1]
      }
    }
  },
  components: {
    CalendarHotel,
    vueSlider
  },
  computed: {
    dataBookings () {
      return this.$store.getters.data.hotels
    }
  }
}
</script>

<style lang="sass">
  @import '../../assets/style/inc/var';

  .calendar__bookings
    padding: 1em 0

  .calendar__bookings-title
    padding: 0 2.5em
    line-height: 1.5em
    letter-spacing: 0.113em

  .bookings-filters__title
    letter-spacing: 0.113em

  // animation
  .showBookingsAnim-enter-active, .showBookingsAnim-leave-active
    transition: 0.49s ease

  .showBookingsAnim-enter, .showBookingsAnim-leave-to
    transform: translateY(2em)
    opacity: 0

  .showBookingsAnim-enter-to, .showBookingsAnim-leave
    transform: translateY(0em)
    opacity: 2

  // filter
  .calendar__bookings-filters
    padding: 4em 4em 0
    max-width: 32em
    margin: 0 auto

  .bookings-filters__price
    padding: 3.3em 0 2.4em
    border-bottom: 0.1em solid $_c1c1c1

  .bookings-filters__range-options
    display: flex
    justify-content: space-between

  .bookings-filters__range-option
    padding: 0.5em 0 0 0
    &:nth-child(2)
      text-align: right

  .range-option__text
    display: block

  .range-option__value
    letter-spacing: 0.113em
    opacity: 0.7

  .bookings__range-style
    .vue-slider-dot
      background-color: $_white
      border: 0.4em solid $_de801e
      box-shadow: none

  .bookings-filters__stars
    padding: 2.5em 0

  .bookings-filters__stars-options
    display: flex
    overflow: hidden
    padding: 1em 0 0 0

  .stars-options__label
    cursor: pointer
    & + .stars-options__label
      margin-left: 0.3em

  .stars-options__input
    position: absolute
    left: -100vw

  .stars-options__svg
    width: 2.6em
    display: block

  @media (min-width: 48em)
    .calendar__bookings
      display: flex
      flex-wrap: wrap
      max-width: 123em
      margin: 0 auto

    .calendar__bookings-title
      width: 100%
      padding-bottom: 2.7em

    .calendar__bookings-filters
      width: 28.9em

    .calendar__bookings-list
      width: calc(100% - 28.9em)

  @media (min-width: 65em)
    .calendar__bookings-list
      padding: 0 0 10em 0

    // filter
    .calendar__bookings-filters
      padding: 0 0 0 4em

  @media (min-width: 80em)
    // filter
    .calendar__bookings-filters
      padding: 0

</style>
