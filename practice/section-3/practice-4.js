function create_updated_collection(collection_a, object_b) {
  var collection_b = count_same_elements(collection_a);
  var newArray = [];
  for(var i = 0; i<collection_b.length;i++){
    newArray[i] = fullThreeCutOne(collection_b[i],object_b.value);
  }
  return newArray;
}

function count_same_elements(collection) {
  var array1 = [];
  var array = [];
  for(var i = 0; i<collection.length;i++)
  {
    array1 = collection[i].split("-");
    if (array1.length === 1) {
      array = isExit(collection[i],array,1);
    }
    else {
      array = isExit(array1[0],array,parseInt(array1[1]));
    }
  }
  return array;
}

function isExit(element,collection,count){
  for(var i = 0; i<collection.length;i++)
  {
    if(element === collection[i].key)
    {
      collection[i].count += count;
      return collection;
    }
  }
  collection.push({key:element,count:count});
  return collection;
}

function fullThreeCutOne(element, object){
  for(var i = 0; i<object.length;i++)
  {
    if (element.key === object[i]) {
      element.count -= parseInt(element.count/3);
      return element;
    }
  }
  return element;
}
