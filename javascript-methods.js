/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  const resultArray = [];

  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    // element, index, array
    resultArray[i] = callbackFn(this[i], i, this);
  }

  return resultArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  const resultArray = [];

  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    // element, index, array
    if(callbackFn(this[i], i, this)) {
      resultArray[resultArray.length] = this[i];
    }
  }

  return resultArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    // element, index, array
    if(callbackFn(this[i], i, this)) return true;
  }

  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    // element, index, array
    if(!callbackFn(this[i], i, this)) return false;
  }

  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  let accumulator = 0;

  for(let i = 0; i < this.length; i++) {
    if(this[i] === undefined) continue;
    // accumulator, currentValue, currentIndex, array
    accumulator = callbackFn(accumulator, this[i], i, this);
  }

  return accumulator;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for(let i = 0; i < this.length; i++) {
    // searchElement, fromIndex
    if(this[i] === searchElement) return true;
  }

  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for(let i = 0; i < this.length; i++) {
    // searchElement, fromIndex
    if(this[i] === searchElement) return i;
  }

  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for(let i = this.length - 1; i >= 0; i--) {
    // searchElement, fromIndex
    if(this[i] === searchElement) return i;
  }

  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  let keysArr = [];
  let index = 0;

  for(element in object) {
    keysArr[index] = element;
    index++;
  }

  return keysArr;
};

// VALUES //
Object.myValues = function(object) {
  let keysArr = [];
  let index = 0;

  for(element in object) {
    keysArr[index] = object[element];
    index++;
  }

  return keysArr;
};