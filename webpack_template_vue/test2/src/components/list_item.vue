<template>
  <li>
      <h4><input type="checkbox" v-model="checked">{{ item.name }}</h4>
      <span>￥{{ item.price }}</span>
      <span>月售{{ item.sales }}件</span>
      <input type="button" value="+1" @click="fnAdd">
      <input type="button" value="-1" @click="fnMin">
  </li>
</template>

<script>
export default {
    data () {
        return {
            item:'',
            checked:false
        }
    },
    mounted(){
       this.item = this.$attrs['item'];
    },
    methods:{
        fnAdd(){
            this.$store.dispatch('actaddOne')
        },
        fnMin(){
            this.$store.dispatch('actminOne')
        }
    },
    watch:{
        checked(){
            if(this.checked){
                this.$attrs.plus();
            }else{
                this.$attrs.min();
            }
        }
    }
}
</script>
