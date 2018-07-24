<template>
  <section class="container">
    <page-header />
    <div>
      <login-bar></login-bar>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import PageHeader from '~/components/header';
import LoginBar from '~/components/loginBar.vue';
import { Row, Col } from 'iview';

export default {
  components: {
    AppLogo,
    PageHeader,
    LoginBar,
    [Row.name] : Row,
    [Col.name] : Col
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
