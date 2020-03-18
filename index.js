class Father {
  constructor(name = "Darth") {
    this.name = name.toUpperCase();
  }
  get myName() {
    return this.name;
  }
}
const father1 = new Father();
//console.log(father1.myName);
class Son extends Father {
  constructor(name = "Darth") {
    super();
    this.name = name;
    console.log(father1.myName);
  }
  get myName() {
    return `${this.name} ${father1.myName}'s son`;
  }
}
const son1 = new Son("Luke"); //DARTH
console.log(son1.myName); // Luke DARTH's son
