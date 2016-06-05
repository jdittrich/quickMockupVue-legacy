<template>
    <div class="mockupCanvas">
        <mockupwidget v-for="mockupwidget in childMockupWidgets" v-draggable="true" :widgetdata="mockupwidget" ></mockupwidget>
    </div>
</template>

<script>
import mockupwidget from './mockupWidget.vue'
import draggable from '../directives/directive-draggable.js';


export default {
    //possible TODO: canvas and widget use the same childMockupWidgets and allwidgets methods: Componentize.
    components:{
        "mockupwidget":mockupwidget
    },
    //not ideal. Draggables are only for <mockupwidget> but I need to call it here since
    //I create a mockupwidget in the canvas' template.
    directives:{
        'draggable':draggable
    },
    computed:{
			childMockupWidgets(){ //uses ids to get the children's objects as values.
				var that = this;
				var childwidgets = this.allwidgets.filter(function(element, index, array){
					return that.canvasdata.children.includes(element._id)
				})
				return childwidgets;
			}
		},
    vuex:{
        getters: {
            allwidgets(state){
                return state.mockupwidgets;
            },
            canvasdata(state){
                return state.canvas;
            }
        }
    }
}
</script>

<style>
#mockup{
    width:1000px;
    height:1000px;
    position: absolute;
    background-color: aqua;
}
</style>
