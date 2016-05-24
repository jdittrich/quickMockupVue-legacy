import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'

Vue.use(Vuex);

const mutations = {
	ADDELEMENT(state, text) { // first
		var standardelement = {children:[],text:"",id:""};
		standardelement.text= text;
		standardelement.id = ""+Math.random();//poor mans (not very) UUID :-) replace with proper thing.later TODO4
		state.elements.push(standardelement);
	},
	DELETEELEMENT(state, element){ // first
		//see https://github.com/vuejs/vuex/blob/master/examples/todomvc/vuex/store.js
		//state.elements.$remove(element);

		//also: delete all children referring to it.

		state.elements.$remove(element)
	},
	/*TOTEMP(state,element){ //TODO second
		//copy element over to tempelement
	},*/
	ATTACH(state,parentElement,newElement){ //TODO second
		var newChildsId = newElement._id;
		parentElement.children.push(newChildsId);
	},
	DETACH(state,oldParent,elementToDetach){
		var id = elementToDetach._id;
		oldParent.children.$remove(id);

	},
	CHANGENAME(state,element,newName){ //TODO third
		element.text = newName;
	}
}


export default new Vuex.Store({
	state:state,
	mutations:mutations,
	strict: true
})


