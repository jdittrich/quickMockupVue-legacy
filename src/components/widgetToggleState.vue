<template>
    <div>
        STATE:{{state}}<input type="checkbox" v-on:click="switchState" {{state ? checked : }}> <!-- if state is true, write "checked", otherwise write nothing-->
    <div>
</template>
<script>

import toggleWidgetState from '../vuex/actions.js';

//should import inline edit

export default {
    name:"widgettogglestate",
    props:{
        "state":Object,
        "list":Array,
    },
    methods:{
        switchState:function(event){
            this.toggleWidgetState(this.state, this.list);
        }
    },
    vuex:{
        getters:{},
        actions:{
            toggleWidgetState:function(store,state,array){
                store.dispatch("TOGGLEWIDGETSTATE",state,array);
            },
        }
    }
};
</script>
<style>
</style>
