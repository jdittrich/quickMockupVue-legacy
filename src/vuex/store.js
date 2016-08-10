import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import _ from 'underscore';


Vue.use(Vuex);

function helperIdToObject(elements, id){
	//WHAT IT DOES: for an array of widgets, returns the widget that is the parent of the childElement
	var element = elements.find(function(element){
		return element.l_id === id;
	});
	return element;
}


function helperFindParentObject(possibleParents, childElement){
	//WHAT IT DOES: for an array of widgets, returns the widget that is the parent of the childElement
	var parent = possibleParents.find(function(possibleParent){
		return possibleParent.children.includes(childElement.l_id);
	});
	return parent;
}


function helperFindTemplate(templates,templatename){
  //WHAT IT DOES: for an array of templates, returns the template object with the templatename
  var template = templates.find(function(possibleTemplate){
		return possibleTemplate.name === templatename;
	});
	return template;
}


const mutations = {
	ADDELEMENT(state,futureParentId, rect,widgetType) {


		var new_l_id = ""+Math.random();//poor mans (not very) UUID :-) replace with proper thing.later TODO
		var template =  helperFindTemplate(state.widgetTemplates,widgetType);

		var newElement = {
			rect:{
				top:rect.top,
				left:rect.left,
				width:100,
				height:100
			},
			content:  JSON.parse(JSON.stringify(template.content)) || {}, //Clone-an-object-hack: Make Object a JSON-string, parse that string to a JSON/Javascript-Object back.
				style:template.style,
			l_id: new_l_id,
			children:[],
			widgetType: widgetType,
		};

		state.mockupwidgets.push(newElement);

		var parent = helperIdToObject(state.mockupwidgets, futureParentId);
		parent.children.push(newElement.l_id);
	},
	DELETEELEMENT(state, element){ // first
		//see https://github.com/vuejs/vuex/blob/master/examples/todomvc/vuex/store.js
		//state.elements.$remove(element);
		var elementsToRemove = [];

		var parent = helperFindParentObject(state.mockupwidgets,element);
		parent.children.$remove(element.l_id);

		elementsToRemove = [];

		//this adds all children to an array, so they can be removed
		//we dont need to collect ids referring to removed elements
		//since only parents can refer to childs - they all
		//be removed anyway.
		var collectChildren = function(startElement){
			elementsToRemove.push(element);
			startElement.children.forEach(function(childl_id,index,array){
				var childElement = helperIdToObject(element);
				collectChildren(element);
			});
		};

		//actually remove
		elementsToRemove.forEach(function(element,index,array){
			state.elements.$remove(element);
		});
	},
	/*TOTEMP(state,element){ //TODO second
		//copy element over to tempelement
	},*/
	// ATTACH(state,parentElement,newElement){ //TODO second
	// 	var newChildsId = newElement.l_id;
	// 	parentElement.children.push(newChildsId);
	// },
	// DETACH(state,oldParent,elementToDetach){
	// 	var id = elementToDetach.l_id;
	// 	oldParent.children.$remove(id);
	//
	// },
	CHANGENAME(state,element,newName){ //TODO third
		element.text = newName;
	},
	MOVEWIDGET(state,elementToMoveId,futureParentId){
		//console.log("state",state);
		var elementToMove = helperIdToObject(state.mockupwidgets,elementToMoveId);
		var currentParent = helperFindParentObject(state.mockupwidgets,elementToMove);
		var futureParent = helperIdToObject(state.mockupwidgets, futureParentId);

		currentParent.children.$remove(elementToMoveId);
		futureParent.children.push(elementToMoveId);
		// store.dispatch("DETACH",currentParent,elementToMove);
		// store.dispatch("ATTACH",futureParent,elementToMove);
	},
	CHANGERECT(state,element,rect){
		if(typeof element !== "object"){
			element = helperIdToObject(state.mockupwidgets,element);
		}
		console.log("rect",rect);
		element.rect.top    = rect.top    || element.rect.top;
		element.rect.left   = rect.left   || element.rect.left;
		element.rect.width  = rect.width  || element.rect.width;
		element.rect.height = rect.height || element.rect.height;
	},
	SELECTWIDGET(state,l_id){
		state.selectedWidget = l_id;
	},
	DELETESELECTED(state){
		var element = helperIdToObject(state.mockupwidgets,state.selectedWidget);

		mutations.DELETEELEMENT(state,element); //this seems not clean, I should rather use the collect children code, put it in a helper and call that both from deleteselected and delete
	},
	ADDWIDGETARRAYITEM(state,array){
		//for lists of items on components
		array.push("ChangeMe");
	},
	CHANGEWIDGETTEXT(state,content,text){
		content.text = text;
	},
	TOGGLEWIDGETSTATE(state,widgetstate,array){
		widgetstate.state = !widgetstate.state; //toggle

		if(array) { //if array was passed, make all sibling elemenents in that array deactivated. 
			array.forEach(function(element,index){
				element.widgetstate.state = false;
			})
		}
	}
};


export default new Vuex.Store({
	state:state,
	mutations:mutations,
	strict: true
});
