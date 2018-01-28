<template>
  <aside class="calendar__picker bgc__white">
    <h2 class="calendar__picker-title fz__16 fz__22--48em tac font__montserrat">Select the dates to stay in Charlotte</h2>

    <div class="calendar__picker-column">
      <div class="calendar__picker-selector tac">
        <v-date-picker
          class='picker'
          mode='range'
          :is-inline='picker.inline'
          :is-expanded='picker.isExpansed'
          :show-popover="picker.showPopover"
          :show-disabled-dates='picker.showDisabledDates'
        v-model='calendarSelection'>
        </v-date-picker>
      </div>
      <div class="calendar__picker-submited">
        <span class="picker-submited__text picker-submited__text--title ttu c__686868 fz__16 fz__22--48em">Check-in</span>
        <span class="picker-submited__text c__c1c1c1 fz__15 fz__20--48em" v-html="calendarResult.start || '—'"></span>
        <span class="picker-submited__text picker-submited__text--title ttu c__686868  fz__16 fz__22--48em">Check-out</span>
        <span class="picker-submited__text c__c1c1c1 fz__15 fz__20--48em" v-html="calendarResult.end || '—'"></span>
        <a href="#"
           title="Search hotels"
           class="picker-submited__button"
           v-on:click.prevent="calendarResult.start ? submitSearch() : ''"
           :class="{'picker-submited__button--disabled': calendarResult.start == null}">
          <div class="picker-submited__button-blend bgc__de801e"></div>
          <span class="picker-submited__button-text picker-submited__button-text--init c__e49320 fz__15 bold">Search hotels</span>
          <span class="picker-submited__button-text picker-submited__button-text--hover  c__white fz__15 bold">Search hotels</span>
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {
    props: {
    },
    data () {
      return {
        calendarSelection: null,
        picker: {
          inline: true,
          isExpansed: false,
          showPopover: false,
          showDisabledDates: false
        }
      }
    },
    computed: {
      calendarResult () {
        if (this.calendarSelection !== null) {
          return {
            start: this.calendarSelection.start.toLocaleString('en-us', { month: 'long' }) + ' <strong>' + this.calendarSelection.start.getDate() + '</strong>, ' + this.calendarSelection.start.getFullYear(),
            end: this.calendarSelection.end.toLocaleString('en-us', { month: 'long' }) + ' <strong>' + this.calendarSelection.end.getDate() + '</strong>, ' + this.calendarSelection.end.getFullYear()
          }
        } else {
          return {
            start: null,
            end: null
          }
        }
      }
    },
    methods: {
      submitSearch () {
        console.log('request')
        // request data calendar
        this.$store.dispatch('getDataInit', { name: 'hotels', date: this.calendarResult })
        this.$parent.$emit('showBookings', { show: true, date: this.calendarResult })
      }
    }
  }
</script>

<style lang="sass">

  @import '../../assets/style/inc/var';
  @import '../../../node_modules/v-calendar/lib/v-calendar.min.css';

  .calendar__picker
    width: calc(100% - 6em)
    margin: -3em auto 0
    border-radius: .5em

  .calendar__picker-title
    letter-spacing: 0.113em
    padding: 1em 2em 2em
    line-height: 1.5em

  .picker
    min-width: 200px
    font-size: 1.2em
    margin: 0 auto

  .c-day-background
    width: 2.8rem
    height: 2.8rem

  .calendar__picker-column
    padding: 0 0 6em

  .calendar__picker-submited
    margin: 0 auto
    max-width: 19.8em

  .picker-submited__text
    display: block
    letter-spacing: 0.113em
    &--title
      padding: 1.8em 0 0.2em 0

  .picker-submited__button
    border-radius: 6em
    overflow: hidden
    position: relative
    display: inline-block
    padding: 1.4em 4.5em
    margin: 3.5em 0 0 0
    perspective: 1px;
    &:after
      content: ''
      width: 98%
      height: 100%
      border-radius: 6em
      border: 0.2em solid $_de801e
      position: absolute
      left: 1%
      top: 0
    &:hover, &:focus
      .picker-submited__button-blend
        transform-origin: center bottom
        transform: scaleY(1)
      .picker-submited__button-text
        &--init
          transform: translateY(-1.4em)
          opacity: 0
        &--hover
          transform: translate3d(-50%, -50%, 0)
          opacity: 1
    &--disabled
      cursor: no-drop
      filter: grayscale(1)
      div, span, &:after
        cursor: no-drop

  .picker-submited__button-text
    transition: 0.39s $_ease1
    display: block
    &--hover
      position: absolute
      left: 50%
      top: 50%
      white-space: nowrap
      transform: translate3d(-50%, 0.4em, 0)
      opacity: 0

  .picker-submited__button-blend
    width: 100%
    height: 100%
    position: absolute
    left: 0
    top: 0
    transform-origin: center top
    transform: scaleY(0)
    transition: transform 0.32s $_ease1

  @media (min-width: 48em)
    .calendar__picker
      max-width: 83.8em
      margin-top: -14.6em

    .calendar__picker-column
      display: flex
      justify-content: center
      flex-direction: row-reverse

    .calendar__picker-title
      padding: 2.6em 2em 2.6em

    .calendar__picker-submited
      margin: 0
      width: 28.9em
      max-width: none

    .calendar__picker-selector
      .picker
        width: 24.1em

    .picker-submited__text--title
      &:first-child
        padding-top: 0.5em
</style>
