function count_same_elements(collection) {
	var arry = [];
	for(var i = 0; i<collection.length;i++)
	{
		arry = isExit(collection[i],arry);
	}
	console.log(arry);
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
