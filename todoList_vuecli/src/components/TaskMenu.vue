<template>
    <div class="col-md-1">
        <div class="btn-group-vertical">
            <button type="button" class="btn btn-secondary btn-sm" v-for="item in items" v-on:click="onSelected(item.tag)">{{ item.txt }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskMenu",
    props: {
        items: Array
    },
    methods:{
        onSelected(tag){
            this.$emit('click-select',tag);
        }
    }
}
</script>