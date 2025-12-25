// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var employee = /** @class */ (function () {
    function employee(name, id) {
        this.name = name;
        this.id = id;
    }
    return employee;
}());
var fulltimeemployee = /** @class */ (function (_super) {
    __extends(fulltimeemployee, _super);
    function fulltimeemployee(annualsalary) {
        var _this = _super.call(this, "khalistani", 65) || this;
        _this.annualsalary = annualsalary;
        return _this;
    }
    fulltimeemployee.prototype.getsalary = function () {
        return this.annualsalary;
    };
    return fulltimeemployee;
}(employee));
var contractor = /** @class */ (function (_super) {
    __extends(contractor, _super);
    function contractor(hourlyRate, hoursWorked) {
        var _this = _super.call(this, "kalua", 65) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    contractor.prototype.getsalary = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return contractor;
}(employee));
var pro = new fulltimeemployee(656565);
var noob = new contractor(20, 5);
console.log("fte salary is:".concat(pro.getsalary()));
console.log("ct salary is: ".concat(noob.getsalary()));
