<template>
<div class="mockupwidget">
    <widgettemplate :templatestring="template.template" :templatename="template.name"></widgettemplate>
    <div class="widgetChildren">
        <!-- recursive componenting: -->
        <mockupwidget v-for="mockupwidget in childElements" :widgetdata="mockupwidget"></mockupwidget>
    </div>
</div>
</template>

<script> 
// braucht mixin drop für children  
export default {
    name:"mockupwidget",
    props:{
        widgetdata:Object
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

</style>
