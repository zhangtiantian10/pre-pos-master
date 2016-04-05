function collect_same_elements(collection_a, object_b) {
	var arry = [];
	for(var i = 0 ;i<collection_a.length;i++)
	{
		if(isExit(collection_a[i],object_b.value))
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
