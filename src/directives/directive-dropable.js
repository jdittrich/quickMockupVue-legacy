
import interact from 'interact.js';
import Vue from 'vue';

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
                 //console.log("this",this)
                // console.log("drop",e.target.__vue__)
                console.log("drop",e.target.__vue__.widgetdata)
                //
                // //=get IDs==
                // // what is this elements ID?
                console.log("droppedOnThis:",that)
                // var newParentId = that.widgetdata.l_id;
                //
                // // what is the dropped elements ID?

                //console.log("was dropped",e.target.__vue__.widgetdata.l_id);
                // var newChildId = e.target.__vue__.widgetdata.l_id;

                // find out how the drop el is positioned vs. your el (client rect?)
                // calculate new position

                // trigger position change of new element
                // trigger to move dropped element to this.el
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
