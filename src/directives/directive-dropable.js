
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

    //console.log("bound drop");
    interact(el)
        .dropzone({
            ondrop: function (e) {
                console.log(e);
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
