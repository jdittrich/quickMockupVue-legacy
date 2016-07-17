<template>
    <div class="mockupWrapper">
        <mockupcanvas v-dropable="true"></mockupcanvas>
    </div>
</template>

<script>
import mockupcanvas from './canvas.vue';
import dropable from '../directives/directive-dropable.js'

//import mockupwidget from './mockupWidget.vue'
// braucht mixin drop für children

//TODO: I suppose we can clean this element up.

//TODO: seemingly, the dropable-directive of canvas has:
// el: mockupcanvas
// but vm.$el : mockupwrapper.
// Y, but Y?


export default {
    directives:{
        'dropable':dropable
    },
    components: {
        'mockupcanvas':mockupcanvas,
        //'mockupwidget':mockupwidget
    },
    // vuex:{
    //     getters: {
    //         canvasdata(state){
    //             var canvas = state.mockupwidgets.find(function(element, index, array){
    //                 return element.l_id == 0; //deliberately no === so number and string work
    //             });
    //             return canvas;
    //         }
    //     }
    // }

}
</script>

<style>
.mockupWrapper{
  overflow: scroll;
  margin: 0px;
  /*flex: 1 1 100%;*/
  padding: 0px;
  position: absolute;
  background: lime;
  width:calc(100% - 200px);
  height: 100%;
  top:0;
  left:200px;
  z-index:-100;
}
</style>
