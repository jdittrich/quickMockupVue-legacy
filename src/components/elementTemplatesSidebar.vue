<template>
  <div class="sidebar">
      <widgettemplate v-for="template in allWidgetTemplates" :templatestring="template.template" :templatename="template.name"></widgettemplate>
  </div>
</template>

<script>
//generate the dynamic templates here.
//create mixin elsewhere
//mixin the mixin

import widgettemplate from './widgetTemplate.vue'


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
}
</style>
