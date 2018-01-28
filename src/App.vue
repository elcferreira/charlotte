<template>
  <div>
    <transition name="showOpacityAnim" appear>
      <the-header ></the-header>
    </transition>
    <transition name="showOpacityAnim" appear>
      <the-banner></the-banner>
    </transition>
    <transition name="showOpacityAnim" appear>
      <the-calendar></the-calendar>
    </transition>
    <transition name="showOpacityAnim" appear>
      <the-footer></the-footer>
    </transition>
  </div>
</template>

<script>
  // components Basic
  import TheHeader from '@/components/TheHeader.vue'
  import TheBanner from '@/components/TheBanner.vue'
  import TheCalendar from '@/components/TheCalendar.vue'
  import TheFooter from '@/components/TheFooter.vue'

  export default {
    components: {
      TheHeader,
      TheBanner,
      TheCalendar,
      TheFooter
    }
  }
</script>

<style lang="sass">
  // resets
  @import "./assets/style/inc/reset"
  @import "./assets/style/inc/var"
  @import "./assets/style/inc/typography"
  @import "./assets/style/inc/color"
  @import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Montserrat:400,600,700');

  .showOpacityAnim-enter-active, .showOpacityAnim-leave-active
    transition: 0.37s $_ease1

  .showOpacityAnim-enter, .showOpacityAnim-leave-to
    opacity: 0

  .showOpacityAnim-enter-to, .showOpacityAnim-leave
    opacity: 1
</style>
