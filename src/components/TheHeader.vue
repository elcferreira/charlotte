<!-- template using Header -->
<template>
  <header class="page__header">
    <transition name="headerNavAnim">
      <header-nav v-show="toggleNavMedia || toggleNav"></header-nav>
    </transition>

    <a class="header__burger bgc__white" :class="{'header__burger--close': toggleNav}" v-on:click.prevent="toggleNav = !toggleNav" v-if="$mq === 's'">
      <transition name="burgerTextAnim" mode="out-in">
        <span class="header__burger-text fz__15 c__black ttu bold font__heebo" :key="burgerText">{{burgerText}}</span>
      </transition>
      <div class="header__burger-lines">
        <i class="header__burger-line bgc__black"></i>
        <i class="header__burger-line bgc__black"></i>
        <i class="header__burger-line bgc__black"></i>
      </div>
    </a>
  </header>
</template>

<script>
import HeaderNav from '@/components/header/HeaderNav.vue'

export default {
  data () {
    return {
      toggleNav: false
    }
  },

  components: {
    HeaderNav
  },

  computed: {
    toggleNavMedia () {
      return this.$mq !== 's'
    },
    burgerText () {
      return !this.toggleNav ? 'menu' : 'close'
    }
  }
}
</script>

<style lang="sass">
  @import '../assets/style/inc/var';

  // header
  .header__burger
    position: fixed
    right: 2em
    top: 2em
    display: flex
    align-items: center
    padding: 0.5em 0.9em
    cursor: pointer
    z-index: 6
    outline: none
    &--close
      .header__burger-line
        &:nth-child(1)
          transform: translateY(-1em)
          opacity: 0
        &:nth-child(2)
          transform: rotate(45deg)
        &:nth-child(3)
          transform: translateY(-0.5em) rotate(-45deg)

  .header__burger-text
    letter-spacing: 0.118em
    padding: 0 0.8em 0 0
    margin-top: 0.1em

  .header__burger-line
    width: 1.5em
    height: 0.2em
    display: block
    transition: 0.29s $_ease1
    & + .header__burger-line
      margin-top: 0.3em

  // --
  // animation
  .burgerTextAnim-enter-active, .burgerTextAnim-leave-active
    transition: 0.32s $_ease1

  .burgerTextAnim-leave, .burgerTextAnim-enter-to
    transform: translateY(0)
    opacity: 1

  .burgerTextAnim-leave-to
    transform: translateY(-1em)
    opacity: 0

  .burgerTextAnim-enter
    transform: translateY(1em)
    opacity: 0

  // header nav
  .headerNavAnim-enter-active, .headerNavAnim-leave-active
    transition: 10s ease
    &:before
      transition: 0.42s $_ease1
    .header__nav-list
        transition: 0.49s $_ease1

  .headerNavAnim-leave-active
    &:before
      transition-delay: 0.3s

  .headerNavAnim-enter-active

  .headerNavAnim-enter
    &:before
      transform: translateX(100%)
    .header__nav-list
      transform: translateX(6em)
      transition-delay: 0.23s
      opacity: 0

  .headerNavAnim-enter-to
    &:before
      transform: translateX(0%)
    .header__nav-list
      transform: translateX(0)
      opacity: 1

  .headerNavAnim-leave-to
    &:before
      transform: translateX(100%)
    .header__nav-list
      transform: translateX(6em)
      opacity: 0

  .headerNavAnim-leave
    &:before
      transform: translateX(0%)
    .header__nav-list
      transform: translateX(0)
      opacity: 1
</style>
