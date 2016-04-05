function create_updated_collection(collection_a, object_b) {
  var newArray = collection_a;
  for(var i = 0; i<collection_a.length;i++){
    if(isExit(collection_a[i].key,object_b.value)){
      newArray[i].count--;
    }
  }
  return newArray;
}
function isExit(element,object){
  for(var i = 0; i<object.length;i++)
  {
    if (element === object[i]) {
      return true;
    }
  }
  return false;
}
