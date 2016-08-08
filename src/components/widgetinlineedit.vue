<template>
    <div>
        <span v-on:dblclick="enterEdit" v-show="!editMode" >{{content.text}}bdsfg</span>
        <span v-show="editMode">
            <input type="text" v-on:keyup.delete.stop="" value="{{content.text}}">
            <button v-on:click="exitEdit">OK</button>
            {{content.text}}
        </span>
    </div>
    <!-- spans all over the place? -->
</template>
<script>

import changeWidgetText from '../vuex/actions.js'

export default {
    name:"widgetinlineedit",
    created(){

    },
    compiled(){

    },
    props: {
        //"text":null,//text should be string, but if it does not exists yet, it might be
        "content":Object //should evaluate to: content needs a text object
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

            var text = this.$el.querySelectorAll("input")[0].value;

            console.log("exitedit", this.content, text);

            this.changeWidgetText(this.content,text);
        }
    },
    vuex:{
        getters:{},
        actions:{
            changeWidgetText:function(store, content, text){
                store.dispatch("CHANGEWIDGETTEXT",content, text);
            }
        }
    }
}
</script>
<style>
</style>
