function perkalian (valueA , valueB){
  if(typeof valueA != 'number' || typeof valueB != 'number'){
    console.log("value not a number")
    return 0
  }
  return valueA * valueB;
}

console.log(perkalian(2,'A'))


