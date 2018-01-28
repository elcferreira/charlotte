<template>
  <ul class="footer__social-list">
    <li v-for="(socialItem, i) in socialList" :key="i" class="footer__social-item">
      <a :href="socialItem.url" :title="'Discovery our ' + socialItem.type" v-html="require('@/assets/images/social/social_' + socialItem.type + '.svg')"></a>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        socialList: [
          {
            type: 'facebook',
            url: '#'
          },
          {
            type: 'twitter',
            url: '#'
          },
          {
            type: 'instagram',
            url: '#'
          }
        ]
      }
    }
  }
</script>

<style lang="sass">
  .footer__social-list
    display: flex
    justify-content: center

  .footer__social-item
    list-style: none
    svg
      width: 3.4em
      height: 3.4em
    + .footer__social-item
      margin-left: 2em

</style>
