function collect_same_elements(collection_a, collection_b) {
	var arry = [];
	for(var i = 0 ;i<collection_a.length;i++)
	{
		if(isExit(collection_a[i],collection_b[0]))
			arry.push(collection_a[i]);
	}

	return arry;
}

function isExit(elemt,collection){
	for(var i= 0; i<collection.length; i++)
	{
		if(elemt === collection[i])
			return true;
	}
	return false;
}
