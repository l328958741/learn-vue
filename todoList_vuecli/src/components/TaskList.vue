<template>
    <div class="col-md-6">
        <div class="list-group">
            <TaskItem v-for="item in items" v-bind:item="item" v-on:click-completed="onCompleted" v-on:click-back="onBackout" v-bind:tag="tag"></TaskItem>
        </div>
    </div>
</template>

<script>
import TaskItem from "./TaskItem"

export default {
    name: "TaskList",
    props:{
        items: Array,
        tag: Boolean
    },
    components:{
        TaskItem
    },
    methods:{
        onCompleted(id){
            this.$emit('click-completed', id);
        },
        onBackout(id){
            this.$emit('click-back', id);
        }
    }
    
}
</script>