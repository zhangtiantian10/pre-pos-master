function collect_same_elements(collection_a, object_b) {
	var array = [];
	for(var i = 0 ;i<collection_a.length;i++)
	{
		if(isExit(collection_a[i],object_b.value))
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
