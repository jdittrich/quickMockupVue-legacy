<template>
  <div class="widgetTemplate">
      <partial :name="templatename"></partial>
			<!-- possibly other stuff, but not yet -->
  </div>
</template>

<script>
import Vue from 'vue'

//needs drag template

export default {
    /*the content of a template is dynamically created. Problem: before the component around the content is created, there is no access to the passed data (which contantains the template name and template string) So we create the partial dynamically in the created-hook which happens before the dom rendering and after the data binding. 
    
    TODO: does the partial registration leak?
    */
    
    created:function(){
        console.log("created!", this.templatename,this.templatestring);
        Vue.partial(this.templatename,this.templatestring);
    },
    props:{
        templatename:String,
        templatestring:String
    },
}
</script>

<style>
#sidebar{
    display: block;
    width: 200px;
    height: 100%;
    background-color: #AADDAA;
}
</style>
