<template>
    <div id="mockupWrapper">
        <mockupcanvas></mockupcanvas>
    </div>
</template>

<script> 
import mockupcanvas from './canvas.vue';
// braucht mixin drop für children  

export default {
    components: {
        'mockupcanvas':mockupcanvas
    }
}
</script>

<style>
.mockupWrapper{
  overflow: scroll;
  margin: 0px;
  padding: 0px;
  flex: 1 1 100%;
  position: relative;
  background: lime;
}
</style>
