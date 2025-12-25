// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// const message: string = greet("World");
// console.log(message);

// function add(a: number, b: number): number {
// return a + b;
// }

// console.log(add(5, 3));

// enum user {
//     name = "HEM",
//     id = 55,
//     city = "Rajkot"
// }

// console.log(user.city);

// let a;
// a=5;
// a="Hem";

// console.log(a.);

// interface book{
//     name: string,
//     email: string,
//     pass: string
// }

// interface user extends book {
//     id:number
// }

// function greet(obj:user){
//     obj.email
// }

// interface student{
//     name: string;
//     grade:number;
//     isgraduated:Boolean;
//     email?:string
// }
// const stu : student = {
//     name:"hem",
//     grade: 90,
//     isgraduated:true
// }
//  function printstatus(pri:student):string{
//     return `Student ${pri.name} has a grade of ${pri.grade}`
//  }
//  console.log(printstatus(stu));

// type PaymentMethod = "creditcard" | "paypal" | "cash";

// interface order{
//     orderid:number | string;
//     amount:number;
//     method:PaymentMethod;
// }
// const sta:order ={
//     orderid:123456,
//     amount:5600,
//     method: "cash"
// }
// function processorder(sts:order):string{
//     return `processing ${sts.method} payment for order ${sts.orderid}`
// }
// console.log(processorder(sta));

// type score = number | "N/A";

// interface classroom{
//     subject:string;
//     student: string[];
//     results: score[]
// }

// let passinggrade :[string,number]= ["math",28];

// function isclassfull(stu:classroom):boolean{
//     return stu.student.length>5;
// }
// const myclass: classroom={
//     subject: "english",
//     student:["a","b","c","d","e"],
//     results:[50,66,23,45,"N/A"]
// }
// console.log(isclassfull(myclass));

// interface Box<T>{
//     content:T;
//     timestamp: Date
// }
// function wrapinbox<T>(value: T):Box<T>{
// return {
//     content:value,
//     timestamp: new Date()
// }
// };
// const stringbox = wrapinbox<string> ("Heloo Hem");
// console.log(stringbox);

// class Vehicle {
//   // Shorthand constructor: defines and assigns properties in one line
//   constructor(
//     public readonly make: string,
//     public speed: number,
//     private vinNumber: number
//   ) {}

//   // Method to modify public data
//   accelerate(bonus: number): void {
//     this.speed += bonus;
//     console.log(`${this.make} is now going ${this.speed} km/h.`);
//   }

//   // Method to reveal private data
//   getIdentification(): number {
//     return this.vinNumber;
//   }
// }

// // --- Testing the Class ---
// const myCar = new Vehicle("Toyota", 60, 123456789);

// myCar.accelerate(20); // Output: Toyota is now going 80 km/h.

// // myCar.make = "Ford";    // Error: Cannot assign to 'make' because it is a read-only property.
// // myCar.vinNumber;        // Error: Property 'vinNumber' is private and only accessible within class 'Vehicle'.

// console.log("ID:", myCar.getIdentification()); // Works! Returns 123456789


// class animal{
//     constructor(public name : string){}
//     makesound():string{
//         return `${this.name} is sound`
//     }
// }
// class dog extends animal{
//     constructor(name:string,public breed?:string){
//          super(name);
//     }
   
// }
// let newdog = new dog("hello","germman");
// console.log(newdog.makesound());



// interface iscool{
//     id:number;
//     name:string
// };

// class hello implements iscool{
//     constructor(public id:number,public name:string,public age:number){
//         console.log(`${this.name} has id ${this.id} and age is ${this.age}`);
//     }
// }
// let pro = new hello(55,"hem",21);


abstract class employee{
    constructor(public name:string,protected id:number){}
    abstract getsalary():number;
}
class fulltimeemployee extends employee{
    constructor(public annualsalary: number){super("khalistani",65);}
    getsalary() {
        return this.annualsalary;
    }
}
class contractor extends employee{
    constructor(public hourlyRate: number,public hoursWorked: number){super("kalua",65);}
    getsalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
let pro = new fulltimeemployee(656565);

let noob = new contractor(20,5);
console.log(`fte salary is:${pro.getsalary()}`);
    console.log(`ct salary is: ${noob.getsalary()}`);