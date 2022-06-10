const person = {
  firstname: 'joko',
  lastname: 'anwar',
  fullName: function(){
    return this.firstname + ' ' + this.lastname
  }
}

console.log(person)
console.log(person.firstname)
console.log(person.fullName())

