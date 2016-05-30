//only drags
import interact from 'interact.js'
import vue from 'vue'


Vue.directive('draggable', {
  //we need a two way bind here to change the values from within the directives functions!
  twoWay:true, //? <-> or better just dispatch?
  bind: function () {
    // do preparation work
    // e.g. add event listeners or expensive stuff
    // that needs to be run only once
    var that = this;
    var el = that.el;
    interact(el)
      .draggable({
        autoscroll:true,
        onmove:dragmoveListener,
        onend:dragendListener,
      .on('eventname', function (event) {
      });
  },
  update: function (newValue, oldValue) {

    // do something based on the updated value
    // this will also be called for the initial value
  },
  unbind: function () {
    // do clean up work
    // e.g. remove event listeners added in bind()
    interact(this.el).unset();
  }
});

function dragmoveListener(){
  

}


function dragendListener(){
  

}