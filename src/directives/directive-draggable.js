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
    interact(that.el)
      .draggable({
        autoscroll:true,
        onmove:function(e){
            //TODO: fix: which element should be controled? target, Interactable etc
            var target = e.interactable;
            var x = (parseFloat(target.getAttribute('data-xpos')) || 0) + event.dx,
            var y = (parseFloat(target.getAttribute('data-ypos')) || 0) + event.dy;
            
            target.style.top = y+"px";
            target.style.left = x+"px";
            
            target.setAttribute("data-xpos",x);
            target.setAttribute("data-ypos",x);
        },
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
})