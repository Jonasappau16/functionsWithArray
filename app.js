//  In your app.js file, declare a variable that's value is an array that has at least 10 values in it.


let names = [ "Jonas","Ryan","Mike","Linda","John","Jayson"," Jackson","Jeremy","Patrick","Kable","Sam"]; 

// . Create a function that takes two arguments. The first argument should an array, the second argument can be any value. The function should use the push method on the array in the first argument, and push the value from the second argument. Finally this function should return the array that the push method was used on.

function familyNames (lastName1,lastName2){
    lastName1.push(lastName2);
    return lastName1;

}
console.log(familyNames(names,'Rice'));

//  Create a function that takes an array as an argument uses the splice method on that array and then returns that array. You may choose what values to use in the second and third parameter of the splice method.

function names (newArray) {
    let newNames = names.splice(2,5)
    return newNames;
}
console.log(newNames);


//  Create a function that takes an array as an argument uses the /SLICE/ method on that array and assigns that value to a new variable. Your function should then return that variable. You may choose what values to use in the second and third parameter of the slice method.

function ColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
  }
  console.log(
      ColorNames([
      "DarkGoldenRod",
      "WhiteSmoke",
      "LavenderBlush",
      "PaleTurqoise",
      "FireBrick"
    ])
  );