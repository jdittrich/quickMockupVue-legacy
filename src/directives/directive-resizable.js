import Vue from 'vue';

import {changeRect} from '../vuex/actions.js';

import jquery from 'jquery';
import jqueryui from '../libs/jquery-ui.js';

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

    jquery(el).resizable({
        handles: "n, e, s, w",
        stop:function(event,ui){
          var newrect={};
          var widget_l_id = that.vm.widgetdata.l_id;

          newrect.width = ui.size.width;
          newrect.height = ui.size.height;

          changeRect(
            that.vm.$store,
            widget_l_id,
            newrect
          );

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
    jquery(this.el).resizable("destroy");
  }
});
