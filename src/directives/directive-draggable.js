//only drags
import interact from 'interact.js';
import Vue from 'vue';


export default Vue.directive('draggable',{
  //we need a two way bind here to change the values from within the directives functions!
  twoWay:true, //? <-> or better just dispatch?
  params: ['cloneondrag'],
  bind: function () {
    // do preparation work
    // e.g. add event listeners or expensive stuff
    // that needs to be run only once
    var that = this;
    var el = that.el;
    var shallClone = this.params.cloneondrag; //(that.params.cloneondrag === true) ? true : false;



    el.style.position = "absolute";


    interact(el)
      .on("down", function(event){
        console.log("down", shallClone,that);
        var pos = event.target.getBoundingClientRect();
        var interaction = event.interaction;
        var interactable = event.interactable;

        var startposEvt = {x:event.clientX, y:event.clientY};

        interactable.startposEvt = startposEvt;
        interactable.startposElem = {top:pos.top,left:pos.left};

        //add data to transport
        //TODO: get data on object
        interactable.model = {
          'l_id': (that.vm.widgetdata && that.vm.widgetdata.l_id)?that.vm.widgetdata.l_id:undefined,
          'templatename' : that.vm.templatename,
          'templatestring': that.vm.templatestring
        };

        if(shallClone && !interaction.interacting()){

          var clonedElement = event.target.cloneNode(true);

          clonedElement.style.position = "absolute";
      		clonedElement.style.top = pos.top+"px";
      		clonedElement.style.left = pos.left+"px";

          document.body.appendChild(clonedElement);//TODO Minor: should be configurable
          console.log("downstarted clone");
          interaction.start({ name: 'drag' },
            event.interactable,
            clonedElement);
        } else if(!interaction.interacting()){
          console.log("downstarted normal");
          interaction.start({ name: 'drag' },
            event.interactable,
            event.target);

        }

    		//ADD DATA
        // event.interactable.model = "bla";
      })
      .draggable({
        manualStart:true,
        autoscroll:true,
        onmove:function(e){
            //TODO: fix: which element should be controled? target, Interactable etc
            var interaction = e.interaction;
        		var target = e.target;
        		var startposEvt = e.interactable.startposEvt;
        		var startposElem = e.interactable.startposElem;

            target.style.top = startposElem.top + (e.clientY-startposEvt.y)+"px";
        		target.style.left = startposElem.left + (e.clientX-startposEvt.x)+"px";
        },
        onend: function (event) {
          if(shallClone){
    			   event.target.remove();
          }
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
