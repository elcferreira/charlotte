<template>
  <section class="page__banner" :style="{backgroundImage: 'url('+ backgroundImage[$mq] +')'}">
    <aside class="page__banner-content tac">
      <div class="banner-content__icon" v-html="require('@/assets/images/icon/icon_crown.svg')"></div>
      <span class="banner-content__text banner-content__text--top ttu font__montserrat c__white fz__16 fz__22--48em semi-bold">Welcome to</span>
        <h1 class="banner-content__title fz__32 fz__76--48em c__white font__montserrat ttu semi-bold ">Charlotte</h1>
      <span class="banner-content__text banner-content__text--bottom ttu font__montserrat c__white fz__16 fz__22--48em semi-bold">The queen city</span>
    </aside>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        backgroundImage: {
          's': 'src/assets/images/background/hero_x0.jpg',
          'm': 'src/assets/images/background/hero_x1.jpg',
          'l': 'src/assets/images/background/hero_x2.jpg',
          'xl': 'src/assets/images/background/hero_x3.jpg'
        }
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/style/inc/var'

  .page__banner
    width: 100%
    background-size: cover
    background-position:  center top

  .page__banner-content
    padding: 7em 0

  .banner-content__icon
    svg
      width: 5.5em
      height: 4.4em
      font-size: 0.7em

  .banner-content__title
    letter-spacing: 0.119em
    display: table
    margin: 0.286em auto
    position: relative
    padding: 0.189em 0
    &:before, &:after
      content: ''
      width: 100%
      height: 0.056em
      position: absolute
      background-color: $_white
      left: 0
    &:before
      top: 0
    &:after
      bottom: 0

  .banner-content__text
    letter-spacing: 0.118em
    &--top
      display: block
      padding: 0.8em 0 0

  @media (min-width: 48em)
    .page__banner
      height: 60em

    .page__banner-content
      padding: 10em 0 0

    .banner-content__icon
      svg
        font-size: 1em

    .banner-content__text
      &--top
        padding: 0.5em 0 0

    .banner-content__title
      margin: 0.1em auto
      padding: 0.149em 0
      &:before, &:after
        height: 0.028em

</style>
