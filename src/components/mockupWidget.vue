<template>
<div class="mockupwidget">
    <!-- <widgettemplate :templatestring="template.template" :templatename="template.name"></widgettemplate>-->
    {{widgetdata | json}} größer als 0? {{childMockupWidgets.length}}
    <div class="widgetChildren">
        <!-- recursive componenting. The v-if is really needed, otherwise: stackoverflow (literally, not that website) -->

        <!-- TODO: I assume I should switch to single props instead of passing a whole object"-->

        <mockupwidget v-if="childMockupWidgets.length > 0" v-for="mockupwidget in childMockupWidgets" :widgetdata="mockupwidget"></mockupwidget>
    </div>
</div>
</template>

<script>
// braucht mixin drop für children
import widgettemplate from './widgetTemplate.vue';

export default {
    name:"mockupwidget",
    props:{
        widgetdata:Object
    },
    components:{
        widgettemplate:widgettemplate
    },
    computed:{
      childMockupWidgets(){ //uses ids to get the children's objects as values.
        var that = this;
        var childwidgets = this.allwidgets.filter(function(element, index, array){
          console.log("childwidgets", that)
          return that.widgetdata.children.includes(element._id)
        });
        return childwidgets;
      },

    },
    vuex:{
        getters: {
            allwidgets(state){
                console.log(state.mockupwidgets)
                return state.mockupwidgets;
            },
        }
    }
}
</script>

<style>

</style>
