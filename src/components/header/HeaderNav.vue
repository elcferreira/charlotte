<template>
  <nav class="header__nav">
    <ul class="header__nav-list">
      <li v-for="(menuItem, i) in menuList" :key="i" class="header__nav-item">
        <a :href="menuItem.link" :title="menuItem.text" class="header__nav-link fz__15 c__black">{{menuItem.text}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      menuList: [
        {
          link: '#',
          text: 'The Queen city'
        },
        {
          link: '#',
          text: 'My Reservations'
        },
        {
          link: '#',
          text: 'Guide'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
  @import '../../assets/style/inc/var';

  .header__nav
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 5
    &:before
      content: ''
      width: 100%
      height: 100%
      position: absolute
      background-color: $_white

  .header__nav-list
    padding: 2em 0 0 0
    position: relative
    display: block
    z-index: 2

  .header__nav-item
    list-style: none
    display: block

  .header__nav-link
    display: block
    padding: 0.5em 1.333em

  @media (min-width: 31.250em)
    .header__nav
      height: auto
      position: absolute
      &:before
        content: initial
        display: none

    .header__nav-list
      padding-left: 4em
      display: flex

    .header__nav-link
      color: $_white
      position: relative
      &:before
        content: ''
        width: 3em
        height: 0.14em
        position: absolute
        left: 1.3em
        top: 0.3em
        background-color: $_white
        transition: 0.3s $_ease1
        transform-origin: left center
        transform: scaleX(0)
      &:hover, &:focus
        &:before
          transform: scaleX(1)
</style>
