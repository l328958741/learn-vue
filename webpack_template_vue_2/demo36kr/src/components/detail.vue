<template>
  <div>
      <Header></Header>
      详情
      <Footer></Footer>
  </div>
</template>
<script>
import Header from './common/header'
import Footer from './common/footer'

export default {
    name: 'detail',
    components:{Header, Footer}
}
</script>
