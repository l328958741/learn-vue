<template>
<div>
    <ul>
        <li v-for="(item,index) in items" :key="index">{{ item }}</li>
    </ul>
</div>
</template>

<script>
import ListItem from './list_item'
/*
//局部使用axios
import axios from 'axios'
*/

export default {
    data () {
        return {
            // items: this.$store.state.arr,
            // state: this.$store.state
            
        }
    },
    components:{
        ListItem
    },
    async mounted(){
        // this.$store.dispatch('loadArr');
    },
    computed:{
        async items(){
            let res = await this.$store.getters.arr;
            return res;
        }
    },
    methods:{
        plusOne(){
            this.count++;
        },
        minOne(){
            this.count--;
        }
    }
}
</script>
