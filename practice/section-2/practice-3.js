function count_same_elements(collection) {
  var collection_a = [];
  var newArray = [];
  for (var i = 0; i < collection.length; i++) {
    collection_a = collection[i].split("");
    if (collection_a.length === 1)
      newArray = isExit(collection[i], newArray, 1);
    else if (collection_a.length <= 4)
      newArray = isExit(collection_a[0], newArray, parseInt(collection_a[2]));
    else {
      var count = parseInt(collection_a[2]*10) + parseInt(collection_a[3]);
      newArray = isExit(collection_a[0], newArray,count);
    }
  }
  return newArray;
}

function isExit(collection_a,newArray,count){
  for (var j = 0; j < newArray.length; j++) {
    if (collection_a[0] === newArray[j].name) {
      newArray[j].summary += count;
      return newArray;
    }
  }
  newArray[j] = {name: collection_a[0], summary: count};
  return newArray;
}

