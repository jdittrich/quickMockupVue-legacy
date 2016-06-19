
import interact from 'interact.js';
import Vue from 'vue';

import {moveWidget} from '../vuex/actions.js';

//finds out: new child? (or do that in the directive?)
//drop : add to new parent OR move OR just add to parent all the time, no matter if new or old, we could handle this on the data level.


export default Vue.directive('dropable',{
  //we need a two way bind here to change the values from within the directives functions!
  bind: function () {
    // do preparation work
    // e.g. add event listeners or expensive stuff
    // that needs to be run only once
    var that = this;
    var el = that.el;

    interact(el)
        .dropzone({
            ondrop: function (e) {

                console.log("droppedOnThis:",e,e.relatedTarget.__vue__.widgetdata.l_id)
                console.log("dropped on",e.target.__vue__.widgetdata.l_id)

                var targetId = e.target.__vue__.widgetdata.l_id
                var droppedId = e.relatedTarget.__vue__.widgetdata.l_id

                // find out how the drop el is positioned vs. your el (client rect?)
                var targetRect = e.target.getClientRects()[0];
                var droppedRect = e.relatedTarget.getClientRects()[0];

                var droppedNewPos = {
                    top: droppedRect.top - targetRect.top,
                    left: droppedRect.left - targetRect.left
                };

                //create a new element if dropped from sidebar
                //console.log("MW",moveWidget);
                //change parent if dropped from another element
                moveWidget(that.vm.$store, droppedId,targetId); //this.vm.$store is not ideal (http://vuex.vuejs.org/en/actions.html)

                //changeRect(droppedId,droppedNewPos);


            },
            //accept:".mockupwidget", //not good. This is paralell DOM (CSS selector)/vue (where it should be configured)
            overlap: 1,
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
