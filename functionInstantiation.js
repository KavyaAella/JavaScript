//creating objections and adding properties to it by dot notation
// let animal = {}
//     animal.name = "leo"
//     animal.energy = 10
//     animal.eat = function (amount) {
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//       }
      
//       animal.sleep = function (length) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//       }
      
//       animal.play = function (length) {
//         console.log(`${this.name} is playing.`)
//         this.energy -= length
//       }
//encapsulating that logic inside of a function that we can invoke whenever we needed to create a new animal
function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
  
    animal.eat = function (amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
  
    animal.sleep = function (length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
  
    animal.play = function (length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  
    return animal
  }
  
  const leo = Animal('Leo', 7)
  const snoop = Animal('Snoop', 10)
console.log(leo.eat(10))
