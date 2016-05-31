<template>
    <div class="mockupCanvas">
        <mockupwidget v-for="mockupwidget in childMockupWidgets" :widgetdata="mockupwidget"></mockupwidget>
    </div>
</template>

<script> 
import mockupwidget from './mockupWidget.vue'
// braucht mixin drop für children  

export default {
    //possible TODO: canvas and widget use the same childMockupWidgets and allwidgets methods: Componentize.
    components:{
        "mockupwidget":mockupwidget
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
