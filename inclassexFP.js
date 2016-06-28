// map filter reduce find pluck

var pnumbers = [
    {digits: "876-5309", type: "home", unlisted: true},
    {digits: "555-5355", type: "cell", unlisted: true},
    {digits: "776-4676", type: "business", unlisted: false},
    {digits: "555-5355", type: "cell", unlisted: true},
    {digits: "776-4676", type: "business", unlisted: false},
];

//map
var withAreaCode = pnumbers
  .map(function (pnumbers) {
    var prefix = "952";
    return {cellblock: prefix + " " + pnumbers.digits + " " + pnumbers.type};
});

console.log(withAreaCode);   

// a couple of tries  
//var donotcall = pnumbers.filter (function(unlisted){
  
// });
  
// function filter(array, callback) {
//   var donotcall2 = pnumbers;
//   reduce (array, function (a,b){
//     var dropnum = callback(b);
//     if (dropnum = false) {
//       donotcall2.push(b);
//     }
//     });
//   }

// console.log(donotcall2);

// function where(list, properties) {
//   var donotcall3 = [];
//   for(var i=0; i<list.length; i++){
//     var result = true;
//     for(var prop in properties){
//       if(list[i][prop] !== properties[prop]){
//          result = false;
//          }
//          }
//     if(result) {
//       donotcall3.push(list[i]);
//     }
//   }
//   return results;
// }

function where(list, properties) {

    var results = [];

    for (var i=0; i<list.length; i++) {
      var result = true;
      for (var prop in properties) {
        if(list[i][prop] !== properties[prop]) {
          result = false;
        }
      }
      if(result) {
        results.push(list[i]);
      }
    }
    return results;
}

var donotcall = where(pnumbers, {unlisted: true});
console.assert(donotcall.length === 3);

function forEach(array, callback){
  for (var i = 0; i < array.length; i++) {
    // ie passes in callback('hello',0. ['hello', 'world']) for i
  callback(array[i], i, array);
  }
}

function reduce(array, callback){ //takes many and usually returns one
  var cascade;
    forEach(array, function(value, i, callbackArray) {
      if(i === 0) {
        cascade = value;
      }
      else if (i < array.length) {
        cascade = callback(cascade, value);
      }
    });
    return cascade;
}

function filter(array, callback){
  var returnArray = [];
  reduce (array, function (a, b) {
    var valueFun = callback(b);
    if (valueFun) {
      returnArray.push(b);
      }
    });
  return returnArray;
}

var celltype = filter(pnumbers, function(item){
  console.log(item.type);
  if (item.type === "cell") {
  return true;
  }
  else {
    return false;
  }                                                  
});

console.log(celltype);
console.assert(celltype.length);





















