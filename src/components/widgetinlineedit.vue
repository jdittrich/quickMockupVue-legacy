<template>
    <div>
        <span v-on:dblclick="enterEdit" v-show="!editMode" >Hello!!!{{text}}</span>
        <span v-show="editMode">
            <input type="text" value={{text}}>
            <span v-on:click="exitEdit">OK</span>
        </span>
    </div>
    <!-- spans all over the place? -->
</template>
<script>

export default {
    name:"widgetInlineEdit",
    created(){
        console.log("i was created!",this)
    },
    props: {
        "text":String //could also have a classname with a default
    },
    data(){
        return{
            editMode:false
        }
    },
    template: '',
    methods:{
        enterEdit(){
            this.editMode = true;
        },
        exitEdit(){
            this.editMode = false;
            this.text = this.$el.querySelectorAll("input")[0].value;
        }
    }
}
</script>
<style>
</style>
