<template>
  <div id="app">
    <router-link to="Article">文章</router-link>
    <router-link to="User">用户</router-link>
    <router-link to="List">商品列表</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
