<template>
<div class="mockupwidget"
    v-bind:style="{
        width: widgetdata.rect.width + 'px',
        height:widgetdata.rect.height+'px',
        left:widgetdata.rect.left+'px',
        top:widgetdata.rect.top+'px'
        }"

if(this)
v-draggable="true"
v-dropable="true"
v-resizable="true"

>
<!-- todo -->
<!-- I assumed that directives could only be set from the context that says: put component here. That was wrong -->
    <widgettemplate :templatename="widgetdata.widgetType"></widgettemplate>
    {{widgetdata | json}} größer als 0? {{childMockupWidgets.length}}

    {{widgetdata.rect.width+'px'}}{{widgetdata.rect.height+'px'}}
    <div class="widgetChildren">


        <!-- there are several things named "mockupwidget":
        1) the component ("<mockupwidget> and the imported variable of
        the same name in the script part of the component)

        2) the data for the mockupwidgets that are children
        of the current component in the v-for loop and the
        <mockupwidget> component, bound to :widgetdata
        -->
        <!-- recursive componenting. The v-if is really needed, otherwise: stackoverflow (literally, not that website) -->

        <mockupwidget
            v-if="childMockupWidgets.length > 0"
            v-for="mockupwidget in childMockupWidgets"



            :widgetdata="mockupwidget"
            ></mockupwidget>
    </div>
</div>
</template>

<script>
// braucht mixin drop für children
import widgettemplate from './widgetTemplate.vue';
import draggable from '../directives/directive-draggable.js';
import dropable from '../directives/directive-dropable.js';
import resizable from '../directives/directive-resizable.js';

export default {
    name:"mockupwidget",
    props:{
        widgetdata:Object
    },
    directives:{
        'draggable':draggable,
        'dropable':dropable,
        'resizable':resizable
    },
    components:{
        widgettemplate:widgettemplate
    },
    computed:{
      childMockupWidgets(){ //uses ids to get the children's objects as values.
        //console.log("this, this.wd",this,this.widgetdata)
        var that = this;
        var childwidgets = this.allwidgets.filter(function(element, index, array){
          //console.log("childwidgets", that)
          return that.widgetdata.children.includes(element.l_id)
        });
        return childwidgets;
      }
    },
    vuex:{
        getters: {
            allwidgets(state){
                return state.mockupwidgets;
            }
        }
    }
}
</script>

<style>
.mockupwidget{
    outline:1px solid rgba(0,0,0,0.5);
    /*width:20em;*/
}
</style>
