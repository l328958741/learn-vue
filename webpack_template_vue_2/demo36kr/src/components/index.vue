<template>
  <div>
      <Header></Header>
          <div class="index_36kr">
                <div class="pagewrap">
                    <div class="mainlib_flex_wapper">
                        <IndexMain/>
                        <IndexItem/>
                    </div>
                </div>
          </div>
      <Footer></Footer>
  </div>
</template>
<script>
import Header from './common/header'
import Footer from './common/footer'
import IndexMain from './index_main'
import IndexItem from './index_side'

export default {
    name: 'index',
    components:{Header, Footer, IndexMain, IndexItem}
}
</script>
