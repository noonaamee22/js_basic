function greeting (name){
  console.log('Halo',name);
}
// function di variable
const sayHalo = greeting

greeting("andi")
sayHalo('andra')

// function di parameter
function addName(callback){
  callback('Budi')
}
addName(greeting)
addName(sayHalo)


