<template>
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-if="item.completed === tag">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ item.title }}</h5>
            <small>{{ item.createAt }}</small>
        </div>
        <p class="mb-1">{{ item.content }}</p>
        <span class="float-right" v-if="item.completed === false">
            <button class="btn btn-primary" v-on:click="onCompleted(item.id)">确认已完成</button>
        </span>
        <div v-else>
            <small>已完成</small>
            <button class="btn btn-primary btn-sm float-right" v-on:click="onBackout(item.id)">撤销</button>
        </div>
    </a>
</template>

<script>
export default {
    name: "TaskItem",
    props:{
        item: Object,
        tag: Boolean
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