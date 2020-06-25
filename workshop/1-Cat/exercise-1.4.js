// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.species = "cat";
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
    this.name = name;
    this.breed = breed;
  }
  sleep = (sleepHours) => {
    this.tiredness -= sleepHours * 5;
    this.happiness += sleepHours * 1;
  };

  // - Write an eat method that accept number of kibbles and reduces hunger by 1/5
  //   that number.
  eat = (kibbles) => {
    this.hunger -= kibbles / 5;
    this.happiness += kibbles / 10;
  };
  // - Write an play method that accept minutes and reduces loneliness by 3 times
  //   that number.

  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += minutes * 3;
  };
  wait = (minutes) => {
    this.tiredness += minutes / 4;
    this.hunger += minutes / 4;
    this.loneliness += minutes / 4;
    this.happiness += minutes / 4;
  };
}
const boots = new Cat("Boots", "Siamese");

boots.wait(20);

console.log(boots);
