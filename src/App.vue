<template>
  <div id="app">
    <TopNavigation/>
    <div class="banner">
      <img src="../static/images/basket-table.jpg">
    </div>
    <div class="content-wrapper">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    TopNavigation
  }
}
</script>
<style> @import './assets/styles.css'; </style>
