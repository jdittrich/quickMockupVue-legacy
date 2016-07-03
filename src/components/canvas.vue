<template>
    <div class="mockupCanvas" v-dropable="true">
    {{widgetdata | json}}
        <!-- there are several things named "mockupwidget":
        1) the component ("<mockupwidget> and the imported variable of
        the same name in the script part of the component)

        2) the data for the mockupwidgets that are children
        of the current component in the v-for loop and the
        <mockupwidget> component, bound to :widgetdata
        -->
        <mockupwidget
            v-for="mockupwidget in childMockupWidgets"

            :widgetdata="mockupwidget"

            ></mockupwidget>
    </div>
</template>

<script>
import mockupwidget from './mockupWidget.vue'
import draggable from '../directives/directive-draggable.js';
import dropable from '../directives/directive-dropable.js';
import resizable from '../directives/directive-resizable.js';



export default {
    //todo: make it have a public ID and children array, so canvas and mockupwidget expose the same api for moving elements in the data structure

    components:{
        "mockupwidget":mockupwidget
    },
    //not ideal. Draggables are only for <mockupwidget> but I need to call it here since
    //I create a mockupwidget in the canvas' template.
    directives:{
        'draggable':draggable,
        'dropable':dropable,
        'resizable':resizable
    },
    computed:{
			childMockupWidgets(){ //uses ids to get the children's objects as values.
				var that = this;
				var childwidgets = this.allwidgets.filter(function(element, index, array){
					return that.widgetdata.children.includes(element.l_id)
				})
				return childwidgets;
			},
		},
    vuex:{
        getters: {
            allwidgets(state){
                return state.mockupwidgets;
            },
            widgetdata(state){
                var canvasdata = state.mockupwidgets.find(function(element, index, array){
					return element.l_id == 0;
				})
                console.log(canvasdata);
                return canvasdata;
            }
        }
    }
}
</script>

<style>
.mockupCanvas{
    width:1000px;
    height:1000px;
    position: absolute;
    background-color: aqua;
}
</style>
