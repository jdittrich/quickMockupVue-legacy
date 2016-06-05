//only drags
import interact from 'interact.js';
import Vue from 'vue';


export default Vue.directive('draggable',{
  //we need a two way bind here to change the values from within the directives functions!
  twoWay:true, //? <-> or better just dispatch?
  bind: function () {
    // do preparation work
    // e.g. add event listeners or expensive stuff
    // that needs to be run only once
    var that = this;
    var el = that.el;
    console.log("that", that);

    el.style.position = "absolute";

    interact(el)
      .draggable({
        autoscroll:true,
        onmove:function(e){
            //TODO: fix: which element should be controled? target, Interactable etc
            console.log("event:",e);
            var target = e.target;
            var x = (parseFloat(target.getAttribute('data-xpos')) || 0) + e.dx;
            var y = (parseFloat(target.getAttribute('data-ypos')) || 0) + e.dy;
            console.log("x,y,",x,"/",y);
            target.style.top = y+"px";
            target.style.left = x+"px";

            target.setAttribute("data-xpos",x);
            target.setAttribute("data-ypos",y);
        },
        onend:function(){
            
        }
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

function dragmoveListener(){


};


function dragendListener(){


};
