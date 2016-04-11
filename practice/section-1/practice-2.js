function collect_same_elements(collection_a, collection_b) {
	var array = [];
	for(var i = 0 ;i<collection_a.length;i++)
	{
		if(isExit(collection_a[i],collection_b[0]))
			array.push(collection_a[i]);
	}
	return array;
}

function isExit(element,collection){
	for(var i= 0; i<collection.length; i++)
	{
		if(element === collection[i])
			return true;
	}
	return false;
}
