function count_same_elements(collection) {
	var array = [];
	for(var i = 0; i<collection.length;i++)
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
	collection[i]={key:element,count:1};
	return collection;
}
