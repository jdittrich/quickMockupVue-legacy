
//============helpers============================
function helperIdToObject(elements, id){
	var element = elements.find(function(element){
		return element._id === id;
	})
	return element;
}


//============actions============================
function helperFindParentObject(possibleParents, childElement){
	var parent = possibleParents.find(function(possibleParent){
		return possibleParent.children.includes(childElement._id);
	});
	return parent; 
}



export  function addElement(store,child){
	store.dispatch("ADDELEMENT",child);
}


export  function deleteElement(store,element){
	store.dispatch("DELETEELEMENT",element);
}

export  function moveElement(store,elementToMoveId,futureParentId){

	var elementToMove = helperIdToObject(store.state.elements,elementToMoveId);
	var currentParent = helperFindParentObject(store.state.elements,elementToMove);
	var futureParent = helperIdToObject(store.state.elements, futureParentId)

	store.dispatch("DETACH",currentParent,elementToMove);
	store.dispatch("ATTACH",futureParent,elementToMove);
}


