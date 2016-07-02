//only drags
import interact from 'interact.js';
import Vue from 'vue';

import jquery from 'jquery';
import jqueryui from '../libs/jquery-ui.js';

export default Vue.directive('draggable',{
  //we need a two way bind here to change the values from within the directives functions!
  twoWay:false, //? <-> or better just dispatch?
  params: ['cloneondrag'],
  bind: function () {
    // do preparation work
    // e.g. add event listeners or expensive stuff
    // that needs to be run only once
    var that = this;
    var el = that.el;
    var shallClone = this.params.cloneondrag; //(that.params.cloneondrag === true) ? true : false;
    console.log("shallcxlone",shallClone);



    el.style.position = "absolute";

    jquery(el).draggable({
        helper: (shallClone)? "clone":"original",
    }
    );
    return;
  },
  update: function (newValue, oldValue) {

    // do something based on the updated value
    // this will also be called for the initial value
  },
  unbind: function () {
    // do clean up work
    // e.g. remove event listeners added in bind()
    jquery(this.el).draggable( "destroy" );
  }
});
