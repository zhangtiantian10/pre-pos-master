function count_same_elements(collection) {
  var collection_a = [];
  var newArray = [];
  for (var i = 0; i < collection.length; i++) {
    collection_a = collection[i].split("");
    if (collection_a.length === 1)
      newArray = isExit(collection[i],newArray);
    else if (collection_a.length <= 4)
      newArray = isExit1(collection_a,newArray);
    else
      newArray = isExit2(collection_a,newArray);
  }
  console.log(newArray);
  return newArray;
}

function isExit(collection_a,newArray){
  for (var j = 0; j < newArray.length; j++) {
    if (collection_a[0] === newArray[j].name) {
      newArray[j].summary ++;
      return newArray;
    }
  }
  newArray[newArray.length] = {name: collection_a[0], summary: 1};
  return newArray;
}

function isExit1(collection_a,newArray){
  for (var j = 0; j < newArray.length; j++) {
    if (collection_a[0] === newArray[j].name) {
      newArray[j].summary += parseInt(collection_a[2]);
      return newArray;
    }
  }
  newArray[newArray.length] = {name: collection_a[0], summary: parseInt(collection_a[2])};
  return newArray;
}

function isExit2(collection_a,newArray){
  for (var j = 0; j < newArray.length; j++) {
    if (collection_a[0] === newArray[j].name) {
      newArray[j].summary += (parseInt(collection_a[2])*10+parseInt(collection_a[3]));
      return newArray;
    }
  }
  newArray[newArray.length] = {name: collection_a[0], summary: (parseInt(collection_a[2])*10+parseInt(collection_a[3]))};
  return newArray;
}
