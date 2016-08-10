<!--
this is the component for what-the-widget-looks-like, or rather a container for
the component that does actually does this.-->

<template>
   <!-- this on one hand the structure of the template suggests we could merge it with the mockupWidget. On the other hand:
   * it wraps the slightly dirty architecture of it
   * reuse
   reuse can possibly be also achived using a mixin, that would need investigation
   -->
  <div class="widgetTemplate">
      <component

      :is="templatename"
      :content="content"
      :cssstyles="template.cssstyles"></component>
  </div>
</template>

<script>

import Vue from 'vue'

import widgetinlineedit from './widgetinlineedit.vue'
import widgetlist from './widgetlist.vue'
import {alltemplates} from '../vuex/getters.js'

export default {
    /*the content of a template is dynamically created. Problem: before the component around the content is created, there is no access to the passed data (which contantains the template name and template string) So we create the component  dynamically in the created-hook which happens before the dom rendering and after the data bi   nding.*/


    created:function(){
        //dynamically create component defining the look of the widget
        Vue.component(this.templatename,
            {
                template:this.template.templatestring,
                props:{
                    "content":Object,
                    "cssstyles":Object
                },
                components:{
                    "widgetinlineedit":widgetinlineedit,
                    "widgetlist":widgetlist
                } //here we need *all* components since we don't know (at least with the current infrastructure) which will be needed
            }
        );//COMPENENT END

    },
    props:{
        templatename:String,
        content:{
            type:Object,
            default:function(){
                return {text:"inputText"}
            }
        },
    },
    computed:{
        template:function(){
            //compute the template string (HTML-like) by finding among all templates that one that has the same name as the known templatename (the name of the template aka the type of widget is saved with every widget that is created on the canvas);
            var that = this;
            var template = that.alltemplates.find(function(element, index,array){
                console.log("elementname",element.name,"templatename", that.templatename);
                return element.name === that.templatename;
            });
            console.log("template",template);
            return template //.templatestring;
        }
    },
    vuex:{
        getters:{
            alltemplates:alltemplates
        }
    }
}
</script>

<style>
.widgetTemplate{
    margin-left:1em;
}
</style>
