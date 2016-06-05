<template>
  <div class="sidebar">
      <widgettemplate v-for="template in allWidgetTemplates" :templatename="template.name"></widgettemplate>
  </div>
</template>

<script>

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
