<!--
this is the component for what-the-widget-looks-like, or rather a container for
the partial that does actually define it. The partial is dynamically generated form a string.

It is child of a mockupwidget-Component.

Notes -


TODO:

-->

<template>
  <div class="widgetTemplate">
      <component :is="templatename" :content="content"></component>

     <!-- <partial :name="templatename">
          <p>test</p>
     </partial> -->

			<!-- possibly other stuff, but not yet -->
  </div>
</template>

<script>

import Vue from 'vue'

import widgetinlineedit from './widgetinlineedit.vue'


export default {
    /*the content of a template is dynamically created. Problem: before the component around the content is created, there is no access to the passed data (which contantains the template name and template string) So we create the partial dynamically in the created-hook which happens before the dom rendering and after the data binding.

    DONE: does the partial registration leak? - no, if I require vue in another part of the app and try to call up a partial that was registered here, it is not availiable. However, there might be better ways to do this, since there is a possibily to modularize partials and register them via the partials- object as belonging to the vue instance.
    */

    created:function(){

        // currentComponentName = this.templatename;
        // currentComponentTemplate = this.templatestring;
        // Vue.partial(this.templatename, this.templatestring);
        console.log(this.templatename,this.templatestring);
        Vue.component(this.templatename,{template:this.templatestring, props:{"content":this.content}, components:{"widgetinlineedit":widgetinlineedit}})
        // subcomponent = Vue.extend(this.templatename,{template:this.templatestring, propscomponents:{"widgetinlineedit":widgetinlineedit}})
    },
    props:{
        templatename:String,
        content:{
            type:Object,
            default:function(){
                return {text:"inputText"}
            }
        }
    },
    components:{
        //"widgetinlineedit":widgetinlineedit, //that might be done automatically too, otherwise we have coupling between the usable sub components and this component here.
        //"currentTemplate":{template:that.templatestring}
    },
    computed:{
        templatestring:function(){
            var that = this;
            var template = that.alltemplates.find(function(element, index,array){
                console.log("elementname",element.name,"templatename", that.templatename)
                return element.name === that.templatename;
            });
            console.log("template",template);
            return template.templatestring;
        }
    },
    vuex:{
        getters:{
            alltemplates(state){
                return state.widgetTemplates;
            }
        }
    }
}
</script>

<style>
.widgetTemplate{
    margin-left:1em;
}
</style>
