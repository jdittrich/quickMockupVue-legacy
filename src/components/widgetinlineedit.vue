<template>
    <div>
        <span v-on:dblclick="enterEdit" v-show="!editMode" >Hello:{{content | json}}</span>
        <span v-show="editMode">
            <input type="text" value="{{content.text}}">
            <button v-on:click="exitEdit">OK</button>
            {{content.text}}{{text}}
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
        "content":Object,
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
