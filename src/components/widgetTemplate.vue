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
      :lid="widgetdata.l_id"></component>
  </div>
</template>

<script>

import Vue from 'vue';

import widgetinlineedit from './widgetinlineedit.vue';
import widgetlist from './widgetlist.vue';
import widgetToggleState from './widgetToggleState.vue';
import {alltemplates,allwidgets} from '../vuex/getters.js';
import {helperIdToObject} from '../vuex/store.js';

export default {
    /*the content of a template is dynamically created. Problem: before the component around the content is created, there is no access to the passed data (which contantains the template name and template string) So we create the component  dynamically in the created-hook which happens before the dom rendering and after the data bi   nding.*/
    created:function(){
        //dynamically create component defining the look of the widget
        var that = this;
        Vue.component(this.templatename, //needs both since mere templates in sidebar don't have lid
            {
                template:this.template.templatestring,
                props:{ //that must be improved, it must be added in the adding mutation and here and at the props of the template and in mockupwidget's mockuptemplate template...
                    "lid":String,
                },
                components:{
                    "widgetinlineedit":widgetinlineedit,
                    "widgetlist":widgetlist,
                    "widgettogglestate":widgetToggleState,
                }, //here we need *all* components since we don't know (at least with the current infrastructure) which will be needed
                computed:{
                    cssstyles(){
                        return that.template.cssstyles;
                    },
                    highlighted(){
                        console.log("highlighted", that);
                        return that.widgetdata.highlighted;
                    },
                    content(){
                        return that.widgetdata.content;
                    }
                },
            }
        );//COMPENENT END

    },
    props:{
        lid:String,
        templatename:String
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
            return template; //.templatestring;
        },
        widgetdata(){
            var widgetdataObject = helperIdToObject(this.allwidgets,this.lid);
            return widgetdataObject;
        },
    },
    vuex:{
        getters:{
            alltemplates:alltemplates,
            allwidgets:allwidgets
        }
    }
};
</script>

<style>
.widgetTemplate{
    margin-left:1em;
}
</style>
