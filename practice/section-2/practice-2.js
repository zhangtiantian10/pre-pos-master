function count_same_elements(collection) {
  var arry1 = [];
  var arry = [];
	for(var i = 0; i<collection.length;i++)
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
