<template>
    <div>
        <span v-on:dblclick="enterEdit" v-show="!editMode" >{{text}}bdsfg</span>
        <span v-show="editMode">
            <input type="text" v-on:keyup.delete.stop="" value="{{text}}">
            <button v-on:click="exitEdit">OK</button>
            {{text}}
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
    compiled(){
        var content = this.$el.getAttribute("data-defaultcontent");
    },
    props: {
        "text":null,//text should be string, but if it does not exists yet, it might be
        "content":Object
    },
    methods:{

    },
    data(){
        return{
            editMode:false
        }
    },
    methods:{
        enterEdit(){
            this.editMode = true;
        },
        exitEdit(){
            this.editMode = false;
            this.text = this.$el.querySelectorAll("input")[0].value;
        }
    },
    vuex:{
        getters:{},
        actions:{
            //TODO: change text actions
        }
    }
}
</script>
<style>
</style>
