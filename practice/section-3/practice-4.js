function create_updated_collection(collection_a, object_b) {
  var collection_b = count_same_elements(collection_a);
  var newArray = [];
  for(var i = 0; i<collection_b.length;i++){
    newArray[i] = isExit2(collection_b[i],object_b.value);
  }
  return newArray;
}

function count_same_elements(collection) {
  var arry1 = collection[0].split("-");
  var arry = [];
  if(arry1.length === 2)
  {
    arry = [{key:arry1[0],count: parseInt(arry1[1])}];
  }
  else {
    arry = [{key:collection[0],count:1}];
  }
	for(var i = 1; i<collection.length;i++)
	{
    arry1 = collection[i].split("-");
    if (arry1.length !=1) {
      arry = isExit1(arry1,arry);
    }
    else {
      arry = isExit(collection[i],arry);
    }
	}

	return arry;
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

function isExit1(arry1,arry){
  for(var i = 0; i < arry.length; i++)
  {

    if(arry[i].key === arry1[0])
    {
      arry[i].count += parseInt(arry1[1]);
      return arry;
    }
  }
  arry[arry.length] = {key : arry1[0],count:parseInt(arry1[1])};
  return arry;
}

function isExit2(element,object){
  for(var i = 0; i<object.length;i++)
  {
    if (element.key === object[i]) {
      element.count = element.count - parseInt(element.count/3);
      return element;
    }
  }
  return element;
}
