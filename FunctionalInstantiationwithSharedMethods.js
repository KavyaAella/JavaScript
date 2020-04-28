const animalMethods = {
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    },
    sleep(length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    },
    play(length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  }

  function animal(name,energy){
    // object.create(name) makes to use the method in the name object or method
    let animal = Object.create(animalMethods)

      animal.name = name;
      animal.energy = energy;
  //     animal.eat = animalMethods.eat
  // animal.sleep = animalMethods.sleep
  // animal.play = animalMethods.play

  return animal;
  }
  const leo = animal('leo',10)
  console.log(leo.play(10))
 // console.log(snoop.play(5))