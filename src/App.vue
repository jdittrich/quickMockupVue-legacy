<template>
  <div id="app">
      <sidebar></sidebar>
      <mockupwrapper></mockupwrapper>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import sidebar from './components/elementTemplatesSidebar.vue'
import mockupwrapper from './components/mockupWrapper.vue'

export default {
    components:{
        'sidebar':sidebar,
        'mockupwrapper':mockupwrapper
    },
    data () {
        return {
            // note: changing this line won't causes changes
            // with hot-reload because the reloaded component
            // preserves its current state and we are modifying
            // its initial state.
            msg: 'Hello Vue!'
        }
    }
}
</script>

<style>
html, body, #app  {
  margin:0;
  padding:0
}


</style>
