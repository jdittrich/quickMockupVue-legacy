<template>
    <div class="mockupWrapper">
        <mockupcanvas v-dropable="true"></mockupcanvas>
    </div>
</template>

<script>
import mockupcanvas from './canvas.vue';
import dropable from '../directives/directive-dropable.js'
// braucht mixin drop für children

export default {
    directives:{
        'dropable':dropable
    },
    components: {
        'mockupcanvas':mockupcanvas
    }
}
</script>

<style>
.mockupWrapper{
  overflow: scroll;
  margin: 0px;
  flex: 1 1 100%;
  padding: 0px;
  position: absolute;
  background: lime;
  width:100%;
  height: 100%;
  top:0;
  left:200px;
}
</style>
