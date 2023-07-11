class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting(name) {
    //return "Hi!";
    return `Hi I am ${this.name}`;
  }

  getDescription() {
    return `Hi My name is ${this.name} I am ${this.age} years old`;
  }
}

let me = new Person("Shahid", 35);
console.log(me);

//set up constructor to take name and age to 0

//getDescription  - NAME is AGE is years old

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
  if(this.hasMajor()){
    description += `\nI study in the field of ${this.major}`
  };
  }
  return description;
}

let Dave = new Student("Davy Boy", 26, "Mathematics");
console.log(Dave);
console.log(Dave.major);


//Traveler -> Person
//Add suppot for homeLocation
//Overide getGreeting
//1. if there is a home location include that in hte message Hi, I am Shahid Amin
//2. Hi. I am Andrew Mead

class Traveler extends Person{
  constructor(name, age, homelocation){
    super(name,age);
    this.homelocation = homelocation;
  }
  getGreeting(){
    let greeting = super.greeting();

    if(this.homeLocation){
      //add Home Location 
      greeting =+ ` I am visinting from ${this.homelocation}`

    }
    return greeting;
  }

