<template>
    <div id="mockupWrapper">
        <div id="mockupCanvas" >
        
        </div>
    </div>
</template>

<script> 

// braucht mixin drop für children  

export default {
    vuex:{
        getters: {
            allelements(state){
            return state.elements;
            }
        }
    }
}
</script>

<style>
#mockup{
  overflow: scroll;
  margin: 0px;
  padding: 0px;
  flex: 1 1 100%;
  position: relative;
  background: lime;
  overflow: scroll;
}
</style>
