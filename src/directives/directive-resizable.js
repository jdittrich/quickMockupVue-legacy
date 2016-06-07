
import interact from 'interact.js';
import Vue from 'vue';

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
                rect is the element's dimensions and position against the viewport (without scrolling!)
                deltaRect
                */
                // console.log("resize",parseInt(e.rect.width),parseInt(e.rect.height),parseInt(e.rect.top),parseInt(e.rect.right),parseInt(e.rect.bottom) , parseInt(e.rect.left), "diff",parseInt(e.deltaRect.width),parseInt(e.deltaRect.height),parseInt(e.deltaRect.top),parseInt(e.deltaRect.right),parseInt(e.deltaRect.bottom),parseInt(e.deltaRect.left));
                console.log("w",e.target.style.width,"r",e.deltaRect.right);
                //debugger;
                e.target.style.top    = (parseInt(e.target.style.top)||0) + e.deltaRect.top + "px";
                e.target.style.left   = (parseInt(e.target.style.left)||0) + e.deltaRect.left  +"px";
                e.target.style.width  = (parseInt(e.target.style.width)||0) + e.deltaRect.width +"px";
                e.target.style.height = (parseInt(e.target.style.height)||0) + e.deltaRect.height +"px";

                // if(edges.top===true){
                //     //change top,Math.parseInt(
                //     //change height
                // }
                //
                // if(edges.right===true){
                //     //keep left,
                //     //change width
                // }
                //
                // if(edges.buttom===true){
                //     //keep top,
                //     //change height
                // }
                //
                // if(edges.left===true){
                //
                //     //change left,
                //     //change width
                // }


                // e.target.style.left=
                // e.target.style.top =
                // e.target.style.width=
                // e.target.style.height=
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
});
