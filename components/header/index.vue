<template>
  <section class="page-header">
    <div class="banner"></div>
    <div class="nav-box">
      <div class="grid">
        <div class="logo"></div>
        <ul class="nav">
          <li><a href="javascript:;">首页</a></li>
          <li><a href="javascript:;">米其林预定</a></li>
          <li><a href="javascript:;">自由行推荐</a></li>
          <li><a href="javascript:;">包车/送机</a></li>
          <li><a href="javascript:;">目的地</a></li>
          <li><a href="javascript:;">了解日本</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>

<style>
  .page-header {
    width : 100%;
  } 
  .page-header .banner {
    background: url("~/assets/images/banner.png") no-repeat;
    height : 74px;
  }
  .page-header .nav-box { 
    background-color : #dd1415; 
  }
  .page-header .grid {
    padding : 0 100px;
    position: relative;
  }
  .page-header .logo {
    width : 380px;
    height: 120px;
    position: absolute;
    left : 100px;
    bottom : -35px;
    background: url("~/assets/images/logo.png") no-repeat;
  }
  
  .page-header  .nav {
    margin-left : 390px;
    height : 58px;
    line-height: 58px;
    font-size : 16px;
    text-align: right;
    color : #fff;
  }

  .page-header  .nav li {
    display: inline-block;
    margin: 0 20px;
  }

  .page-header .nav li a {
    color : #fff;
    display: block;
    height: 100%;
  }
</style>


