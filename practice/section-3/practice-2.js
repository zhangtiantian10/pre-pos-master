function create_updated_collection(collection_a, object_b) {
  var newArray = [];
  for(var i = 0; i<collection_a.length;i++){
    newArray[i] = isExit(collection_a[i],object_b.value);
  }
  return newArray;
}
function isExit(element,object){
  for(var i = 0; i<object.length;i++)
  {
    if (element.key === object[i]) {
      element.count -= parseInt(element.count/3);
      return element;
    }
  }
  return element;
}
