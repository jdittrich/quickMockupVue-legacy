<template>
  <ul class="sidebar">
      <li v-for="template in allWidgetTemplates" class="widgetTemplateListContainer">
          <widgettemplate class="widgettemplate" v-for="template in allWidgetTemplates" :templatename="template.name" v-draggable="true"></widgettemplate>
      <li>
  </ul>
</template>

<script>

import widgettemplate from './widgetTemplate.vue'
import draggable from '../directives/directive-draggable.js';


export default {
    components:{
        widgettemplate:widgettemplate
    },
    vuex:{
        getters: {
            allWidgetTemplates(state){
                return state.widgetTemplates;
            }
        }
    }
}
</script>
<style>
.sidebar{
    display: block;
    width: 200px;
    height: 100%;
    background-color: #AADDAA;
    position: absolute;
    top:0;
    left:0;
}

.widgettemplate{
    position:absolute;
    top:0;
    left:0;
}

.widgetTemplateListContainer{
    position: relative;
}
</style>
