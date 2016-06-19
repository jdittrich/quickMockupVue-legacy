
import interact from 'interact.js';
import Vue from 'vue';

import {changeRect} from '../vuex/actions.js';

//finds out: new child? (or do that in the directive?)
//drop : add to new parent OR move OR just add to parent all the time, no matter if new or old, we could handle this on the data level.


export default Vue.directive('resizable',{
  //we need a two way bind here to change the values from within the directives functions!
  bind: function () {
    // do preparation work
    // e.g. add event listeners or expensive stuff
    // that needs to be run only once
    var that = this;
    var el = that.el;

    //console.log("bound drop");
    interact(el)
        .resizable({
            preserveAspectRatio: false, //make this set-able via some modifier key or so.
            edges: { left: true, right: true, bottom: true, top: true },
            onmove: function(e){
                //e.target.
                var edges = e.edges;

                /*there are two even properties, rect and deltaRect
                rect is the element's dimensions and position against the viewport (without scrolling!)*/

                //calculate new values for the widgets position and dimensions
                var newRect = {
                  top: (parseInt(e.target.style.top)||0) + e.deltaRect.top,
                  left: (parseInt(e.target.style.left)||0) + e.deltaRect.left,
                  width:(parseInt(e.target.style.width)||0) + e.deltaRect.width,
                  height: (parseInt(e.target.style.height)||0) + e.deltaRect.height
                };

                //apply styles in DOM
                e.target.style.top    = newRect.top + "px";
                e.target.style.left   = newRect.left  +"px";
                e.target.style.width  = newRect.width +"px";
                e.target.style.height = newRect.height +"px";

                //apply to database
                console.log(newRect,that.vm.widgetdata.l_id);
                changeRect(that.vm.$store,that.vm.widgetdata.l_id,newRect);

            }
            //onmovestop (or so): trigger change of position, trigger change of size (together as sizechange or so?)!
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
