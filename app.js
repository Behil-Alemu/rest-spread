//function filterOutOdds() {
    // var nums = Array.prototype.slice.call(arguments);
    // return nums.filter(function(num) {
    //   return num % 2 === 0
    // });
//   }
const filterOutOdd = (...nums) => nums.filter(num => num % 2 === 0 ); 


//findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1
// what I did?
// const findMin = (...values)=> {
//     return values.reduce((min, currVal) => {
//         return currVal > min ? min : currVal;
//     })
// }

const findMin = (...values)=> Math.min(...values)

//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2)=> ({...obj1, ...obj2})

//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
// i used + and for each doesnt work?
const  doubleAndReturnArgs = (arr, ...more)=> [arr, ...more.map((num)=> num *2)

// function removeRandom(items) {
// }


// const removeRandom = (...items) => items.filter( num  => num.pop([0]) ) dont get what they did.

const removeRandom = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }


// /** Return a new array with every item in array1 and array2. */
// function extend(array1, array2) {
// }

const extended = (array1, array2)=> [...array1, ...array2]

///** Return a new object with all the keys and values
// from obj and a new key/value pair */
// function addKeyVal(obj, key, val) {
// } wjen to use {} in an arrow

const addKeyVal = (obj, key, val) =>{
let newObj = { ...obj }
  newObj[key] = val;
  return newObj;}

// /** Return a new object with a key removed. */
// function removeKey(obj, key) {
// }


// const removeKey = ()
const removeKey = (obj, key) => {

    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

/** Combine two objects and return a new object. */
// function combine(obj1, obj2) {
// } is this the same as return

const combine = (obj1, obj2)=> ({...obj1, ...obj2})

/** Return a new object with a modified key and value. */
// function update(obj, key, val) {
// } same are the top one ?
const unpdate = (obj, key, val) =>{
    let newObj = { ...obj }
      newObj[key] = val;
      return newObj;}
    