<template>
<ul>
    <span>{{ state.count }}</span>
    <span>选中{{ count }}件</span>
    <ListItem v-for="item in items" :key="item.id" :item="item" :plus="plusOne" :min="minOne"></ListItem>
</ul>
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
            items: [],
            count: 0,
            state: this.$store.state
        }
    },
    components:{
        ListItem
    },
    mounted(){
        
        this.axios.get('http://localhost:8081/list').then(res => {
            this.items = res.data;
        }, res => {
            alert('请求失败')
        })

        /*
        //通过fetch拿数据，注意json()返回的仍是promise对象
        let res = await (await fetch('http://localhost:8081/list')).json();
        this.items = res;
        console.log(res);
        */
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
