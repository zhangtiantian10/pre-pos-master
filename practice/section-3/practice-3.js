function create_updated_collection(collection_a, object_b) {
  var collection_b = count_same_elements(collection_a);
  var newArray = [];
  for(var i = 0; i<collection_b.length;i++){
    newArray[i] = fullThreeCutOne(collection_b[i],object_b.value);
  }
  return newArray;
}
function count_same_elements(collection) {
	var array = [{key:collection[0],count:1}];
	for(var i = 1; i<collection.length;i++)
	{
		array = isExit(collection[i],array);
	}
  return array;
}

function isExit(element,collection){
  for(var i = 0; i<collection.length;i++)
  {
    if(element === collection[i].key)
    {
      collection[i].count++;
      return collection;
    }
  }
  collection[collection.length]={key:element,count:1};
  return collection;
}

function fullThreeCutOne(element,object){
  for(var i = 0; i<object.length;i++)
  {
    if (element.key === object[i]) {
      element.count -= parseInt(element.count/3);
      return element;
    }
  }
  return element;
}
