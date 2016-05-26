<template>
    <div id="mockupWrapper">
        <div id="mockupCanvas">
        {{allelements|json}}
        </div>
    </div>
</template>

<script>
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
