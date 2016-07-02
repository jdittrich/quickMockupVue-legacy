
import interact from 'interact.js';
import Vue from 'vue';

import jquery from 'jquery';
import jqueryui from '../libs/jquery-ui.js';

import {moveWidget,changeRect,addElement} from '../vuex/actions.js';

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

    jquery(el).droppable({
        greedy:true, //you can only attach it to one element, otherwise every nested dropable recieves
        drop:function(event,ui){
            console.log(event,ui);

            var droppedOnThis = event.target;
            var draggable = ui.draggable[0];
            //needs target id
            //needs own id
            var draggedRect = draggable.getClientRects()[0]; //!! helper
            var droppedRect = droppedOnThis.getClientRects()[0];

            // var droppedNewPos = {
            //     top: droppedRect.top - draggedRect.top,
            //     left: droppedRect.left - draggedRect.left
            // };
            var droppedNewPos = {
                top:draggedRect.top - droppedRect.top,
                left: draggedRect.left- droppedRect.left
            };


            //all element on canvas have l_ids, so this will work
            var droppedOnThis_l_id = droppedOnThis.__vue__.widgetdata.l_id;


            //but not all dragged have l_ids (e.g. elements to be created do not), so we need to check.
            var draggable_l_id = null;

            var draggableVue= draggable.__vue__;

            if(draggableVue.widgetdata && draggableVue.widgetdata.l_id){
              draggable_l_id = draggableVue.widgetdata.l_id;

              moveWidget(
                that.vm.$store,
                draggable_l_id,
                droppedOnThis_l_id);
              changeRect(
                that.vm.$store,
                draggable_l_id,
                droppedNewPos);
            } else if (draggableVue.templatename){
              let widgetType = draggableVue.templatename;

              addElement(
                that.vm.$store,
                droppedOnThis_l_id,
                droppedNewPos,
                widgetType);
            }
        }

    });

    // interact(el)
    //     .dropzone({q
    //         ondrop: function (e) {
    //
    //             // console.log("droppedOnThis:",e,e.relatedTarget.__vue__.widgetdata.l_id)
    //             // console.log("dropped on",e.target.__vue__.widgetdata.l_id)
    //
    //             // is this an OK way? Somehow, the __ say to me: "probably not"
    //             var targetId = e.target.__vue__.widgetdata.l_id;
    //             var model = e.draggable.model;
    //
    //             // find out how the drop el is positioned vs. your el (client rect?)
    //             var targetRect = e.target.getClientRects()[0];
    //             var droppedRect = e.relatedTarget.getClientRects()[0];
    //
    //             var droppedNewPos = {
    //                 top: droppedRect.top - targetRect.top,
    //                 left: droppedRect.left - targetRect.left
    //             };
    //
    //             if(!model.l_id &&
    //                 model.templatename &&
    //                 model.templatestring){ //element is new and has attributes of a template
    //
    //               console.log("newElementDropped!",model)
    //               var widgetType =  model.templatename;
    //               addElement(that.vm.$store,targetId,droppedNewPos,widgetType);
    //
    //             } else { //...otherwise, element should be an existing element on canvas
    //               var droppedId = model.l_id;
    //               console.log("existing ElementDropped!",model)
    //             //create a new element if dropped from sidebar
    //             //console.log("MW",moveWidget);
    //             //change parent if dropped from another element
    //             moveWidget(that.vm.$store, droppedId,targetId); //this.vm.$store is not ideal (http://vuex.vuejs.org/en/actions.html)
    //
    //             //console.log("newpos",droppedNewPos);
    //             changeRect(that.vm.$store,droppedId,droppedNewPos);
    //           }
    //
    //         },
    //         //accept:".mockupwidget", //not good. This is paralell DOM (CSS selector)/vue (where it should be configured)
    //         overlap: 1,
    //     });
  },
  update: function (newValue, oldValue) {
    // do something based on the updated value
    // this will also be called for the initial value
  },
  unbind: function () {
    // do clean up work
    // e.g. remove event listeners added in bind()
    jquery(this.el).droppable( "destroy" );
  }
});
