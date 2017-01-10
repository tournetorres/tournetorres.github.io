
 function objectValues(object) {
   return Object.values(object);
}
 
  function keysToString(object) {
   return Object.keys(object).join(" ");
}

function valuesToString(object){
  var arr = [];
  var array = Object.values(object);
    for (var i=0; i<array.length; i++) {
      if (typeof array[i] === 'string') {
        arr.push(array[i]);
      }
    
    }
    
  return arr.join(" ");

}

function arrayOrObject(data) {
  if (Array.isArray(data)) {
    return "array";
  }
  else {
    return "object";
  }
}

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function capitalizeAllWords(words) {
  return words.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
}

function welcomeMessage(object){
  return "Welcome " + capitalizeWord(object.name) + "!" ;
  
}

function profileInfo(object){
  return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species) ;
  
}

function maybeNoises(object){
 if (object.hasOwnProperty("noises") && object.noises.length > 0) {
     var noises = object.noises.join(" ");
       return noises;
     }
  else {
    return 'there are no noises';
  }
}

function hasWord(data, string) {
  if (data.includes(string)) {
    return true;
  }
  else {
    return false;
  }
}

function addFriend(string, object){
  object.friends.push(string);
  return object;
}

function isFriend (string, object) {
  
  if (object.hasOwnProperty("friends") && object.friends.includes(string)) {
      return true;
      }
  else {
      return false;
      }
}

var nonFriends = function (name, list) {
    var nonfriends = []; 
    for (var i = 0; i < list.length; i++) { 
        var friends = list[i].friends; 
        var isFriend = false;
        if (list[i].name !== name) { 
            for (var e=0; e < friends.length; e++) { 
                if (friends[e] === name) { 
                    isFriend = true; 
                } 
            }
            if (!isFriend) nonfriends.push(list[i].name); 
        } else {
            isFriend = true; 
        }
    }
    return nonfriends;
};

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

function removeProperties(object, keys){
    for(let i = 0; i< keys.length; i++){
        delete object[keys[i]];
    }
}

function dedup(arr){
    var array = [];
    for (let i = 0; i < arr.length; i++){
        if(array.indexOf(arr[i]) === -1) array.push(arr[i]);
    }
    return array;
}
