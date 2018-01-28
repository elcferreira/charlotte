<template>
  <transition name="calendarHotelAnim" appear>
    <li class="calendar__bookings-item">
      <figure class="bookings-item__figure">
        <img :src="dataHotel.image" :alt="dataHotel.name" class="bookings-item__image">
      </figure>
      <aside class="bookings-item__aside">
        <section class="bookings-item__infos">
          <div class="bookings-item__column1">
            <ul class="bookings-item__infos-stars">
              <li class="bookings-item__infos-star" v-for="countInitial in dataHotel.rate" :key="countInitial" v-html="starFilled"></li>
            </ul>
            <h3 class="bookings-item__infos-name fz__16 bold ttu c__e49320">{{dataHotel.name}}</h3>
            <span class="bookings-item__infos-description fz__15 c__c1c1c1">{{dataHotel.description}}</span>
            <div class="bookings-item__infos-buttons">
              <a href="#"
                 title="Book now"
                 class="picker-submited__button bookings-item__button">
                <div class="picker-submited__button-blend bgc__de801e"></div>
                <span class="picker-submited__button-text picker-submited__button-text--init c__e49320 fz__14 bold">Book now</span>
                <span class="picker-submited__button-text picker-submited__button-text--hover  c__white fz__14 bold">Book now</span>
              </a>
              <a href="#"
                 title="Price history"
                 class="picker-submited__button bookings-item__button bookings-item__button--green"
                 v-on:click.prevent="showHistory = !showHistory">
                <div class="picker-submited__button-blend bgc__9cc439"></div>
                <span class="picker-submited__button-text picker-submited__button-text--init c__9cc439 fz__14 bold">Price history</span>
                <span class="picker-submited__button-text picker-submited__button-text--hover  c__white fz__14 bold">Price history</span>
              </a>
            </div>
          </div>
          <div class="bookings-item__column2">
            <span class="bookings-item__total-text c__c1c1c1 light fz__16">Total</span>
            <span class="bookings-item__total-price fz__30 bold font__montserrat c__9cc439">${{dataHotel.price}}</span>
          </div>
        </section>
        <transition name="graphAnim">
          <section class="bookings-item__graph" v-if="showHistory">
            <div class="bookings-item__graph-blend"></div>
            <header class="bookings-item__graph-header">
              <span class="graph-header__title fz__16 c__e49320 bold ttu">Price history for 2017</span>
              <a href="" title="Back to description" class="graph-header__button-back" v-on:click.prevent="showHistory = !showHistory">
                <span v-html="arrowBack" class="graph-header__icon"></span>
                <span class=" c__686868 fz__12">Back to description</span>
              </a>
            </header>
            <div class="bookings-item__graph-wrapper">
              <ul class="bookings-item__graph-list">
                <li v-for="(itemHistory, z) in dataHotel.price_history" :key="z" class="graph-list__item">
                  <div class="graph-list__item-bar">
                    <div class="graph-list__item-bar-fill" :style="{height: calcHeight(itemHistory.value)}">
                      <span class="graph-list__item-price bgc__494949 c__white fz__15">${{itemHistory.value}}</span>
                      <div class="item-bar-fill__inside"></div>
                    </div>
                  </div>
                  <div class="graph-list__item-month c__c1c1c1 fz__12">{{itemHistory.month}}</div>
                </li>
              </ul>
            </div>
          </section>
        </transition>
      </aside>
    </li>
  </transition>
</template>

<script>
export default {
  props: ['dataHotel'],
  data () {
    return {
      starFilled: require('@/assets/images/icon/icon_star-filled.svg'),
      arrowBack: require('@/assets/images/icon/icon_back-description.svg'),
      countInitial: 1,
      showHistory: false
    }
  },
  methods: {
    calcHeight (current) {
      return (current * 100 / Math.max.apply(Math, this.dataHotel.price_history.map(function (o) { return o.value }))).toString() + '%'
    }
  }
}
</script>

<style lang="sass">
  @import '../../assets/style/inc/var';

  .calendar__bookings-item
    padding: 4em 3em

  .bookings-item__button
    padding: 0.9em 3.9em
    margin: 0 0 1.3em
    &--green
      &:after
        border-color: $_9cc439

  .calendar__bookings-item
    list-style: none

  .bookings-item__figure
    // width: 23.8em
    width: 17.8em
    overflow: hidden
    border-radius: .5em
    margin: 0 auto

  .bookings-item__infos-stars
    display: flex
    justify-content: center
    padding: 1.4em 0

  .bookings-item__infos-star
    list-style: none
    svg
      width: 1.3em
      height: 1.3em
    & + .bookings-item__infos-star
      margin-left: 0.43em

  .bookings-item__infos-name
    letter-spacing: 0.113em

  .bookings-item__infos-description
    letter-spacing: 0.103em
    display: block
    padding: 1.467em 0

  .bookings-item__aside
    position: relative

  .bookings-item__total-text
    display: block
    letter-spacing: 0.118em

  .bookings-item__total-price
    letter-spacing: 0.118em

  // graph
  .bookings-item__graph
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    flex-direction: column
    overflow: hidden

  .bookings-item__graph-blend
    content: ''
    width: 100%
    height: 100%
    background-color: $_white
    position: absolute
    top: 0
    left: 0
    transform-origin: center bottom
    z-index: 0

  .bookings-item__graph-header
    padding: 1.8em 0
    display: flex
    justify-content: space-between
    position: relative

  .graph-header__title
    letter-spacing: 0.113em
    display: block
    width: 50%

  .graph-header__button-back
    display: block
    width: 40%

  .graph-header__icon
    padding: 0 0.3em 0 0
    svg
      width: 2.4em
      height: 1.6em
      position: relative
      top: .3em

  // graph wrapper
  .bookings-item__graph-wrapper
    width: 100%
    height: 21em
    position: relative
    overflow-x: auto
    overflow-y: hidden
    -webkit-overflow-scrolling: touch

  .bookings-item__graph-list
    display: flex
    justify-content: space-between
    min-width: 54em
    width: 100%
    height: 100%
    padding: 4em 4em 6em
    position: relative
    &:before
      content: ''
      width: calc(100% - 8em)
      height: 0.2em
      background-color: $_d8d8d8
      display: block
      position: absolute
      left: 4em
      bottom: 6em
      z-index: 3
      transform-origin: left center

  .graph-list__item
    list-style: none
    height: 100%

  .graph-list__item-bar
    width: 2.7em
    height: 100%
    position: relative

  .graph-list__item-bar-fill
    position: absolute
    width: 100%
    bottom: 0

  .item-bar-fill__inside
    position: absolute
    height: 100%
    width: 100%
    border-radius: 0.3em 0.3em 0 0
    background: linear-gradient(to bottom, rgba(248,130,3,1) 0%, rgba(244,119,36,1) 50%, rgba(240,112,66,1) 100%)
    transform-origin: center bottom

  .graph-list__item-price
    width: 3.8em
    height: 1.733em
    letter-spacing: 0.113em
    border-radius: 0.2em
    display: flex
    align-items: center
    justify-content: center
    left: 50%
    position: absolute
    top: 0
    transform: translate3d(-50%, -2.6em, 0)
    &:after
      content: ''
      border-width: 0.4em
      border-style: solid
      border-color: $_494949 transparent transparent transparent
      position: absolute
      bottom: -0.7em
      left: 50%
      margin-left: -0.3em

  .graph-list__item-month
    display: block
    padding: 1em 0 0 0

  // animation
  .graphAnim-enter-active, .graphAnim-leave-active
    transition: 1.9s ease
    .bookings-item__graph-blend
      transition: 0.42s $_ease1
    .graph-header__title, .graph-header__button-back
      transition: 0.34s $_ease1
    .graph-header__title
      transition-delay: 0.22s
    .graph-header__button-back
      transition-delay: 0.32s
    .graph-list__item
      $_delay: 0.2
      @for $i from 1 through 7
        &:nth-child(#{$i})
          .item-bar-fill__inside, .graph-list__item-price, .graph-list__item-month
            transition-delay: #{$_delay}s
        $_delay: $_delay +  0.12
    .item-bar-fill__inside
      transition: transform 0.32s $_ease1
    .graph-list__item-month
      transition: 0.32s ease
    .bookings-item__graph-list
      &:before
        transition: 0.45s $_ease1
        transition-delay: 0.23s
    .graph-list__item-price
      transition: 0.32s $_ease1

  .graphAnim-leave-active
    .bookings-item__graph-blend
      transition-delay: 0.7s

  .graphAnim-enter, .graphAnim-leave-to
    .bookings-item__graph-blend
      transform: scaleY(0)
    .graph-header__title, .graph-header__button-back
      transform: translateY(2em)
      opacity: 0
    .bookings-item__graph-list
      &:before
        transform: scaleX(0)
    .item-bar-fill__inside
      transform: scaleY(0)
    .graph-list__item-price
      transform: translate3d(-50%, 0, 0) scale(0.8)
      opacity: 0
    .graph-list__item-month
      opacity: 0

  .graphAnim-enter-to, .graphAnim-leave
    .bookings-item__graph-blend
      transform: scaleY(1)
    .graph-header__title, .graph-header__button-back
      transform: translateY(0em)
      opacity: 1
    .bookings-item__graph-list
      &:before
        transform: scaleX(1)
    .item-bar-fill__inside
      transform: scaleY(1)
    .graph-list__item-price
      transform: translate3d(-50%, -2.6em, 0) scale(1)
      opacity: 1
    .graph-list__item-month
      opacity: 1
    @media (min-width: 48em)
      .graph-list__item-price
        transform: translate3d(-50%, 0, 0) scale(0.8)
        opacity: 0

  // animation
  .calendarHotelAnim-enter-active, .calendarHotelAnim-leave-active
    transition: 0.43s ease

  .calendarHotelAnim-enter, .calendarHotelAnim-leave-to
    transform: translateY(3em)
    opacity: 0

  .calendarHotelAnim-enter-to, .calendarHotelAnim-leave
    transform: translateY(0em)
    opacity: 1

  // responsive <3
  @media (min-width: 48em)
    .graph-list__item-price
      transform: translate3d(-50%, -1em, 0) scale(0.8)
      opacity: 0
      transition: 0.31s $_ease1

    .item-bar-fill__inside
      opacity: .6
      transition: 0.28s ease

    .graph-header__button-back
      width: auto
      margin-right: 3.9em

    .graph-header__title
      padding: 0 0 0 2.5em

    .graph-list__item
      &:hover
        .item-bar-fill__inside
          opacity: 1
        .graph-list__item-price
          transform: translate3d(-50%, -2.6em, 0) scale(1)
          opacity: 1

    .graph-header__icon
      svg
        transition: 0.23s $_ease1

    .graph-header__button-back
      &:hover, &:focus
        .graph-header__icon
          svg
            transform: translateX(-1em)

  @media (min-width: 65em)
    .calendar__bookings-item
      display: flex
      padding-left: 8.4em
      padding-bottom: 5.7em

    .bookings-item__figure
      margin: 0
      width: 23.8em

    .bookings-item__aside
      width: calc(100% - 23.8em)
      padding: 0 0 0 4em

    .bookings-item__infos-stars
      justify-content: flex-start
      padding: 1.2em 0 1.8em

    .bookings-item__infos-name
      line-height: 1.7em

    .bookings-item__infos-buttons
      padding: 0.5em 0 0 0

    .bookings-item__graph-header
      padding: 1em 0 1.9em

  @media (min-width: 80em)
    .bookings-item__infos
      display: flex

    .bookings-item__column1
      width: 84.6%
      padding: 0 3.4em 0 0

    .bookings-item__column2
      width: 30%
      text-align: right
      padding-top: 25%
      position: relative
      &:before
        content: ''
        width: 0.1em
        background-color: $_d8d8d8
        height: 100%
        left: 0
        top: 0
        position: absolute

    .bookings-item__button
      & + .bookings-item__button
        margin-left: 2em

</style>
