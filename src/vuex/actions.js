//============helpers============================
//I suppose those can go.
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
		return possibleTemplate.templatename === templatename;
	});
	return template;
}


//============actions============================

export  function addElement(store,futureParentId,rect,widgetType){
	store.dispatch("ADDELEMENT",futureParentId,rect,widgetType);
}


export  function deleteElement(store,element){
	store.dispatch("DELETEELEMENT",element);
}

export function deleteSelected(store){
	store.dispatch("DELETESELECTED");
}

export function changeRect(store, element, changedRect){
	store.dispatch("CHANGERECT",element,changedRect);
	/*naming is hard here. First I had seperate position/dimension functions, but if the user e.g. changes the width to the right, I need adjust the position as well */
}

export function moveWidget(store,elementToMoveId,futureParentId){
	console.log("iamstore",store);
	store.dispatch("MOVEWIDGET",elementToMoveId,futureParentId);
	// var elementToMove = helperIdToObject(store.state.elements,elementToMoveId);
	// var currentParent = helperFindParentObject(store.state.elements,elementToMove);
	// var futureParent = helperIdToObject(store.state.elements, futureParentId);
	//
	// store.dispatch("DETACH",currentParent,elementToMove);
	// store.dispatch("ATTACH",futureParent,elementToMove);
}

export function selectWidget(store,l_id){
	store.dispatch("SELECTWIDGET",l_id);
}

export function addWidgetArrayItem(store,array){
	store.dispatch("ADDWIDGETARRAYITEM",array);
}
