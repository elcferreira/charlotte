<template>
  <footer class="page__footer">
     <footer-social></footer-social>
     <span class="footer__copyright tac c__c1c1c1 fz__12">{{copyright}}</span>
  </footer>
</template>

<script>
  import FooterSocial from '@/components/footer/FooterSocial.vue'
  export default {
    data () {
      return {
        copyright: '© 2004-2017 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202'
      }
    },
    components: {
      FooterSocial
    }
  }
</script>

<style lang="sass">
  .footer__copyright
    padding: 2.7em 1.667em 3.667em
    display: block

</style>
