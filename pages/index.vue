<template>
  <section class="container">
    <page-header />
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import PageHeader from '~/components/header';
export default {
  components: {
    AppLogo,
    PageHeader
  },
  data(){
    return {
      value : ''
    };
  }
}
</script>

<style src="~/assets/css/common.scss">

</style>
