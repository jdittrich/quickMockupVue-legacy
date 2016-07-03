<template>
  <ul class="sidebar">
      <li v-for="template in allWidgetTemplates" class="widgetTemplateListContainer">
          <widgettemplate
            class="widgettemplate"
            :templatename="template.name"
            :templatestring="template.templatestring"
            v-draggable="true"
            cloneondrag="true"
          ></widgettemplate>
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
    margin:0;
    padding:0;
}

.widgettemplate{
    position:absolute;
    top:0;
    left:0;
}

.widgetTemplateListContainer{
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid #333;
    border-radius: 3px;
    background: white;
    width: 100%;
    min-height: 3em;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
</style>
