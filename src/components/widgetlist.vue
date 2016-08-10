<template>
    <div>
        <ul>
            <slot>slot!</slot>
        </ul>
        <button v-on:click="addButtonHandler">+</button>
    <div>
</template>
<script>

import {addWidgetArrayItem as addArrayItem} from '../vuex/actions.js'



//should import inline edit

export default {
    name:"widgetlist",
    created(){},
    compiled(){  },
    props: {
        "list": Array, //should be array, but can be undefined, too, on creation.
    },
    data(){
        return{
            editMode:false
        }
    },
    methods:{
        addButtonHandler:function(event){
            this.addArrayItem(this.list);
        },
        enterEdit(){
            this.editMode = true;
        },
        exitEdit(){
            this.editMode = false;
        }
    },
    vuex:{
        getters:{},
        actions:{
            addArrayItem:addArrayItem,
        }
    }
}
</script>
<style>
</style>
